import type { ConversionResult, NotionImage } from '@/types'
import { marked } from 'marked'
export function convertMarkdownToHtml(markdown: string, images: NotionImage[]): ConversionResult {
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
