import type { ConversionResult, NotionImage } from '@/types'
import hljs from 'highlight.js'
import { marked } from 'marked'
import { markedHighlight } from 'marked-highlight'

// 自定义渲染器，确保HTML结构与CSS选择器匹配
//
// marked库允许我们自定义各种Markdown元素的渲染方式。
// 通过重写渲染器方法，我们可以控制生成的HTML结构，
// 确保它与主题样式表中的CSS选择器匹配，从而正确应用样式。
const renderer = new marked.Renderer()

/**
 * 重写标题渲染函数
 * 为标题添加前缀、内容和后缀的span结构，以便应用主题样式。
 *
 * 不同的主题需要对标题的不同部分应用样式，例如：
 * - 前缀：可能显示编号或装饰性元素
 * - 内容：标题文本本身
 * - 后缀：可能显示装饰性元素
 *
 * 通过将标题分解为这三个部分，主题样式可以更灵活地控制标题的外观。
 *
 * @param text - 标题文本内容，来自Markdown中的标题标记
 * @param level - 标题级别（1-6），对应H1到H6标签
 * @returns 返回格式化的HTML标题字符串，包含前缀、内容和后缀的span元素
 */
renderer.heading = (text: string, level: number): string => {
  // 对不同级别的标题应用不同的结构
  // 目前主要处理H1、H2和H3，其他级别保持简单结构

  if (level === 1)
    return `
      <h${level}>
        <span class="prefix"></span>
        <span class="content">${text}</span>
        <span class="suffix"></span>
      </h${level}>
    `
  if (level === 2)
    return `
      <h${level}>
        <span class="prefix"></span>
        <span class="content">${text}</span>
        <span class="suffix"></span>
      </h${level}>
    `
  if (level === 3)
    return `
      <h${level}>
        <span class="prefix"></span>
        <span class="content">${text}</span>
        <span class="suffix"></span>
      </h${level}>
    `
  // 对于H4-H6标题，使用简单的结构
  return `<h${level}>${text}</h${level}>`
}

/**
 * 重写列表项渲染函数
 * 为列表项添加section包装，以便应用主题样式。
 *
 * 通过将列表项内容包装在section元素中，主题样式可以更精确地
 * 控制列表项的外观，包括文本样式、间距、装饰等。
 *
 * 这种结构也使得列表项可以包含更复杂的内容，如段落、代码块等，
 * 同时保持样式的一致性。
 *
 * @param text - 列表项的内容，可能包含文本、链接、代码等Markdown元素
 * @returns 返回格式化的HTML列表项，包含li标签和section包装
 */
renderer.listitem = (text: string): string => `<li><section>${text}</section></li>`

/**
 * 重写引用渲染函数
 * 为引用添加multiquote-1类，以便应用主题样式。
 *
 * 在微信公众号编辑器中，引用块通常有特殊的样式要求，
 * 包括边框、背景色、字体样式等。通过添加特定的CSS类，
 * 主题样式可以正确地应用这些样式。
 *
 * multiquote-1类名支持多级引用的样式控制，
 * 例如引用中的引用可以使用multiquote-2类。
 *
 * @param text - 引用的内容，可能包含段落、列表等其他Markdown元素
 * @returns 返回格式化的HTML引用，使用blockquote标签和特定CSS类
 */
renderer.blockquote = (text: string): string =>
  `<blockquote class="multiquote-1">${text}</blockquote>`

/**
 * 重写图片渲染函数
 * 确保图片URL中的&字符被正确处理。
 *
 * 在Markdown转换过程中，URL中的特殊字符可能会被错误地转义，
 * 特别是&字符经常被转换为&，这会导致图片无法正确显示。
 *
 * 这个函数确保图片URL的正确性，同时保留标题和alt文本信息。
 *
 * @param href - 图片的原始URL，可能包含转义字符
 * @param title - 图片的标题属性（可选），用于鼠标悬停时显示
 * @param text - 图片的alt文本，用于图片无法加载时显示和SEO
 * @returns 返回格式化的HTML图片标签，包含正确的URL和属性
 */
renderer.image = (href: string, title: string | null, text: string): string => {
  // 修复URL中的&字符转义问题
  const cleanHref = href.includes('&') ? href.replace(/&/g, '&') : href

  // 如果是attachment格式，保留原样，在后续处理中转换为base64
  // 或者我们可以尝试从页面上找到对应的真实图片URL
  if (cleanHref.includes('attachment:')) {
    console.log('Found attachment image in markdown, will process later:', cleanHref)
    // 暂时保留attachment格式，在processNotionImages中处理
    const titleAttr = title ? ` title="${title}"` : ''
    return `<img src="${cleanHref}" alt="${text}"${titleAttr}>`
  }

  // 只有当标题存在时才添加title属性
  const titleAttr = title ? ` title="${title}"` : ''
  return `<img src="${cleanHref}" alt="${text}"${titleAttr}>`
}

// 配置 marked 使用 markedHighlight
marked.use(
  markedHighlight({
    langPrefix: 'hljs language-',
    highlight: (code, lang) => {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext'
      return hljs.highlight(code, { language }).value
    },
  })
)

/**
 * 重写行内代码渲染函数
 * 为行内代码添加inline-code类，以便应用主题样式。
 *
 * 行内代码与代码块不同，它出现在段落文本中，需要与周围内容
 * 保持良好的视觉协调。通过添加特定的CSS类，主题样式可以
 * 控制行内代码的字体、背景色、边框等样式。
 *
 * 在微信公众号编辑器中，行内代码通常需要与正文有所区别，
 * 但又不能过于突兀，因此需要精细的样式控制。
 *
 * @param code - 行内代码内容，通常是简短的代码片段或变量名
 * @returns 返回格式化的HTML行内代码，使用code标签和特定CSS类
 */
/**
 * 重写行内代码渲染函数
 * 为行内代码添加inline-code类，以便应用主题样式。
 *
 * 行内代码与代码块不同，它出现在段落文本中，需要与周围内容
 * 保持良好的视觉协调。通过添加特定的CSS类，主题样式可以
 * 控制行内代码的字体、背景色、边框等样式。
 *
 * 在微信公众号编辑器中，行内代码通常需要与正文有所区别，
 * 但又不能过于突兀，因此需要精细的样式控制。
 *
 * @param code - 行内代码内容，通常是简短的代码片段或变量名
 * @returns 返回格式化的HTML行内代码，使用code标签和特定CSS类
 */
renderer.codespan = (code: string): string => {
  return `<code class="inline-code">${code}</code>`
}

/**
 * 重写代码块渲染函数
 * 修复代码块中嵌套三个反引号导致的截断问题。
 *
 * 默认的marked代码块渲染器在遇到代码内容中包含三个反引号时，
 * 会错误地认为代码块提前结束，导致后续内容解析失败。
 *
 * 这个自定义渲染器确保代码块内容被正确处理，无论其中是否包含反引号。
 *
 * @param code - 代码块内容，可能包含任意字符包括反引号
 * @param language - 代码语言标识符（可选），用于语法高亮
 * @param escaped - 是否被转义（marked内部使用）
 * @returns 返回格式化的HTML代码块，使用pre和code标签
 */
renderer.code = (code: string, language: string | undefined, escaped: boolean): string => {
  const lang = language || 'text'

  // 确保代码内容被正确转义，防止HTML注入
  const escapedCode = escaped ? code : code.replace(/</g, '&lt;').replace(/>/g, '&gt;')

  return `<pre><code class="hljs language-${lang}">${escapedCode}</code></pre>`
}

/**
 * 将Markdown转换为HTML的主函数
 * 这是整个Markdown处理流程的核心函数，负责将原始Markdown文本转换为可在微信编辑器中使用的HTML格式。
 *
 * 处理流程：
 * 1. 配置marked解析器的选项和自定义渲染器
 * 2. 将Markdown转换为初始HTML
 * 3. 替换Mermaid代码块为SVG图片
 * 4. 返回处理后的HTML和图片信息
 *
 * 注意：此函数是异步的，因为语法高亮需要异步操作。
 *
 * @param markdown - 原始Markdown文本，通常从Notion页面中提取
 * @param images - 图片数组参数（当前未使用，保留用于未来扩展）
 * @param mermaidImages - Mermaid SVG 的 base64 编码数组，按文档顺序排列
 * @returns 返回一个Promise，解析为ConversionResult对象，包含处理后的HTML和图片信息
 */
export async function convertMarkdownToHtml(
  markdown: string,
  images: NotionImage[],
  mermaidImages: string[] = []
): Promise<ConversionResult> {
  // 预处理：替换 mermaid 代码块为占位符
  // 使用 HTML 注释格式避免被 Markdown 解析
  let mermaidIndex = 0
  const processedMarkdown = markdown.replace(
    /```mermaid\n([\s\S]*?)```/g,
    () => `<!--MERMAID_${mermaidIndex++}-->`
  )

  console.log('[Mermaid] Found code blocks:', mermaidIndex, 'mermaidImages:', mermaidImages.length)

  // 设置marked选项
  marked.setOptions({
    renderer, // 使用自定义渲染器，确保HTML结构与主题样式匹配
    breaks: true, // 支持换行符转义，将单个换行符转换为<br>标签
    gfm: true, // 支持GitHub风格的Markdown，包括表格、任务列表等扩展语法
  })

  // 将Markdown转换为HTML
  // marked库会根据我们定义的渲染器规则将Markdown转换为HTML结构
  let html = await marked.parse(processedMarkdown)

  console.log('[Mermaid] HTML contains <!--MERMAID_0-->:', html.includes('<!--MERMAID_0-->'))
  console.log('[Mermaid] HTML preview (first 500 chars):', html.substring(0, 500))

  // 后处理：替换 mermaid 占位符为 SVG 图片
  let hasMermaidPlaceholder = false
  mermaidImages.forEach((svgBase64, index) => {
    const placeholder = `<!--MERMAID_${index}-->`
    console.log('[Mermaid] Checking placeholder:', placeholder, 'found:', html.includes(placeholder))
    if (html.includes(placeholder)) {
      hasMermaidPlaceholder = true
      html = html.replace(
        placeholder,
        `<div class="mermaid-container"><img src="${svgBase64}" alt="Mermaid diagram" /></div>`
      )
    }
  })

  // 如果没有找到占位符但有 mermaid 图片，说明 Notion 已经渲染了 mermaid
  // 直接在 HTML 末尾追加 mermaid 图片
  if (!hasMermaidPlaceholder && mermaidImages.length > 0) {
    const mermaidHtml = mermaidImages
      .map((svgBase64) => `<div class="mermaid-container"><img src="${svgBase64}" alt="Mermaid diagram" /></div>`)
      .join('\n')
    html = html + mermaidHtml
  }

  // 返回处理结果
  return { html, images }
}

/**
 * 从Markdown文本中提取图片URL
 * 扫描Markdown文本，找出所有的图片引用，并提取其URL信息。
 *
 * 这个函数主要用于分析和处理Markdown中的图片资源，
 * 虽然在当前流程中不是核心功能，但为未来可能的图片预处理提供了接口。
 *
 * @param markdown - 包含图片引用的Markdown文本
 * @returns 返回一个NotionImage数组，每个元素包含原始图片URL信息
 */
export function extractImagesFromMarkdown(markdown: string): NotionImage[] {
  // 使用正则表达式匹配Markdown图片语法
  // 格式：![替代文本](图片URL)
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g
  const images: NotionImage[] = []

  // 遍历所有匹配项，提取图片URL
  for (const m of markdown.matchAll(imageRegex)) {
    // m[0] - 完整匹配
    // m[1] - 替代文本（图片描述）
    // m[2] - 图片URL
    images.push({ originalUrl: m[2] })
  }

  return images
}

/**
 * 测试Notion图片URL转换的函数
 * 用于验证图片URL转换逻辑是否正确工作。
 *
 * 这个函数使用模拟数据测试URL转换功能，包括：
 * 1. 测试附件格式URL的转换
 * 2. 验证页面ID提取是否正确
 * 3. 检查最终URL格式是否符合预期
 *
 * 主要用于开发和调试阶段，确保图片URL转换逻辑的正确性。
 *
 * @returns 返回转换后的Markdown文本，可用于验证转换结果
 */
export function testConvertNotionImageUrls() {
  // 模拟包含页面ID、spaceId和userId的Markdown内容
  // 这个测试用例模拟了从Notion页面复制的典型内容，包含图片引用
  const testMarkdown = `
# Test Page
This is a test page with an image.

![image.png](attachment:493652ed-b92c-4625-adda-f43768fe2443:image.png)

Page ID: 282ffe254a8180cb8a27e65f8fdd9ab3
Space ID: 658ffe25-4a81-81ea-aa0e-00032dd638f4
User ID: 1d4d872b-594c-81a1-91fd-000244fc4a14
`

  console.log('Testing with sample Markdown:')
  // 调用转换函数处理测试数据
  const result = convertNotionImageUrls(testMarkdown)
  console.log('Result:')
  console.log(result)

  // 检查结果中是否包含正确的URL格式
  // 验证附件ID是否被正确编码为URL格式
  if (result.includes('attachment%3A493652ed-b92c-4625-adda-f43768fe2443%3Aimage.png')) {
    console.log('✅ URL format is correct')
  } else {
    console.log('❌ URL format is incorrect')
  }

  return result
}

/**
 * 转换Notion图片URL为可访问的URL
 * 处理Notion特有的图片URL格式，将其转换为可以直接访问的格式。
 *
 * Notion使用特殊的图片URL格式，包括：
 * 1. 附件格式：attachment:文件ID:文件名
 * 2. 内部域名：file.notion.so
 * 这些格式在外部环境中无法直接访问，需要转换为标准格式。
 *
 * 转换流程：
 * 1. 从Markdown中提取页面ID（32位十六进制字符串）
 * 2. 识别并转换各种Notion图片URL格式
 * 3. 构建可直接访问的Notion图片URL
 *
 * @param markdown - 包含Notion图片URL的Markdown文本
 * @returns 返回转换后的Markdown文本，所有图片URL都已转换为可访问格式
 */
export function convertNotionImageUrls(markdown: string): string {
  // 提取页面ID（32位十六进制字符串）
  // 页面ID是构建可访问图片URL的关键参数
  const pageIdMatch = markdown.match(/([a-f0-9]{32})/)
  const pageId = pageIdMatch ? pageIdMatch[1] : null

  // 使用正则表达式替换所有图片URL
  return markdown.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, url) => {
    // 处理Notion附件URL格式：attachment:文件ID:文件名
    if (url.startsWith('attachment:')) {
      const attachmentMatch = url.match(/attachment:([a-f0-9-]+):([^?]+)/)
      if (attachmentMatch && pageId) {
        const fileName = attachmentMatch[2]
        // 构建可访问的Notion图片URL
        // 使用Notion的图片API，包含页面ID、表格类型等必要参数
        const convertedUrl = `https://www.notion.so/image/${encodeURIComponent(fileName)}?id=${pageId}&table=block&width=1024&userId=v&cache=v2`
        return `![${alt}](${convertedUrl})`
      }
    }

    // 修复URL中的&字符
    // 有时URL中的&会被转义为&amp;，需要还原
    const cleanUrl = url.includes('&') ? url.replace(/&/g, '&') : url

    // 检查是否已经是正确格式的Notion图片URL
    // 如果是，则不需要进一步处理
    if (
      cleanUrl.includes('https://www.notion.so/image/') &&
      cleanUrl.includes('id=') &&
      cleanUrl.includes('table=')
    ) {
      return `![${alt}](${cleanUrl})`
    }

    // 转换其他Notion相关URL
    // 包括file.notion.so等内部域名
    if (cleanUrl.includes('notion.so') || cleanUrl.includes('file.notion.so')) {
      const convertedUrl = convertNotionImageUrl(cleanUrl)
      return `![${alt}](${convertedUrl})`
    }

    // 非Notion URL保持不变
    return match
  })
}

/**
 * 转换单个Notion图片URL
 * 将Notion内部域名转换为可公开访问的域名格式。
 *
 * 这个函数处理特定类型的Notion图片URL，主要是将file.notion.so域名
 * 转换为www.notion.so/image域名，使图片可以在外部环境中访问。
 *
 * @param url - 原始Notion图片URL，通常是内部域名格式
 * @returns 返回转换后的URL，使用可公开访问的域名
 */
function convertNotionImageUrl(url: string): string {
  // 检查URL是否包含Notion内部文件域名
  if (url.includes('file.notion.so')) {
    // 将内部域名替换为可访问的图片API域名
    return url.replace('file.notion.so', 'www.notion.so/image')
  }
  // 如果不是内部域名，直接返回原URL
  return url
}
