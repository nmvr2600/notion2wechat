import type { NotionPageData, Theme } from '@/types'
import { defaultTheme, getAllThemes } from '@/utils/themes'
import { processNotionImages } from '@/utils/imageProcessor'
import { convertMarkdownToHtml } from '@/utils/markdown'

function createFullHtml(content: string, theme: Theme = defaultTheme): string {
  return `<div id="nice" class="wechat-article">${content}</div><style>${theme.styles}</style>`
}

class Notion2WeChat {
  private sidebar: HTMLElement | null = null
  private button: HTMLElement | null = null
  private availableThemes: Theme[] = [defaultTheme]

  constructor() {
    this.init()
  }

  private async init() {
    await this.loadThemes()
    this.createFloatingButton()
    this.attachButtonEvent()
  }

  private async loadThemes() {
    try {
      this.availableThemes = await getAllThemes()
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
    document.body.appendChild(this.sidebar!)
    
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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
      this.button!.style.transform = 'translateY(-50%) scale(1.1)'
    })

    this.button.addEventListener('mouseleave', () => {
      this.button!.style.transform = 'translateY(-50%) scale(1)'
    })

    document.body.appendChild(this.button)
  }

  private createSidebar() {
    this.sidebar = document.createElement('div')
    this.sidebar.className = 'notion2wechat-sidebar'
    this.sidebar.innerHTML = `
      <div class="sidebar-header">
        <button class="close-btn">&times;</button>
        <div class="controls">
          <select id="theme-select">
            ${this.availableThemes.map(theme => 
              `<option value="${theme.name}">${this.getThemeDisplayName(theme.name)}</option>`
            ).join('')}
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
      height: 100vh;
      background: white;
      box-shadow: -4px 0 12px rgba(0,0,0,0.15);
      z-index: 10001;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    `

    // 添加样式
    const style = document.createElement('style')
    style.textContent = `
      .notion2wechat-sidebar * {
        box-sizing: border-box;
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
      }
    `
    document.head.appendChild(style)
  }

  private attachSidebarEvents() {
    const closeBtn = this.sidebar?.querySelector('.close-btn')
    const generateBtn = this.sidebar?.querySelector('#generate-btn')
    const publishBtn = this.sidebar?.querySelector('#publish-btn')
    const themeSelect = this.sidebar?.querySelector('#theme-select') as HTMLSelectElement

    closeBtn?.addEventListener('click', () => this.closeSidebar())
    generateBtn?.addEventListener('click', () => this.generateContent())
    publishBtn?.addEventListener('click', () => this.copyContent())
    
    if (themeSelect) {
      themeSelect.addEventListener('change', () => this.updatePreviewTheme())
    }
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
    const notionData = this.extractNotionContent()
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
      // 转换Markdown为HTML
      const result = convertMarkdownToHtml(notionData.content, [])
      this.showPreview(result.html)

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

  private extractNotionContent(): NotionPageData | null {
    try {
      const titleElement = document.querySelector('[placeholder="Untitled"]') as HTMLElement
      const title = titleElement?.innerText || '无标题'

      const contentElement = document.querySelector('.notion-page-content')
      if (!contentElement) {
        return null
      }

      // 简化的内容提取，实际实现需要更复杂的逻辑
      const content = this.extractMarkdownFromElement(contentElement)

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

  private extractMarkdownFromElement(element: Element): string {
    // 简化的实现，实际需要根据Notion的DOM结构进行转换
    const textContent = element.textContent || ''
    return textContent
  }

  private showPreview(html: string) {
    const previewContent = this.sidebar?.querySelector('#preview-content')
    if (previewContent) {
      previewContent.innerHTML = html
      this.updatePreviewTheme()
    }
  }

  private getCurrentTheme(): Theme | null {
    const themeSelect = this.sidebar?.querySelector('#theme-select') as HTMLSelectElement
    if (!themeSelect) return null
    
    const selectedThemeName = themeSelect.value
    return this.availableThemes.find(theme => theme.name === selectedThemeName) || null
  }

  private getThemeDisplayName(themeName: string): string {
    const displayNames: Record<string, string> = {
      'default': '默认主题',
      'blue': '蓝色主题',
      'red': '红色主题'
    }
    return displayNames[themeName] || themeName
  }

  private updatePreviewTheme() {
    const previewContent = this.sidebar?.querySelector('#preview-content')
    if (!previewContent) return
    
    const theme = this.getCurrentTheme() || defaultTheme
    
    // 移除现有的主题样式
    const existingStyle = previewContent.querySelector('#preview-theme-style')
    if (existingStyle) {
      existingStyle.remove()
    }
    
    // 添加新的主题样式
    const style = document.createElement('style')
    style.id = 'preview-theme-style'
    style.textContent = theme.styles
    previewContent.appendChild(style)
  }

  private async copyContent() {
    const preview = document.getElementById('preview-content');
    if (!preview) return;

    const html = preview.innerHTML;
    
    // 更新按钮状态
    const copyBtn = document.getElementById('copy-btn') as HTMLButtonElement;
    if (copyBtn) {
      copyBtn.textContent = '处理图片中...';
      copyBtn.disabled = true;
    }

    try {
      // 处理图片
      const processedHtml = await processNotionImages(html);
      
      // 创建完整的HTML文档
      const selectedTheme = this.getCurrentTheme() || defaultTheme;
      const fullHtml = createFullHtml(processedHtml, selectedTheme);
      
      // 复制到剪贴板
      await navigator.clipboard.write([
        new ClipboardItem({
          'text/html': new Blob([fullHtml], { type: 'text/html' }),
          'text/plain': new Blob([preview.textContent || ''], { type: 'text/plain' })
        })
      ]);
      
      alert('已复制到剪贴板，可以直接粘贴到公众号编辑器');
    } catch (error) {
      console.error('复制失败:', error);
      alert('复制失败，请重试');
    } finally {
      // 恢复按钮状态
      if (copyBtn) {
        copyBtn.textContent = '复制';
        copyBtn.disabled = false;
      }
    }
  }
}

// 初始化扩展
new Notion2WeChat()