import type { NotionPageData, Theme } from '@/types'
import { defaultTheme, getAllThemes } from '@/utils/themes'
import { processNotionImages } from '@/utils/imageProcessor'
import { convertMarkdownToHtml, convertNotionImageUrls, testConvertNotionImageUrls } from '@/utils/markdown'

function createFullHtml(content: string, theme: Theme = defaultTheme): string {
  return `<section id="nice">${content}</section>`
}

class Notion2WeChat {
  private sidebar: HTMLElement | null = null
  private button: HTMLElement | null = null
  private availableThemes: Theme[] = [defaultTheme]

  constructor() {
    this.init()
  }

  private init() {
    // 测试URL转换逻辑
    testConvertNotionImageUrls();
    
    this.createFloatingButton()
    this.attachButtonEvent()
    // 加载主题
    this.loadThemes()
    console.log('Themes loaded:', this.availableThemes.map(t => t.name))
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
    
    // 使用已加载的主题
    const themesToRender = this.availableThemes
    
    this.sidebar.innerHTML = `
      <div class="sidebar-header">
        <button class="close-btn">&times;</button>
        <div class="controls">
          <select id="theme-select">
            ${themesToRender.map(theme => 
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
      const processedMarkdown = convertNotionImageUrls(notionData.content);
      console.log('Processed markdown:', processedMarkdown); // 调试信息
      const result = convertMarkdownToHtml(processedMarkdown, [])
      console.log('Generated HTML:', result.html); // 调试信息
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
      const contentElement = document.querySelector('.notion-page-content') || 
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
        await new Promise(resolve => setTimeout(resolve, 100))
        
        // 第二次选择：重新选择整个页面内容（模拟第二次Cmd+A）
        selection.removeAllRanges()
        const range2 = document.createRange()
        range2.selectNodeContents(element)
        selection.addRange(range2)
        
        // 执行第二次复制命令，这次应该能复制整个页面内容
        document.execCommand('copy')
        
        // 等待更长时间确保复制操作完成
        await new Promise(resolve => setTimeout(resolve, 200))
        
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
      
      // 获取当前主题并应用内联样式
      const themeSelect = this.sidebar?.querySelector('#theme-select') as HTMLSelectElement
      const selectedThemeName = themeSelect?.value || 'default'
      const theme = this.availableThemes.find(t => t.name === selectedThemeName) || defaultTheme
      
      // 将主题样式应用到HTML内容中
      const htmlWithInlineStyles = this.applyInlineStyles(processedHtml, theme)
      
      previewContent.innerHTML = `<section id="nice">${htmlWithInlineStyles}</section>`
      
      // 添加可选择的样式
      previewContent.style.userSelect = 'text'
      previewContent.style.webkitUserSelect = 'text'
      previewContent.style.mozUserSelect = 'text'
      previewContent.style.msUserSelect = 'text'
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
    
    const niceElement = previewContent.querySelector('#nice') as HTMLElement
    if (!niceElement) return
    
    const themeSelect = this.sidebar?.querySelector('#theme-select') as HTMLSelectElement
    let theme: Theme | null = null
    
    if (themeSelect && this.availableThemes.length > 1) {
      // 从可用主题中查找
      const selectedThemeName = themeSelect.value
      theme = this.availableThemes.find(t => t.name === selectedThemeName) || null
    }
    
    // 如果没有找到主题，使用默认主题
    if (!theme) {
      theme = defaultTheme
    }
    
    console.log('Applying theme:', theme.name, 'Available themes:', this.availableThemes.map(t => t.name))
    
    // 获取当前HTML内容
    const currentHtml = niceElement.innerHTML
    
    // 重新应用内联样式
    const htmlWithInlineStyles = this.applyInlineStyles(currentHtml, theme)
    
    // 更新内容
    niceElement.innerHTML = htmlWithInlineStyles
  }
  
  private applyInlineStyles(html: string, theme: Theme): string {
    // 创建临时DOM元素来解析HTML
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = html
    
    // 首先清除所有元素的内联样式
    const allElements = tempDiv.querySelectorAll('*')
    allElements.forEach(element => {
      const htmlElement = element as HTMLElement
      htmlElement.style.cssText = ''
    })
    
    // 解析CSS规则并应用内联样式
    const cssRules = this.parseCssRules(theme.styles)
    
    // 应用样式到匹配的元素
    cssRules.forEach(rule => {
      const elements = tempDiv.querySelectorAll(rule.selector)
      elements.forEach(element => {
        const htmlElement = element as HTMLElement
        // 直接设置新样式，替换所有现有样式
        htmlElement.style.cssText = rule.styles
      })
    })
    
    return tempDiv.innerHTML
  }
  
  private parseCssRules(cssText: string): Array<{selector: string, styles: string}> {
    const rules: Array<{selector: string, styles: string}> = []
    
    // 简单的CSS解析器，处理基本的CSS规则
    const ruleRegex = /#nice\s+([^{]+)\s*{\s*([^}]+)\s*}/g
    let match
    
    while ((match = ruleRegex.exec(cssText)) !== null) {
      const selector = match[1].trim()
      const styles = match[2].trim()
      
      // 转换选择器，例如将 "h1" 转换为 "h1", "p" 转换为 "p" 等
      const cleanSelector = selector.replace(/^#\w+\s+/, '')
      
      rules.push({
        selector: cleanSelector,
        styles: styles
      })
    }
    
    return rules
  }

  private async copyContent() {
    const preview = document.getElementById('preview-content');
    if (!preview) return;

    // 更新按钮状态
    const copyBtn = document.getElementById('publish-btn') as HTMLButtonElement;
    if (copyBtn) {
      copyBtn.textContent = '复制中...';
      copyBtn.disabled = true;
    }

    try {
      // 获取预览区域的HTML，样式已经内联到元素中
      const htmlContent = preview.innerHTML;
      
      // 使用Clipboard API直接写入富文本HTML
      console.log('写入剪贴板的HTML内容:', htmlContent);
      console.log('HTML内容长度:', htmlContent.length);
      
      await navigator.clipboard.write([
        new ClipboardItem({
          'text/html': new Blob([htmlContent], { type: 'text/html' })
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