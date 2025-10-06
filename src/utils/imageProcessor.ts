/**
 * 处理Notion导出HTML中的图片
 * 解析HTML内容，查找并处理所有图片元素，包括修复URL编码问题和处理attachment格式的图片
 * @param html - 包含图片的HTML字符串
 * @returns 处理后的HTML字符串
 */
export async function processNotionImages(html: string): Promise<string> {
  console.log('Processing images in HTML:', html.substring(0, 200))
  // 创建临时div元素用于解析HTML
  const tempDiv = document.createElement('div')
  tempDiv.innerHTML = html
  // 查找所有图片元素
  const images = tempDiv.querySelectorAll('img')
  console.log('Found images:', images.length)

  // 处理每个图片
  for (const img of Array.from(images)) {
    await processImage(img)
  }

  const result = tempDiv.innerHTML
  console.log('Processed HTML:', result.substring(0, 200))
  return result
}

/**
 * 处理单个图片元素
 * 获取图片的src属性，修复HTML实体编码，然后根据URL类型进行相应处理
 * @param img - HTML图片元素
 */
async function processImage(img: HTMLImageElement): Promise<void> {
  // 先从属性中获取原始src值，避免浏览器自动解码
  const src = img.getAttribute('src') || ''
  console.log('Processing image with src:', src)

  // 处理Notion的attachment格式
  if (src.includes('attachment:')) {
    await processAttachmentImage(src, img)
    return
  }

  // 处理其他Notion图片URL
  if (src.includes('notion.so') || src.includes('notionusercontent.com')) {
    // 对于其他Notion图片URL，保留原样
    // 浏览器会自动处理身份验证
    console.log('Keeping Notion image URL:', src)
  }
}

/**
 * 处理attachment格式的图片
 * 根据attachment格式的src查找匹配的图片元素，并将其转换为base64格式
 * @param src - attachment格式的图片src
 * @param img - 目标图片元素
 */
async function processAttachmentImage(src: string, img: HTMLImageElement): Promise<void> {
  console.log('Found attachment image, processing...')
  try {
    // 根据attachment的ID和文件名查找匹配的图片
    const foundImage = findMatchingImage(src)

    if (foundImage?.complete) {
      // 如果图片已加载完成，转换为base64格式
      await convertImageToBase64(foundImage, img)
    } else {
      console.log('Image not found or not loaded:', src)
    }
  } catch (error) {
    console.warn('Failed to process attachment image:', error)
  }
}

/**
 * 根据attachment格式的src查找匹配的图片元素
 * 从页面中查找具有相同ID或文件名的图片元素
 * @param src - attachment格式的src字符串，格式为"attachment:id:filename"
 * @returns 匹配的HTML图片元素，如果没有找到则返回null
 */
function findMatchingImage(src: string): HTMLImageElement | null {
  // 获取页面中所有图片元素
  const pageImages = document.querySelectorAll('img')
  // 解析attachment格式的src，提取ID和文件名
  const parts = src.split(':')
  const attachmentId = parts.length >= 2 ? parts[1] : ''
  const fileName = parts.length >= 3 ? parts[2] : ''
  console.log('Looking for image id:', attachmentId, 'filename:', fileName)

  // 遍历页面中的图片，查找匹配的ID和文件名
  for (const pageImg of Array.from(pageImages)) {
    const pageSrc = pageImg.src || ''
    // 检查ID是否匹配（如果提供了ID）
    const idMatch = attachmentId ? pageSrc.includes(attachmentId) : true
    // 检查文件名是否匹配（如果提供了文件名）
    const nameMatch = fileName ? pageSrc.includes(fileName) : true
    if (idMatch && nameMatch) {
      console.log('Found matching image:', pageSrc)
      return pageImg
    }
  }

  return null
}

/**
 * 将找到的图片转换为base64格式并更新目标图片元素
 * 使用canvas将图片转换为base64编码，以避免跨域问题
 * @param foundImage - 已找到并加载的图片元素
 * @param targetImg - 需要更新的目标图片元素
 */
async function convertImageToBase64(
  foundImage: HTMLImageElement,
  targetImg: HTMLImageElement
): Promise<void> {
  console.log('Image found and loaded, converting to base64')
  // 创建一个新的图片元素用于加载，设置跨域属性以避免跨域限制
  const imgLoader = document.createElement('img')
  imgLoader.crossOrigin = 'Anonymous'
  imgLoader.src = foundImage.src

  // 等待图片加载完成
  await loadImage(imgLoader)

  // 创建canvas元素用于图片处理
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  if (ctx) {
    // 设置canvas尺寸为图片的原始尺寸
    canvas.width = imgLoader.naturalWidth
    canvas.height = imgLoader.naturalHeight
    // 将图片绘制到canvas上
    ctx.drawImage(imgLoader, 0, 0)
    // 将canvas内容转换为base64格式的PNG图片
    const base64 = canvas.toDataURL('image/png')
    console.log('Converted to base64, length:', base64.length)
    // 更新目标图片的src为base64格式
    targetImg.src = base64
  }
}

function loadImage(imgLoader: HTMLImageElement): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    imgLoader.onload = () => resolve()
    imgLoader.onerror = () => reject(new Error('Failed to load image'))
  })
}
