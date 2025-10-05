import type { NotionPageData, Theme } from '@/types'
import { processNotionImages } from '@/utils/imageProcessor'
import {
  convertMarkdownToHtml,
  testConvertNotionImageUrls,
} from '@/utils/markdown'
import { defaultTheme, getAllThemes } from '@/utils/themes'
import juice from 'juice/client'

class Notion2WeChat {
  private sidebar: HTMLElement | null = null
  private button: HTMLElement | null = null
  private availableThemes: Theme[] = [defaultTheme]
  private currentHtmlContent: string = '' // 保存当前的原始HTML内容

  constructor() {
    this.init()
  }

  private init() {
    // 测试URL转换逻辑
    testConvertNotionImageUrls()

    this.createFloatingButton()
    this.attachButtonEvent()
    // 加载主题
    this.loadThemes()
    console.log(
      'Themes loaded:',
      this.availableThemes.map((t) => t.name)
    )
  }

  private loadThemes() {
    try {
      this.availableThemes = getAllThemes()
    } catch (error) {
      console.warn('Failed to load themes:', error)
      this.availableThemes = [defaultTheme]
    }
  }

  private attachButtonEvent() {
    this.button?.addEventListener('click', () => this.openSidebar())
  }

  private openSidebar() {
    if (this.sidebar) {
      this.closeSidebar()
      return
    }

    this.createSidebar()
    if (this.sidebar) document.body.appendChild(this.sidebar)

    // 显示侧边栏
    setTimeout(() => {
      if (this.sidebar) {
        this.sidebar.style.transform = 'translateX(0)'
      }
    }, 10)

    this.attachSidebarEvents()
  }

  private createFloatingButton() {
    this.button = document.createElement('div')
    this.button.id = 'notion2wechat-button'
    this.button.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#2563eb;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#1e40af;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="128" height="128" rx="20" fill="url(#bgGradient)"/>
        <path d="M30 30L30 95L40 95L65 50L65 95L75 95L75 30L65 30L40 75L40 30L30 30Z" fill="white"/>
        <g transform="translate(70, 50)">
          <rect x="0" y="0" width="35" height="25" rx="5" fill="#07c160"/>
          <path d="M8 25L12 30L16 25" fill="#07c160"/>
          <rect x="6" y="6" width="15" height="2" rx="1" fill="white"/>
          <rect x="6" y="11" width="23" height="2" rx="1" fill="white"/>
          <rect x="6" y="16" width="18" height="2" rx="1" fill="white"/>
        </g>
        <path d="M20 105L108 105" stroke="white" stroke-width="2" stroke-opacity="0.3"/>
      </svg>
    `
    this.button.style.cssText = `
      position: fixed;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
      width: 48px;
      height: 48px;
      background: #2563eb;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 10000;
      transition: all 0.3s ease;
    `

    this.button.addEventListener('mouseenter', () => {
      if (this.button) this.button.style.transform = 'translateY(-50%) scale(1.1)'
    })

    this.button.addEventListener('mouseleave', () => {
      if (this.button) this.button.style.transform = 'translateY(-50%) scale(1)'
    })

    document.body.appendChild(this.button)
  }

  private createSidebar() {
    this.sidebar = document.createElement('div')
    this.sidebar.className = 'notion2wechat-sidebar'

    // 使用已加载的主题
    const themesToRender = this.availableThemes

    this.sidebar.innerHTML = `
      <div class="resize-handle"></div>
      <div class="sidebar-header">
        <button class="close-btn">&times;</button>
        <div class="controls">
          <select id="theme-select">
            ${themesToRender
              .map(
                (theme) =>
                  `<option value="${theme.name}">${this.getThemeDisplayName(theme.name)}</option>`
              )
              .join('')}
          </select>
          <button id="generate-btn" class="primary-btn">生成</button>
          <button id="publish-btn" class="secondary-btn" disabled>复制</button>
        </div>
      </div>
      <div class="preview-area">
        <div id="preview-content" class="preview-content"></div>
      </div>
    `

    this.sidebar.style.cssText = `
      position: fixed;
      top: 0;
      right: 0;
      width: 400px;
      min-width: 300px;
      max-width: 800px;
      height: 100vh;
      background: white;
      box-shadow: -4px 0 12px rgba(0,0,0,0.15);
      z-index: 10001;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      resize: horizontal;
      overflow: auto;
    `

    // 添加样式
    const style = document.createElement('style')
    style.textContent = `
      .notion2wechat-sidebar * {
        box-sizing: border-box;
      }
      .resize-handle {
        position: absolute;
        left: 0;
        top: 0;
        width: 4px;
        height: 100%;
        background: transparent;
        cursor: col-resize;
        z-index: 10;
      }
      .resize-handle:hover {
        background: rgba(59, 130, 246, 0.3);
      }
      .resize-handle:active {
        background: rgba(59, 130, 246, 0.5);
      }
      .sidebar-header {
        padding: 12px 16px;
        border-bottom: 1px solid #e5e7eb;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
      }
      .close-btn {
        background: none;
        border: none;
        font-size: 20px;
        cursor: pointer;
        color: #6b7280;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .close-btn:hover {
        color: #374151;
      }
      .controls {
        display: flex;
        gap: 8px;
        align-items: center;
        flex: 1;
      }
      .controls select {
        padding: 6px 8px;
        border: 1px solid #d1d5db;
        border-radius: 4px;
        font-size: 12px;
        min-width: 80px;
      }
      .primary-btn, .secondary-btn {
        padding: 6px 12px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-weight: 500;
        font-size: 12px;
        white-space: nowrap;
      }
      .primary-btn {
        background: #2563eb;
        color: white;
      }
      .primary-btn:hover {
        background: #1d4ed8;
      }
      .primary-btn:disabled {
        background: #9ca3af;
        cursor: not-allowed;
      }
      .secondary-btn {
        background: #f3f4f6;
        color: #374151;
      }
      .secondary-btn:hover {
        background: #e5e7eb;
      }
      .secondary-btn:disabled {
        background: #f9fafb;
        color: #9ca3af;
        cursor: not-allowed;
      }
      .preview-area {
        height: calc(100vh - 60px);
        overflow-y: auto;
        padding: 16px;
      }
      .preview-content {
        min-height: 100%;
        background: #f9fafb;
        border-radius: 8px;
        padding: 16px;
        user-select: text;
        -webkit-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
      }
    `
    document.head.appendChild(style)
  }

  private attachSidebarEvents() {
    const closeBtn = this.sidebar?.querySelector('.close-btn')
    const generateBtn = this.sidebar?.querySelector('#generate-btn')
    const publishBtn = this.sidebar?.querySelector('#publish-btn')
    const themeSelect = this.sidebar?.querySelector('#theme-select') as HTMLSelectElement
    const resizeHandle = this.sidebar?.querySelector('.resize-handle')

    closeBtn?.addEventListener('click', () => this.closeSidebar())
    generateBtn?.addEventListener('click', () => this.generateContent())
    publishBtn?.addEventListener('click', () => this.copyContent())

    if (themeSelect) {
      themeSelect.addEventListener('change', () => this.updatePreviewTheme())
    }

    // 添加拖动调整宽度功能
    if (resizeHandle) {
      this.setupResizeHandler(resizeHandle as HTMLElement)
    }
  }

  private setupResizeHandler(handle: HTMLElement) {
    let isResizing = false
    let startX = 0
    let startWidth = 0

    const handleMouseDown = (e: MouseEvent) => {
      isResizing = true
      startX = e.clientX
      startWidth = this.sidebar!.offsetWidth
      document.body.style.cursor = 'col-resize'
      document.body.style.userSelect = 'none'
      e.preventDefault()
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return

      const deltaX = startX - e.clientX
      const newWidth = Math.max(300, Math.min(800, startWidth + deltaX))
      this.sidebar!.style.width = `${newWidth}px`
    }

    const handleMouseUp = () => {
      isResizing = false
      document.body.style.cursor = ''
      document.body.style.userSelect = ''
    }

    handle.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  private closeSidebar() {
    if (this.sidebar) {
      this.sidebar.style.transform = 'translateX(100%)'
      setTimeout(() => {
        if (this.sidebar) {
          this.sidebar.remove()
          this.sidebar = null
        }
      }, 300)
    }
  }

  private async generateContent() {
    const notionData = await this.extractNotionContent()
    if (!notionData) {
      alert('无法获取Notion页面内容')
      return
    }

    // 显示加载状态
    const generateBtn = this.sidebar?.querySelector('#generate-btn') as HTMLButtonElement
    if (generateBtn) {
      generateBtn.textContent = '处理中...'
      generateBtn.disabled = true
    }

    try {
      // 转换Markdown为HTML，首先处理图片URL
      // const processedMarkdown = convertNotionImageUrls(notionData.content)
      // console.log('Processed markdown:', processedMarkdown) // 调试信息
      const result = await convertMarkdownToHtml(notionData.content, [])
      console.log('Generated HTML:', result.html) // 调试信息
      // 保存原始HTML内容
      this.currentHtmlContent = result.html
      await this.showPreview(result.html)

      const publishBtn = this.sidebar?.querySelector('#publish-btn') as HTMLButtonElement
      if (publishBtn) {
        publishBtn.disabled = false
      }
    } catch (error) {
      console.error('Content generation failed:', error)
      alert('内容生成失败，请重试')
    } finally {
      // 恢复按钮状态
      if (generateBtn) {
        generateBtn.textContent = '生成'
        generateBtn.disabled = false
      }
    }
  }

  private async extractNotionContent(): Promise<NotionPageData | null> {
    try {
      const titleElement = document.querySelector('[placeholder="Untitled"]') as HTMLElement
      const title = titleElement?.innerText || '无标题'

      // 尝试找到正确的页面内容容器
      const contentElement =
        document.querySelector('.notion-page-content') ||
        document.querySelector('.notion-scroller') ||
        document.querySelector('[data-block-id]') ||
        document.body

      if (!contentElement) {
        return null
      }

      console.log('Found content element:', contentElement.className)
      console.log('Element children count:', contentElement.children.length)

      // 使用剪贴板API获取Notion页面的Markdown内容
      const content = await this.extractMarkdownFromElement(contentElement)

      console.log('Extracted content length:', content.length)
      console.log('Content preview:', content.substring(0, 200))

      return {
        title,
        content,
        images: [],
      }
    } catch (error) {
      console.error('Error extracting Notion content:', error)
      return null
    }
  }

  private async extractMarkdownFromElement(element: Element): Promise<string> {
    try {
      const selection = window.getSelection()
      if (selection) {
        // 清除之前的选择
        selection.removeAllRanges()

        // 第一次选择：选择当前block（模拟第一次Cmd+A）
        const range1 = document.createRange()
        range1.selectNodeContents(element)
        selection.addRange(range1)

        // 执行第一次复制命令
        document.execCommand('copy')

        // 等待一小段时间确保第一次操作完成
        await new Promise((resolve) => setTimeout(resolve, 100))

        // 第二次选择：重新选择整个页面内容（模拟第二次Cmd+A）
        selection.removeAllRanges()
        const range2 = document.createRange()
        range2.selectNodeContents(element)
        selection.addRange(range2)

        // 执行第二次复制命令，这次应该能复制整个页面内容
        document.execCommand('copy')

        // 等待更长时间确保复制操作完成
        await new Promise((resolve) => setTimeout(resolve, 200))

        // 尝试从剪贴板读取Markdown内容
        const clipboardText = await navigator.clipboard.readText()

        // 清除选择
        selection.removeAllRanges()

        // 如果剪贴板中有内容，直接返回
        if (clipboardText.trim()) {
          console.log('Clipboard content:', clipboardText.substring(0, 200))
          return clipboardText
        }
      }

      // 如果剪贴板方法失败，回退到textContent
      return element.textContent || ''
    } catch (error) {
      console.error('Failed to extract markdown from clipboard:', error)
      // 回退到textContent
      return element.textContent || ''
    }
  }

  private async showPreview(html: string) {
    const previewContent = this.sidebar?.querySelector('#preview-content')
    if (previewContent) {
      // 在预览阶段也处理图片
      const processedHtml = await processNotionImages(html)

      // 获取当前主题
      const themeSelect = this.sidebar?.querySelector('#theme-select') as HTMLSelectElement
      const selectedThemeName = themeSelect?.value || 'default'
      const theme = this.availableThemes.find((t) => t.name === selectedThemeName) || defaultTheme

      // 添加 highlight.js 的 CDN CSS 样式用于预览
      const highlightJsStyles = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.11.1/build/styles/default.min.css">`;

      // 使用 juice 内联 CSS 样式
      const htmlWithStyles = `<section id="nice">${processedHtml}</section>`
      const fullHtml = `${highlightJsStyles}<style>${theme.styles}</style>${htmlWithStyles}`
      const inlinedHtml = juice(fullHtml, { removeStyleTags: false })

      previewContent.innerHTML = inlinedHtml

      // 添加可选择的样式
      const pc = previewContent as HTMLElement
      pc.style.userSelect = 'text'
      pc.style.setProperty('-webkit-user-select', 'text')
      pc.style.setProperty('-moz-user-select', 'text')
      pc.style.setProperty('-ms-user-select', 'text')
    }
  }

  private getThemeDisplayName(themeName: string): string {
    return themeName
  }

  private updatePreviewTheme() {
    // 使用保存的原始HTML内容重新生成预览以应用新主题
    if (this.currentHtmlContent) {
      const previewContent = this.sidebar?.querySelector('#preview-content')
      if (previewContent) {
        // 清除之前的内容
        previewContent.innerHTML = ''
        // 使用原始HTML内容重新显示预览以应用新主题
        this.showPreview(this.currentHtmlContent)
      }
    }
  }

  

  private async copyContent() {
    const preview = document.getElementById('preview-content')
    if (!preview) return

    // 更新按钮状态
    const copyBtn = document.getElementById('publish-btn') as HTMLButtonElement
    if (copyBtn) {
      copyBtn.textContent = '复制中...'
      copyBtn.disabled = true
    }

    try {
      // 获取预览区域的HTML内容
      const previewHtml = preview.innerHTML

      // 获取当前主题
      const themeSelect = document.querySelector('#theme-select') as HTMLSelectElement
      const selectedThemeName = themeSelect?.value || 'default'
      const theme = this.availableThemes.find((t) => t.name === selectedThemeName) || defaultTheme

      // 添加 highlight.js 的 CDN CSS 样式用于导出
      const highlightJsStyles = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.11.1/build/styles/default.min.css">`;

      // 使用 juice 内联 CSS 样式
      const htmlWithStyles = `<section id="nice">${previewHtml}</section>`
      const fullHtml = `${highlightJsStyles}<style>${theme.styles}</style>${htmlWithStyles}`
      const inlinedHtml = juice(fullHtml, { removeStyleTags: true })

      // 使用Clipboard API直接写入富文本HTML
      console.log('写入剪贴板的HTML内容:', inlinedHtml)
      console.log('HTML内容长度:', inlinedHtml.length)

      await navigator.clipboard.write([
        new ClipboardItem({
          'text/html': new Blob([inlinedHtml], { type: 'text/html' }),
        }),
      ])

      alert('已复制到剪贴板，可以直接粘贴到公众号编辑器')
    } catch (error) {
      console.error('复制失败:', error)
      alert('复制失败，请重试')
    } finally {
      // 恢复按钮状态
      if (copyBtn) {
        copyBtn.textContent = '复制'
        copyBtn.disabled = false
      }
    }
  }
}

// 初始化扩展
new Notion2WeChat()
