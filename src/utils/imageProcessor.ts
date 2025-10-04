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
      console.log('Found attachment image, processing...');
      try {
        // 在当前页面中查找匹配的图片元素
        // Notion页面中的图片元素应该已经加载了
        const pageImages = document.querySelectorAll('img');
        let foundImage: HTMLImageElement | null = null;
        const fileName = src.split(':').pop() || '';
        console.log('Looking for image with filename:', fileName);
        
        // 遍历页面中的所有图片，查找匹配的图片
        for (const pageImg of Array.from(pageImages)) {
          const pageSrc = pageImg.src || '';
          // 检查图片URL是否包含相同的文件名
          if (pageSrc.includes(fileName)) {
            foundImage = pageImg;
            console.log('Found matching image:', pageSrc);
            break;
          }
        }
        
        // 如果找到了匹配的图片元素，且图片已经加载完成
        if (foundImage && foundImage.complete) {
          console.log('Image found and loaded, converting to base64');
          
          // 创建一个隐藏的img元素来重新加载图片，设置crossOrigin属性
          const imgLoader = document.createElement('img');
          imgLoader.crossOrigin = 'Anonymous';
          imgLoader.src = foundImage.src;
          
          // 等待图片加载完成
          await new Promise<void>((resolve, reject) => {
            imgLoader.onload = () => resolve();
            imgLoader.onerror = () => reject(new Error('Failed to load image'));
          });
          
          // 创建canvas来获取图片数据
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          
          if (ctx) {
            // 设置canvas尺寸与图片相同
            canvas.width = imgLoader.naturalWidth;
            canvas.height = imgLoader.naturalHeight;
            
            // 将图片绘制到canvas上
            ctx.drawImage(imgLoader, 0, 0);
            
            // 获取base64数据
            const base64 = canvas.toDataURL('image/png');
            console.log('Converted to base64, length:', base64.length);
            
            // 更新img标签的src属性为base64
            img.src = base64;
          }
        } else {
          // 如果没有找到匹配的图片或图片未加载完成，保留原始URL
          console.log('Image not found or not loaded:', src);
        }
      } catch (error) {
        console.warn('Failed to process attachment image:', error);
        // 保留原始URL
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