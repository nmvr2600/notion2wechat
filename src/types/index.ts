export interface NotionPageData {
  title: string
  content: string
  images: NotionImage[]
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
