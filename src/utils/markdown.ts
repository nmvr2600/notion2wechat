import type { ConversionResult, NotionImage } from '@/types'
import { marked } from 'marked'

// 自定义渲染器，确保HTML结构与CSS选择器匹配
const renderer = new marked.Renderer()

// 重写标题渲染，添加.content类和prefix/suffix结构
renderer.heading = (text: string, level: number): string => {
  if (level === 1) return `
      <h${level}>
        <span class="prefix"></span>
        <span class="content">${text}</span>
        <span class="suffix"></span>
      </h${level}>
    `
  if (level === 2) return `
      <h${level}>
        <span class="prefix"></span>
        <span class="content">${text}</span>
        <span class="suffix"></span>
      </h${level}>
    `
  if (level === 3) return `
      <h${level}>
        <span class="prefix"></span>
        <span class="content">${text}</span>
        <span class="suffix"></span>
      </h${level}>
    `
  return `<h${level}>${text}</h${level}>`
}

// 重写列表项渲染
renderer.listitem = (text: string): string => `<li><section>${text}</section></li>`

// 重写引用渲染
renderer.blockquote = (text: string): string => `<blockquote class="multiquote-1">${text}</blockquote>`

// 重写图片渲染，确保图片能正确显示
renderer.image = (href: string, title: string | null, text: string): string => {
  const cleanHref = href.includes('&') ? href.replace(/&/g, '&') : href
  const titleAttr = title ? ` title="${title}"` : ''
  return `<img src="${cleanHref}" alt="${text}"${titleAttr}>`
}

export function convertMarkdownToHtml(markdown: string, images: NotionImage[]): ConversionResult {
  marked.setOptions({ renderer, breaks: true, gfm: true })
  const html = marked(markdown)
  return { html, images }
}
export function extractImagesFromMarkdown(markdown: string): NotionImage[] {
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g
  const images: NotionImage[] = []
  for (const m of markdown.matchAll(imageRegex)) {
    images.push({ originalUrl: m[2] })
  }
  return images
}
// 用于测试的函数
export function testConvertNotionImageUrls() {
  // 模拟包含页面ID、spaceId和userId的Markdown内容
  const testMarkdown = `
# Test Page
This is a test page with an image.

![image.png](attachment:493652ed-b92c-4625-adda-f43768fe2443:image.png)

Page ID: 282ffe254a8180cb8a27e65f8fdd9ab3
Space ID: 658ffe25-4a81-81ea-aa0e-00032dd638f4
User ID: 1d4d872b-594c-81a1-91fd-000244fc4a14
`;

  console.log('Testing with sample Markdown:');
  const result = convertNotionImageUrls(testMarkdown);
  console.log('Result:');
  console.log(result);
  
  // 检查结果中是否包含正确的URL
  if (result.includes('attachment%3A493652ed-b92c-4625-adda-f43768fe2443%3Aimage.png')) {
    console.log('✅ URL format is correct');
  } else {
    console.log('❌ URL format is incorrect');
  }
  
  return result;
}

export function convertNotionImageUrls(markdown: string): string {
  const pageIdMatch = markdown.match(/([a-f0-9]{32})/)
  const pageId = pageIdMatch ? pageIdMatch[1] : null
  return markdown.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, url) => {
    if (url.startsWith('attachment:')) {
      const attachmentMatch = url.match(/attachment:([a-f0-9-]+):([^?]+)/)
      if (attachmentMatch && pageId) {
        const fileName = attachmentMatch[2]
        const convertedUrl = `https://www.notion.so/image/${encodeURIComponent(fileName)}?id=${pageId}&table=block&width=1024&userId=v&cache=v2`
        return `![${alt}](${convertedUrl})`
      }
    }
    const cleanUrl = url.includes('&') ? url.replace(/&/g, '&') : url
    if (cleanUrl.includes('https://www.notion.so/image/') && cleanUrl.includes('id=') && cleanUrl.includes('table=')) {
      return `![${alt}](${cleanUrl})`
    }
    if (cleanUrl.includes('notion.so') || cleanUrl.includes('file.notion.so')) {
      const convertedUrl = convertNotionImageUrl(cleanUrl)
      return `![${alt}](${convertedUrl})`
    }
    return match
  })
}
function convertNotionImageUrl(url: string): string {
  if (url.includes('file.notion.so')) {
    return url.replace('file.notion.so', 'www.notion.so/image')
  }
  return url
}
