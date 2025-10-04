export async function processNotionImages(html: string): Promise<string> {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  const images = tempDiv.querySelectorAll('img');
  
  // 处理每个图片
  for (const img of Array.from(images)) {
    // 先从属性中获取原始src值，避免浏览器自动解码
    let src = img.getAttribute('src') || '';
    
    // 修复HTML实体编码问题 - 必须在处理URL之前进行
    if (src.includes('&amp;')) {
      src = src.replace(/&amp;/g, '&');
      img.setAttribute('src', src);
    }
    
    // 处理Notion的attachment格式
    if (src.includes('attachment:')) {
      // 提取attachment ID和文件名
        const attachmentMatch = src.match(/attachment:([a-f0-9-]+):([^?]+)/);
        if (attachmentMatch) {
          const fileName = attachmentMatch[2];
          
          // 从URL中提取页面ID
          const urlMatch = src.match(/id=([a-f0-9]{32})/);
          const pageId = urlMatch ? urlMatch[1] : window.location.pathname.match(/([a-f0-9]{32})/)?.[1];
          
          if (pageId) {
            // 构建正确的Notion图片URL
            src = `https://www.notion.so/image/${encodeURIComponent(fileName)}?id=${pageId}&table=block&width=1024&userId=v&cache=v2`;
            img.setAttribute('src', src);
          }
        }
    }
    
    // 处理其他Notion图片URL
    if (src.includes('notion.so') || src.includes('notionusercontent.com')) {
      try {
        // 下载图片
        const response = await fetch(src, {
          mode: 'cors',
          credentials: 'omit'
        });
        if (!response.ok) throw new Error('Failed to download image');
        
        const blob = await response.blob();
        
        // 转换为base64
        const base64 = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        });
        
        // 直接修改img标签的src属性
        img.src = base64;
      } catch (error) {
        console.warn('Failed to process image:', error);
        // 如果下载失败，尝试保持原始URL
        console.log('Keeping original URL:', src);
      }
    }
  }
  
  return tempDiv.innerHTML;
}