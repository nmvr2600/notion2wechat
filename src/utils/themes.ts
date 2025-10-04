import type { Theme } from '@/types'

export const defaultTheme: Theme = {
  name: 'default',
  styles: ` .wechat-article { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; line-height: 1.6; color: #333; max-width: 100%; margin: 0 auto; padding: 20px; } .wechat-article h1 { font-size: 24px; font-weight: bold; margin: 20px 0; color: #000; } .wechat-article h2 { font-size: 20px; font-weight: bold; margin: 18px 0; color: #000; } .wechat-article h3 { font-size: 18px; font-weight: bold; margin: 16px 0; color: #000; } .wechat-article p { margin: 15px 0; text-align: justify; } .wechat-article img { max-width: 100%; height: auto; display: block; margin: 15px auto; } .wechat-article blockquote { border-left: 4px solid #ddd; margin: 15px 0; padding: 10px 20px; background-color: #f9f9f9; } .wechat-article code { background-color: #f4f4f4; padding: 2px 4px; border-radius: 3px; font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace; } .wechat-article pre { background-color: #f4f4f4; padding: 15px; border-radius: 5px; overflow-x: auto; margin: 15px 0; } .wechat-article pre code { background-color: transparent; padding: 0; } .wechat-article table { width: 100%; border-collapse: collapse; margin: 15px 0; } .wechat-article th, .wechat-article td { border: 1px solid #ddd; padding: 8px; text-align: left; } .wechat-article th { background-color: #f2f2f2; } .wechat-article ul, .wechat-article ol { margin: 15px 0; padding-left: 30px; } .wechat-article li { margin: 5px 0; } `,
}

// 预定义主题配置
export interface ThemeConfig {
  name: string
  displayName: string
  cssPath: string
}

export const themeConfigs: ThemeConfig[] = [
  {
    name: 'blue',
    displayName: '蓝色主题',
    cssPath: chrome.runtime.getURL('theme-blue.css')
  },
  {
    name: 'red',
    displayName: '红色主题',
    cssPath: chrome.runtime.getURL('theme-red.css')
  }
]

// 主题缓存
const themeCache = new Map<string, Theme>()

// 异步加载主题CSS
export async function loadTheme(themeName: string): Promise<Theme> {
  // 检查缓存
  if (themeCache.has(themeName)) {
    return themeCache.get(themeName)!
  }

  const config = themeConfigs.find(t => t.name === themeName)
  if (!config) {
    throw new Error(`Theme ${themeName} not found`)
  }

  try {
    const response = await fetch(config.cssPath)
    if (!response.ok) {
      throw new Error(`Failed to load theme CSS: ${response.statusText}`)
    }
    
    const css = await response.text()
    
    const theme: Theme = {
      name: themeName,
      styles: css
    }
    
    // 缓存主题
    themeCache.set(themeName, theme)
    
    return theme
  } catch (error) {
    console.error(`Error loading theme ${themeName}:`, error)
    throw error
  }
}

// 初始化主题
export async function initializeThemes(): Promise<Theme[]> {
  const initializedThemes: Theme[] = [defaultTheme]
  
  for (const config of themeConfigs) {
    try {
      const theme = await loadTheme(config.name)
      initializedThemes.push(theme)
    } catch (error) {
      console.warn(`Failed to load theme ${config.name}:`, error)
    }
  }
  
  return initializedThemes
}

// 获取所有主题（包括默认主题）
export async function getAllThemes(): Promise<Theme[]> {
  return await initializeThemes()
}
