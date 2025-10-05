export async function processNotionImages(html: string): Promise<string> {
  console.log('Processing images in HTML:', html.substring(0, 200));
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  const images = tempDiv.querySelectorAll('img');
  console.log('Found images:', images.length);
  
  // 处理每个图片
  for (const img of Array.from(images)) {
    // 先从属性中获取原始src值，避免浏览器自动解码
    let src = img.getAttribute('src') || '';
    console.log('Processing image with src:', src);
    
    // 修复HTML实体编码问题 - 必须在处理URL之前进行
    if (src.includes('&')) {
      src = src.replace(/&/g, '&');
      img.setAttribute('src', src);
    }
    
    // 处理Notion的attachment格式
    if (src.includes('attachment:')) {
      console.log('Found attachment image, processing...')
      try {
        const pageImages = document.querySelectorAll('img')
        let foundImage: HTMLImageElement | null = null
        const parts = src.split(':')
        const attachmentId = parts.length >= 2 ? parts[1] : ''
        const fileName = parts.length >= 3 ? parts[2] : ''
        console.log('Looking for image id:', attachmentId, 'filename:', fileName)

        for (const pageImg of Array.from(pageImages)) {
          const pageSrc = pageImg.src || ''
          const idMatch = attachmentId ? pageSrc.includes(attachmentId) : true
          const nameMatch = fileName ? pageSrc.includes(fileName) : true
          if (idMatch && nameMatch) {
            foundImage = pageImg
            console.log('Found matching image:', pageSrc)
            break
          }
        }

        if (foundImage?.complete) {
          console.log('Image found and loaded, converting to base64')
          const imgLoader = document.createElement('img')
          imgLoader.crossOrigin = 'Anonymous'
          imgLoader.src = foundImage.src
          await new Promise<void>((resolve, reject) => {
            imgLoader.onload = () => resolve()
            imgLoader.onerror = () => reject(new Error('Failed to load image'))
          })
          const canvas = document.createElement('canvas')
          const ctx = canvas.getContext('2d')
          if (ctx) {
            canvas.width = imgLoader.naturalWidth
            canvas.height = imgLoader.naturalHeight
            ctx.drawImage(imgLoader, 0, 0)
            const base64 = canvas.toDataURL('image/png')
            console.log('Converted to base64, length:', base64.length)
            img.src = base64
          }
        } else {
          console.log('Image not found or not loaded:', src)
        }
      } catch (error) {
        console.warn('Failed to process attachment image:', error)
      }
    }
    
    // 处理其他Notion图片URL
    else if (src.includes('notion.so') || src.includes('notionusercontent.com')) {
      // 对于其他Notion图片URL，保留原样
      // 浏览器会自动处理身份验证
      console.log('Keeping Notion image URL:', src);
    }
  }
  
  const result = tempDiv.innerHTML;
  console.log('Processed HTML:', result.substring(0, 200));
  return result;
}