import type { NotionPageData, Theme } from '@/types'
import { processNotionImages } from '@/utils/imageProcessor'
import { convertMarkdownToHtml, testConvertNotionImageUrls } from '@/utils/markdown'
import { defaultCodeStyles, defaultTheme, getAllThemes, highlightJsStyles } from '@/utils/themes'
import juice from 'juice/client'

class Notion2WeChat {
  private sidebar: HTMLElement | null = null
  private button: HTMLElement | null = null
  private availableThemes: Theme[] = [defaultTheme]
  private currentHtmlContent = '' // 保存当前的原始HTML内容
  private readonly THEME_STORAGE_KEY = 'notion2wechat_selected_theme'

  constructor() {
    this.init()
  }

  private ensureToastResources() {
    let style = document.getElementById('n2w-toast-style') as HTMLStyleElement | null
    if (!style) {
      style = document.createElement('style')
      style.id = 'n2w-toast-style'
      style.textContent =
        '.n2w-toast-container{position:fixed;top:16px;right:16px;z-index:10002;display:flex;flex-direction:column;gap:8px}.n2w-toast{opacity:0;transform:translateY(-6px);transition:all .2s ease;padding:8px 12px;border-radius:6px;color:#fff;font-size:12px;box-shadow:0 4px 12px rgba(0,0,0,.15);background:#374151}.n2w-toast.show{opacity:1;transform:translateY(0)}.n2w-toast.success{background:#16a34a}.n2w-toast.error{background:#dc2626}.n2w-toast.info{background:#2563eb}'
      document.head.appendChild(style)
    }
    let container = document.querySelector('.n2w-toast-container') as HTMLElement | null
    if (!container) {
      container = document.createElement('div')
      container.className = 'n2w-toast-container'
      document.body.appendChild(container)
    }
    return container
  }

  private showToast(message: string, type: 'success' | 'error' | 'info' = 'info') {
    const container = this.ensureToastResources()
    const el = document.createElement('div')
    el.className = `n2w-toast ${type}`
    el.textContent = message
    container.appendChild(el)
    requestAnimationFrame(() => {
      el.classList.add('show')
    })
    setTimeout(() => {
      el.classList.remove('show')
      el.addEventListener(
        'transitionend',
        () => {
          el.remove()
        },
        { once: true }
      )
    }, 2200)
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

    // 获取保存的主题选择
    const savedTheme = this.getSavedTheme()
    const defaultThemeName = savedTheme || themesToRender[0]?.name || '默认'

    this.sidebar.innerHTML = `
      <div class="resize-handle"></div>
      <div class="sidebar-header">
        <button class="close-btn">×</button>
        <div class="controls">
          <select id="theme-select">
            ${themesToRender
              .map(
                (theme) =>
                  `<option value="${theme.name}" ${theme.name === defaultThemeName ? 'selected' : ''}>${this.getThemeDisplayName(theme.name)}</option>`
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
      const sidebarEl = this.sidebar
      if (sidebarEl) startWidth = sidebarEl.offsetWidth
      document.body.style.cursor = 'col-resize'
      document.body.style.userSelect = 'none'
      e.preventDefault()
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return

      const deltaX = startX - e.clientX
      const newWidth = Math.max(300, Math.min(800, startWidth + deltaX))
      if (this.sidebar) this.sidebar.style.width = `${newWidth}px`
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
      this.showToast('无法获取Notion页面内容', 'error')
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
      this.showToast('内容生成失败，请重试', 'error')
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

      // 为段落元素添加字体大小和内边距样式
      const styledHtml = this.applyAdditionalStyles(processedHtml, theme)

      // 获取基础样式（highlight.js 样式和默认代码样式）
      // 直接使用已导入的样式，避免动态导入
      const baseStyles = highlightJsStyles + defaultCodeStyles

      // 使用 juice 内联 CSS 样式，将基础样式和主题样式组合
      const htmlWithStyles = `<section id="nice">${styledHtml}</section>`
      const fullHtml = `<style>${baseStyles}${theme.styles}</style>${htmlWithStyles}`
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

  /**
   * 为HTML元素应用额外的样式属性
   * 确保所有CSS样式都被正确应用到元素上
   */
  private applyAdditionalStyles(html: string, theme: Theme): string {
    // 创建临时DOM元素来处理HTML
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = html

    // 如果使用的是yellow主题，为段落元素添加额外样式
    if (theme.name === '黄色') {
      const paragraphs = tempDiv.querySelectorAll('p')
      for (const p of paragraphs) {
        // 确保段落元素有字体大小、上内边距和下内边距样式
        if (!p.style.fontSize || p.style.fontSize === '') {
          p.style.fontSize = '16px'
        }
        if (!p.style.paddingTop || p.style.paddingTop === '') {
          p.style.paddingTop = '10px'
        }
        if (!p.style.paddingBottom || p.style.paddingBottom === '') {
          p.style.paddingBottom = '10px'
        }
      }
    }

    return tempDiv.innerHTML
  }

  private getThemeDisplayName(themeName: string): string {
    return themeName
  }

  /**
   * 保存用户选择的主题
   */
  private saveSelectedTheme(themeName: string): void {
    try {
      localStorage.setItem(this.THEME_STORAGE_KEY, themeName)
    } catch (error) {
      console.warn('Failed to save theme selection:', error)
    }
  }

  /**
   * 获取保存的主题选择
   */
  private getSavedTheme(): string | null {
    try {
      return localStorage.getItem(this.THEME_STORAGE_KEY)
    } catch (error) {
      console.warn('Failed to get saved theme:', error)
      return null
    }
  }

  private updatePreviewTheme() {
    // 保存当前选择的主题
    const themeSelect = this.sidebar?.querySelector('#theme-select') as HTMLSelectElement
    if (themeSelect) {
      this.saveSelectedTheme(themeSelect.value)
    }

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
      // 直接获取预览区域的HTML内容，已经包含了所有样式和处理过的图片
      const previewHtml = preview.innerHTML

      // 使用Clipboard API直接写入富文本HTML
      console.log('写入剪贴板的HTML内容:', previewHtml)
      console.log('HTML内容长度:', previewHtml.length)

      await navigator.clipboard.write([
        new ClipboardItem({
          'text/html': new Blob([previewHtml], { type: 'text/html' }),
          'text/plain': new Blob([previewHtml], { type: 'text/plain' }),
        }),
      ])

      this.showToast('已复制到剪贴板', 'success')
    } catch (error) {
      console.error('复制失败:', error)
      this.showToast('复制失败，请重试', 'error')
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
