/**
 * 处理 Notion 导出 HTML 中的图片
 *
 * 核心策略：从 Notion 页面 DOM 中找到已加载的图片元素，
 * 直接绘制到 canvas 转 base64，避免 CORS 重新加载问题。
 */

/**
 * 从 Notion 页面内容区域收集内容图片元素
 * 过滤掉头像、图标等小型 UI 图片
 */
function getPageContentImages(): HTMLImageElement[] {
  const contentArea =
    document.querySelector('.notion-page-content') ||
    document.querySelector('.notion-scroller .notion-page-content') ||
    document.querySelector('[data-content-editable-root]')

  if (!contentArea) {
    console.warn('[N2W] Could not find Notion content area')
    return []
  }

  return Array.from(contentArea.querySelectorAll('img')).filter((img) => {
    const width = img.naturalWidth || img.width || 0
    const height = img.naturalHeight || img.height || 0
    if (width > 0 && width < 30) return false
    if (height > 0 && height < 30) return false
    return true
  })
}

/**
 * 解析 attachment 格式的 src
 * 格式: attachment:uuid:fileName
 */
function parseAttachmentSrc(src: string): { uuid: string; fileName: string } | null {
  const match = src.match(/^attachment:([a-f0-9-]+):([^?#]+)/)
  if (!match) return null
  return { uuid: match[1], fileName: match[2] }
}

/**
 * 从页面中找到与 attachment 对应的真实图片元素
 *
 * 匹配策略（按优先级）：
 * 1. attachment:uuid: 模式匹配 — 兼容 URL 编码格式
 * 2. UUID 子串匹配 — 新 CDN URL 可能包含 UUID
 * 3. 文件名匹配 — URL 路径中包含相同文件名
 * 4. 位置匹配 — 第 N 个 attachment 对应第 N 个页面内容图片
 */
function findRealImageElement(
  attachmentSrc: string,
  pageContentImages: HTMLImageElement[],
  attachmentIndex: number
): HTMLImageElement | null {
  const parsed = parseAttachmentSrc(attachmentSrc)
  if (!parsed) {
    console.warn('[N2W] Cannot parse attachment src:', attachmentSrc)
    return null
  }

  const { uuid, fileName } = parsed
  const fullAttachment = `attachment:${uuid}:`
  console.log(`[N2W] Finding image: uuid=${uuid}, fileName=${fileName}, index=${attachmentIndex}`)

  // 策略 1: attachment:uuid: 模式匹配
  for (const pageImg of pageContentImages) {
    const pageSrc = pageImg.getAttribute('src') || ''
    const decodedSrc = decodeURIComponent(pageSrc)
    const pathBeforeQuery = decodedSrc.split('?')[0]
    if (pathBeforeQuery.includes(fullAttachment)) {
      console.log('[N2W] Matched by attachment pattern')
      return pageImg
    }
  }

  // 策略 2: UUID 子串匹配
  for (const pageImg of pageContentImages) {
    const pageSrc = pageImg.getAttribute('src') || ''
    const decodedSrc = decodeURIComponent(pageSrc)
    if (decodedSrc.includes(uuid)) {
      console.log('[N2W] Matched by UUID substring')
      return pageImg
    }
  }

  // 策略 3: 文件名匹配
  for (const pageImg of pageContentImages) {
    const pageSrc = pageImg.getAttribute('src') || ''
    const decodedSrc = decodeURIComponent(pageSrc)
    const pathPart = decodedSrc.split('?')[0]
    if (pathPart.includes(fileName)) {
      console.log('[N2W] Matched by filename')
      return pageImg
    }
  }

  // 策略 4: 位置匹配
  if (attachmentIndex < pageContentImages.length) {
    console.log(`[N2W] Matched by position: [${attachmentIndex}]`)
    return pageContentImages[attachmentIndex]
  }

  console.warn('[N2W] No matching page image found for:', attachmentSrc)
  return null
}

/**
 * 判断 URL 是否为 Notion 图片 URL
 *
 * 注意：新版 Notion 的图片 src 是相对路径（/image/attachment%3A...），
 * 不含域名，因此需要额外识别 /image/ 路径。
 */
function isNotionImageUrl(src: string): boolean {
  return (
    src.includes('notion.so') ||
    src.includes('notion.com') ||
    src.includes('notionusercontent.com') ||
    src.includes('prod-files-secure') ||
    src.includes('/image/attachment') ||
    src.includes('/image/')
  )
}

/**
 * 从页面 DOM 的正文区域，按文档顺序收集图片 block 的真实 src
 *
 * 新版 Notion 复制出的 Markdown 丢失了图片 URL（只剩 "!文件名" 文本），
 * 这里从页面 DOM 重新获取每张图片的可访问 src，用于回填到 Markdown。
 *
 * 仅返回已加载完成的图片（naturalWidth > 0），跳过懒加载占位（notion-shimmer）。
 */
export function getPageImageBlocks(): string[] {
  const contentArea =
    document.querySelector('.notion-page-content') ||
    document.querySelector('.notion-scroller .notion-page-content') ||
    document.querySelector('[data-content-editable-root]')

  if (!contentArea) return []

  const blocks = Array.from(contentArea.querySelectorAll('.notion-image-block'))
  const srcs: string[] = []

  for (const block of blocks) {
    const img = block.querySelector('img')
    if (!img) continue
    const src = img.getAttribute('src') || ''
    if (!src) continue
    // 跳过尚未加载的懒加载占位
    if (img.naturalWidth === 0 && img.naturalHeight === 0) continue
    srcs.push(src)
  }

  return srcs
}

/**
 * 从 Notion 图片 src 中提取文件名
 * 支持新旧两种格式：
 *   - /image/attachment%3Auuid%3Afilename?... （新版，冒号 URL 编码）
 *   - attachment:uuid:filename                （老版）
 */
function extractFileNameFromSrc(src: string): string {
  // 优先匹配 query 之前的部分
  const pathPart = src.split('?')[0]
  // 新版：%3A 分隔；老版：冒号分隔
  const match = pathPart.match(/attachment(?:%3A|:)[a-f0-9-]+(?:%3A|:)([^/]+)$/)
  if (match) return decodeURIComponent(match[1])
  // 兜底：取路径最后一段
  const segs = pathPart.split('/')
  return decodeURIComponent(segs[segs.length - 1] || '')
}

/**
 * 回填新版 Notion 复制丢失的图片 URL
 *
 * 新版 Notion 复制出的 Markdown 中图片变成了纯文本 "!文件名.ext"（无 [] 和 ()），
 * marked 无法识别为图片。这里按文档顺序，用页面 DOM 收集到的真实 src 把这些
 * "!文件名" 文本还原成标准 Markdown 图片语法 ![文件名](src)，从而复用现有的
 * base64 转换链路。
 *
 * 回填策略（按文档顺序一一对应）：
 *   1. 优先按文件名精确匹配 DOM 中第 N 个同名图片
 *   2. 同名图片耗尽时，按出现顺序回退到下一个 DOM 图片
 *
 * @param markdown 从剪贴板读到的 Markdown（可能含残缺图片标记）
 * @param pageImageSrcs 从页面 DOM 按文档顺序收集的图片 src（来自 getPageImageBlocks）
 * @returns 回填后的 Markdown
 */
export function reconstructImagesInMarkdown(
  markdown: string,
  pageImageSrcs: string[]
): string {
  if (pageImageSrcs.length === 0) return markdown

  // 为每个 DOM 图片预解析文件名，便于精确匹配
  const domImages = pageImageSrcs.map((src) => ({
    src,
    fileName: extractFileNameFromSrc(src),
    used: false,
  }))

  // 匹配新版残缺图片标记。Notion 复制出的图片变成 "!文本"（无 []() 语法），
  // 且独占一行（行首紧跟 !，到行尾全是图片名/alt 文本）。
  // 图片标记内容允许：字母数字、中文、下划线、连字符、点、空格。
  // 两种形态都要支持：
  //   - 带扩展名：!image.png、!ScreenShot_2026-06-23_153749.png
  //   - 无扩展名：!公众号封面（作者把图片描述当成了 alt，没有文件扩展名）
  // 用行首 + 独占行来避免误伤句中/句末的感叹号（如 "太棒了!"、"!注意"）。
  return markdown.replace(
    /^!([^\s!()[\]]{1,}[^\n!()[\]]*)$/gim,
    (match, altText) => {
      const fileName = altText.trim()
      // 策略 1：按文件名/alt 精确匹配未使用的 DOM 图片
      let target = domImages.find((d) => !d.used && d.fileName === fileName)

      // 策略 1.5：alt 文本可能是 DOM 文件名去掉扩展名的形式（如 "公众号封面" ↔ "公众号封面.png"）
      if (!target) {
        target = domImages.find(
          (d) => !d.used && (d.fileName === `${fileName}.png` || d.fileName.startsWith(`${fileName}.`))
        )
      }

      // 策略 2：按出现顺序回退到第一个未使用的 DOM 图片（最常见：无扩展名 alt）
      if (!target) {
        target = domImages.find((d) => !d.used)
      }

      if (!target) return match // 没有可用的 DOM 图片，保留原文本

      target.used = true
      return `![${fileName}](${target.src})`
    }
  )
}

/**
 * 通过 fetch + FileReader 将图片 URL 转换为 base64
 *
 * Notion 的 /image/ 端点会 302 重定向到 img.notionusercontent.com (CDN)，
 * 导致 canvas 被 tainted（toDataURL 抛出 SecurityError）。
 * 所以使用 fetch() 拿到 blob，再用 FileReader.readAsDataURL 转 base64。
 */
async function fetchImageAsBase64(src: string): Promise<string | null> {
  try {
    const response = await fetch(src)
    if (!response.ok) return null
    const blob = await response.blob()
    return new Promise((resolve) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = () => resolve(null)
      reader.readAsDataURL(blob)
    })
  } catch {
    return null
  }
}

/**
 * 将页面上已加载的图片转换为 base64
 * 通过图片的 src 用 fetch 获取 blob 再转 base64，绕过 canvas tainted 问题
 */
async function convertLoadedImageToBase64(
  sourceImg: HTMLImageElement,
  targetImg: HTMLImageElement
): Promise<void> {
  const src = sourceImg.getAttribute('src') || ''
  if (!src) return

  const base64 = await fetchImageAsBase64(src)
  if (base64) {
    console.log('[N2W] Converted to base64, length:', base64.length)
    targetImg.src = base64
  }
}

/**
 * 通过 URL 加载图片并转换为 base64
 * 用于非 attachment 格式的 Notion 图片 URL
 */
async function convertUrlToBase64(url: string, targetImg: HTMLImageElement): Promise<void> {
  const base64 = await fetchImageAsBase64(url)
  if (base64) {
    targetImg.src = base64
  }
}

/**
 * 将图片包装在 section 容器中
 */
function wrapImageInSection(img: HTMLImageElement): void {
  const section = document.createElement('section')
  section.className = 'notion-image-container'
  img.parentNode?.replaceChild(section, img)
  section.appendChild(img)
}

/**
 * 处理 attachment 格式的图片
 * 从页面 DOM 中匹配已加载的图片，直接转 base64
 */
async function processAttachmentImage(
  img: HTMLImageElement,
  pageContentImages: HTMLImageElement[],
  attachmentIndex: number
): Promise<void> {
  const src = img.getAttribute('src') || ''
  const pageImg = findRealImageElement(src, pageContentImages, attachmentIndex)
  if (!pageImg) {
    console.warn('[N2W] No matching page image for:', src)
    return
  }

  try {
    await convertLoadedImageToBase64(pageImg, img)
  } catch (error) {
    console.warn('[N2W] Base64 conversion failed, using page URL as fallback:', error)
    const pageSrc = pageImg.getAttribute('src') || ''
    if (pageSrc) {
      img.src = pageSrc.startsWith('/') ? `${window.location.origin}${pageSrc}` : pageSrc
    }
  }
}

/**
 * 处理单个图片元素
 */
async function processImage(
  img: HTMLImageElement,
  pageContentImages: HTMLImageElement[],
  attachmentIndex: number
): Promise<void> {
  const src = img.getAttribute('src') || ''
  console.log('[N2W] Processing image:', src.substring(0, 80))

  if (src.includes('attachment:')) {
    await processAttachmentImage(img, pageContentImages, attachmentIndex)
    return
  }

  if (isNotionImageUrl(src)) {
    try {
      await convertUrlToBase64(src, img)
    } catch (error) {
      console.warn('[N2W] URL to base64 failed:', error)
    }
  }
}

/**
 * 处理 Notion 导出 HTML 中的所有图片
 */
export async function processNotionImages(html: string): Promise<string> {
  console.log('[N2W] Processing images, HTML length:', html.length)

  const tempDiv = document.createElement('div')
  tempDiv.innerHTML = html

  const htmlImages = Array.from(tempDiv.querySelectorAll('img'))
  console.log('[N2W] Images in HTML:', htmlImages.length)

  const pageContentImages = getPageContentImages()
  console.log('[N2W] Page content images:', pageContentImages.length)

  let attachmentIdx = 0

  for (const img of htmlImages) {
    const src = img.getAttribute('src') || ''
    const currentAttachmentIdx = attachmentIdx
    await processImage(img, pageContentImages, currentAttachmentIdx)
    if (src.includes('attachment:')) {
      attachmentIdx++
    }
    wrapImageInSection(img)
  }

  const result = tempDiv.innerHTML
  console.log('[N2W] Processed HTML length:', result.length)
  return result
}
