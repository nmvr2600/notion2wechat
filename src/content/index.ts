import { NotionPageData, Theme } from '@/types';
import { convertMarkdownToHtml } from '@/utils/markdown'
import { processNotionImages } from '@/utils/imageProcessor'
import { defaultTheme } from '@/utils/themes'

class Notion2WeChat {
  private sidebar: HTMLElement | null = null

  constructor() {
    this.init()
  }

  private init() {
    if (this.isNotionPage()) {
      this.createFloatingButton()
    }
  }

  private isNotionPage(): boolean {
    return window.location.hostname === 'www.notion.so'
  }

  private createFloatingButton() {
    const button = document.createElement('div')
    button.id = 'notion2wechat-button'
    button.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `
    button.style.cssText = `
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

    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-50%) scale(1.1)'
    })

    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateY(-50%) scale(1)'
    })

    button.addEventListener('click', () => this.toggleSidebar())

    document.body.appendChild(button)
  }

  private toggleSidebar() {
    if (this.sidebar) {
      this.closeSidebar()
    } else {
      this.openSidebar()
    }
  }

  private openSidebar() {
    this.sidebar = document.createElement('div')
    this.sidebar.id = 'notion2wechat-sidebar'
    this.sidebar.innerHTML = `
      <div class="sidebar-header">
        <button class="close-btn">&times;</button>
        <div class="controls">
          <select id="theme-select">
            <option value="default">默认主题</option>
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
      transform: translateX(0);
      transition: transform 0.3s ease;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    `

    this.addSidebarStyles()
    this.attachSidebarEvents()
    document.body.appendChild(this.sidebar)
  }

  private addSidebarStyles() {
    const style = document.createElement('style')
    style.textContent = `
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
        background: #10b981;
        color: white;
      }
      .secondary-btn:hover {
        background: #059669;
      }
      .secondary-btn:disabled {
        background: #9ca3af;
        cursor: not-allowed;
      }
      .preview-area {
        height: calc(100vh - 57px);
        display: flex;
        flex-direction: column;
      }
      .preview-content {
        flex: 1;
        border: none;
        padding: 16px;
        overflow-y: auto;
        background: #f9fafb;
      }
    `
    document.head.appendChild(style)
  }

  private attachSidebarEvents() {
    const closeBtn = this.sidebar?.querySelector('.close-btn')
    const generateBtn = this.sidebar?.querySelector('#generate-btn')
    const publishBtn = this.sidebar?.querySelector('#publish-btn')

    closeBtn?.addEventListener('click', () => this.closeSidebar())
    generateBtn?.addEventListener('click', () => this.generateContent())
    publishBtn?.addEventListener('click', () => this.copyContent())
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
      const styledHtml = this.applyTheme(result.html, defaultTheme)
      this.showPreview(styledHtml)

      

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
    let markdown = ''
    const walker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
      null
    )

    let node
    while ((node = walker.nextNode())) {
      if (node.nodeType === Node.TEXT_NODE) {
        markdown += node.textContent
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const el = node as Element

        if (el.tagName === 'H1') {
          markdown += `\n# ${el.textContent}\n\n`
        } else if (el.tagName === 'H2') {
          markdown += `\n## ${el.textContent}\n\n`
        } else if (el.tagName === 'H3') {
          markdown += `\n### ${el.textContent}\n\n`
        } else if (el.tagName === 'P') {
          markdown += `${el.textContent}\n\n`
        } else if (el.tagName === 'IMG') {
          const src = el.getAttribute('src')
          if (src) {
            markdown += `![${el.getAttribute('alt') || ''}](${src})\n\n`
          }
        } else if (el.tagName === 'PRE') {
          const codeEl = el.querySelector('code')
          if (codeEl) {
            markdown += `\n\`${codeEl.textContent}\`\n\n`
          }
        } else if (el.tagName === 'BLOCKQUOTE') {
          markdown += `> ${el.textContent}\n\n`
        } else if (el.tagName === 'UL' || el.tagName === 'OL') {
          const items = el.querySelectorAll('li')
          items.forEach((item) => {
            markdown += `- ${item.textContent}\n`
          })
          markdown += '\n'
        }
      }
    }

    return markdown.trim()
  }

  private applyTheme(html: string, theme: Theme): string {
    return `<div class="wechat-article">${html}</div><style>${theme.styles}</style>`
  }

  private showPreview(html: string) {
    const previewContent = this.sidebar?.querySelector('#preview-content')
    if (previewContent) {
      previewContent.innerHTML = html
    }
  }

  private async copyContent() {
    console.log('copyContent method called');
    
    const previewContent = this.sidebar?.querySelector('#preview-content')
    if (!previewContent) {
      alert('请先生成内容')
      return
    }

    // 显示处理状态
    const copyBtn = this.sidebar?.querySelector('#publish-btn') as HTMLButtonElement
    if (copyBtn) {
      copyBtn.textContent = '处理图片中...'
      copyBtn.disabled = true
    }

    try {
      let html = previewContent.innerHTML
      
      // 处理Notion图片
      html = await processNotionImages(html)
      
      // 创建一个临时的div来获取纯文本内容
      const tempDiv = document.createElement('div')
      tempDiv.innerHTML = html
      const plainText = tempDiv.textContent || tempDiv.innerText || ''
      
      // 使用Clipboard API写入富文本和纯文本
      try {
        const clipboardItem = new ClipboardItem({
          'text/html': new Blob([html], { type: 'text/html' }),
          'text/plain': new Blob([plainText], { type: 'text/plain' })
        })
        await navigator.clipboard.write([clipboardItem])
      } catch (err) {
        // 如果ClipboardItem不支持，回退到传统方法
        const tempDiv = document.createElement('div')
        tempDiv.innerHTML = html
        document.body.appendChild(tempDiv)
        
        const selection = window.getSelection()
        const range = document.createRange()
        range.selectNodeContents(tempDiv)
        selection?.removeAllRanges()
        selection?.addRange(range)
        document.execCommand('copy')
        selection?.removeAllRanges()
        
        document.body.removeChild(tempDiv)
      }
      
      // 显示复制成功提示
      if (copyBtn) {
        copyBtn.textContent = '已复制!'
        copyBtn.style.background = '#059669'
        
        setTimeout(() => {
          copyBtn.textContent = '复制'
          copyBtn.style.background = '#10b981'
          copyBtn.disabled = false
        }, 2000)
      }
    } catch (error) {
      console.error('Copy failed:', error)
      alert('复制失败，请重试')
      
      // 恢复按钮状态
      if (copyBtn) {
        copyBtn.textContent = '复制'
        copyBtn.disabled = false
      }
    }
  }
}

new Notion2WeChat()
