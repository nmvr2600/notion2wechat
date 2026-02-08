export interface NotionPageData {
  title: string
  content: string
  images: NotionImage[]
  mermaidImages: string[] // 按文档顺序排列的 base64 编码 Mermaid SVG 图片
}
export interface NotionImage {
  originalUrl: string
  convertedUrl?: string
}
export interface Theme {
  name: string
  styles: string
}
export interface ConversionResult {
  html: string
  images: NotionImage[]
}
