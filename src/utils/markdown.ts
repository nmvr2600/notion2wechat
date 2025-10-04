import type { ConversionResult, NotionImage } from '@/types'
import { marked } from 'marked'

// 自定义渲染器，确保HTML结构与CSS选择器匹配
const renderer = new marked.Renderer()

// 重写标题渲染，添加.content类
renderer.heading = function(text, level) {
  return `
    <h${level}>
      <span class="content">${text}</span>
    </h${level}>
  `
}

// 重写列表项渲染
renderer.listitem = function(text) {
  return `<li><section>${text}</section></li>`
}

// 重写引用渲染
renderer.blockquote = function(text) {
  return `<blockquote class="multiquote-1">${text}</blockquote>`
}

export function convertMarkdownToHtml(markdown: string, images: NotionImage[]): ConversionResult {
  marked.setOptions({
    renderer: renderer
  })
  
  const html = marked(markdown)
  return { html, images }
}
export function extractImagesFromMarkdown(markdown: string): NotionImage[] {
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g
  const images: NotionImage[] = []
  let match
  while ((match = imageRegex.exec(markdown)) !== null) {
    images.push({ originalUrl: match[2] })
  }
  return images
}
export function convertNotionImageUrls(markdown: string): string {
  return markdown.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, url) => {
    if (url.includes('notion.so') || url.includes('file.notion.so')) {
      const convertedUrl = convertNotionImageUrl(url)
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
