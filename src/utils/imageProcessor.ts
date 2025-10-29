/**
 * 处理Notion导出HTML中的图片
 * 解析HTML内容，查找并处理所有图片元素，包括修复URL编码问题和处理attachment格式的图片
 * 为图片添加nice-img类名以便应用样式
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
    console.log('Processing attachment image:', src)
    try {
      // 先尝试直接替换src为真实URL
      const realUrl = await findRealImageUrl(src)
      if (realUrl) {
        console.log('Found real image URL:', realUrl)
        // 尝试加载并转换为base64
        try {
          img.src = realUrl
          await loadImage(img)
          await convertImageToBase64(img, img)
        } catch (loadError) {
          console.warn('Failed to load real image, keeping original:', loadError)
          // 加载失败，保留原URL（虽然可能会显示错误）
          img.src = realUrl
        }
      } else {
        console.log('No real image URL found')
      }
    } catch (error) {
      console.warn('Failed to process attachment image:', error)
    }
    return
  }

  // 处理其他Notion图片URL - 转换为base64
  if (src.includes('notion.so') || src.includes('notionusercontent.com')) {
    console.log('Converting Notion image to base64:', src)
    await convertImageToBase64(img, img)
  }
}

/**
 * 从页面中找到与attachment对应的真实图片URL
 */
async function findRealImageUrl(attachmentSrc: string): Promise<string | null> {
  // 解析attachment格式的src，提取ID和完整attachment标记
  const parts = attachmentSrc.split(':')
  const attachmentId = parts.length >= 2 ? parts[1] : ''
  const fullAttachment = `attachment:${attachmentId}:` // 重建完整的attachment标记
  console.log('Looking for real image with attachment marker:', fullAttachment)

  // 从页面上的所有img元素中查找
  const allImages = document.querySelectorAll('img')
  console.log('Total images on page:', allImages.length)

  for (const pageImg of Array.from(allImages)) {
    const pageSrc = pageImg.getAttribute('src') || ''
    console.log('Checking page image:', pageSrc)

    // 将页面图片的src解码（处理%3A这样的编码）
    const decodedPageSrc = decodeURIComponent(pageSrc)
    console.log('Decoded page image src:', decodedPageSrc)

    // 检查解码后的路径是否包含完整的attachment标记
    const pathBeforeQuery = decodedPageSrc.split('?')[0]
    if (pathBeforeQuery.includes(fullAttachment)) {
      console.log('Found matching image by full attachment marker:', pageSrc)
      // 如果是相对路径，转换为绝对路径
      if (pageSrc.startsWith('/')) {
        const absoluteUrl = `https://www.notion.so${pageSrc}`
        console.log('Converted to absolute URL:', absoluteUrl)
        return absoluteUrl
      }
      return pageSrc
    }
  }

  console.log('No real image URL found')
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
