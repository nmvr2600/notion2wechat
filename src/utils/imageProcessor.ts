export async function processNotionImages(html: string): Promise<string> {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  const images = tempDiv.querySelectorAll('img');
  
  // 处理每个图片
  for (const img of Array.from(images)) {
    const src = img.src;
    
    if (src.includes('notion.so') || src.includes('notionusercontent.com') || src.includes('file.notion.so')) {
      try {
        // 下载图片
        const response = await fetch(src);
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
      }
    }
  }
  
  return tempDiv.innerHTML;
}