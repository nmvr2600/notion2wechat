# Notion2WeChat 插件工作流程

## 流程图

```mermaid
graph TD
    A[用户访问 Notion 页面] --> B[插件注入悬浮按钮]
    B --> C{用户点击悬浮按钮}
    C -->|首次点击| D[创建并显示侧边栏]
    C -->|再次点击| E[关闭侧边栏]
    
    D --> F[用户选择主题样式]
    F --> G[用户点击生成按钮]
    G --> H[提取 Notion 页面内容]
    H --> I[获取页面 Markdown 内容]
    I --> J[处理图片 URL 转换]
    J --> K[使用 marked.js 转换 Markdown 为 HTML]
    K --> L[应用代码语法高亮]
    L --> M[预览内容显示]
    M --> N{用户是否满意预览效果}
    
    N -->|不满意| F
    N -->|满意| O[用户点击复制按钮]
    O --> P[处理图片为 base64 格式]
    P --> Q[应用主题样式到 HTML 元素]
    Q --> R[将 HTML 内容复制到剪贴板]
    R --> S[提示用户复制成功]
    S --> T[用户可粘贴到微信公众号编辑器]

    style A fill:#e1f5fe
    style T fill:#e8f5e8
    style H fill:#fff3e0
    style K fill:#fff3e0
    style R fill:#f3e5f5
```

## 详细工作流程

## UML 时序图

```mermaid
sequenceDiagram
    participant User as 用户
    participant Notion2WeChat as Notion2WeChat类
    participant generateContent as generateContent()
    participant extractNotionContent as extractNotionContent()
    participant extractMarkdownFromElement as extractMarkdownFromElement()
    participant convertNotionImageUrls as convertNotionImageUrls()
    participant convertMarkdownToHtml as convertMarkdownToHtml()
    participant marked as marked()
    participant processNotionImages as processNotionImages()
    participant showPreview as showPreview()
    participant copyContent as copyContent()
    
    Note over User, copyContent: 插件初始化阶段
    Notion2WeChat->>Notion2WeChat: init()
    Notion2WeChat->>Notion2WeChat: createFloatingButton()
    
    Note over User, copyContent: 用户交互阶段
    User->>Notion2WeChat: 点击悬浮按钮
    Notion2WeChat->>Notion2WeChat: openSidebar()
    Notion2WeChat->>Notion2WeChat: createSidebar()
    
    Note over User, copyContent: 内容生成阶段
    User->>generateContent: 点击"生成"按钮
    generateContent->>extractNotionContent: extractNotionContent()
    extractNotionContent->>extractMarkdownFromElement: extractMarkdownFromElement()
    extractMarkdownFromElement->>extractNotionContent: 返回Markdown内容
    
    extractNotionContent->>generateContent: 返回NotionPageData
    
    Note over User, copyContent: 图片URL处理阶段
    generateContent->>convertNotionImageUrls: convertNotionImageUrls(content)
    convertNotionImageUrls->>generateContent: 返回处理后的Markdown
    
    Note over User, copyContent: Markdown转HTML阶段
    generateContent->>convertMarkdownToHtml: convertMarkdownToHtml(processedMarkdown, [])
    convertMarkdownToHtml->>marked: marked(markdown)
    marked->>convertMarkdownToHtml: 返回HTML字符串
    
    Note over User, copyContent: 图片预处理阶段
    generateContent->>processNotionImages: processNotionImages(html)
    processNotionImages->>processNotionImages: 遍历HTML中的图片元素
    processNotionImages->>processNotionImages: 查找页面中匹配的图片元素
    processNotionImages->>processNotionImages: 使用canvas将图片转换为base64
    processNotionImages->>generateContent: 返回处理后的HTML
    
    Note over User, copyContent: 预览显示阶段
    generateContent->>showPreview: showPreview(result.html)
    showPreview->>showPreview: applyInlineStyles(html, theme)
    showPreview->>Notion2WeChat: 在预览区域显示内容
    
    Note over User, copyContent: 内容复制阶段
    User->>copyContent: 点击"复制"按钮
    copyContent->>copyContent: 获取预览区域HTML内容
    copyContent->>User: navigator.clipboard.write()
    copyContent->>User: 提示复制成功
```

### 1. 初始化阶段
- 插件在 Notion 页面加载时注入内容脚本
- 创建悬浮按钮并监听点击事件
- 加载可用的主题样式

### 2. 用户交互阶段
- 用户点击悬浮按钮，显示侧边栏界面
- 用户可选择不同的主题样式（默认、蓝色、红色等）
- 用户点击"生成"按钮触发内容转换

### 3. 内容提取阶段
- 通过 DOM 操作找到 Notion 页面内容容器
- 使用剪贴板 API 模拟用户复制操作获取 Markdown 格式内容
- 提取页面标题和内容

### 4. 内容转换阶段
- 处理 Notion 图片 URL，尝试将 attachment 格式转换为标准的 Notion 图片 URL
 - 查找 Markdown 中的 attachment 格式图片链接，如 `attachment:uuid:image.png`
  - 提取页面 ID 信息（从 Markdown 内容中匹配 32 位十六进制字符串）
  - 将 attachment 格式转换为标准的 Notion 图片 URL，格式为：`https://www.notion.so/image/{encodeURIComponent(fileName)}?id={pageId}&table=block&width=1024&userId=v&cache=v2`
  - 处理其他 Notion 图片 URL 格式，如 `file.notion.so` 到 `www.notion.so/image` 的转换
  - 注意：这个步骤生成的 URL 仍然需要身份验证才能访问，实际显示图片依赖后续的 canvas 转换过程
- 使用 marked.js 库将 Markdown 转换为 HTML
  - 在 `src/utils/markdown.ts` 文件的 `convertMarkdownToHtml` 函数中，第 77 行调用 `marked(markdown)` 进行转换
  - 该函数在 `src/content/index.ts` 的第 360 行被调用：`const result = await convertMarkdownToHtml(processedMarkdown, [])`
 - 应用自定义渲染器处理特殊元素（标题、代码块、引用等）
  - 对代码块进行语法高亮处理

### 5. 预览显示阶段
- 将转换后的 HTML 应用所选主题样式
- 在侧边栏预览区域显示转换后的内容
- 处理图片显示问题，确保预览中图片正确加载

### 6. 内容复制阶段
- 用户点击"复制"按钮
- 将预览内容转换为适合微信公众号编辑器的 HTML 格式
- 将图片转换为 base64 格式以确保在公众号编辑器中正确显示
- 使用 Clipboard API 将 HTML 内容写入剪贴板

### 7. 输出阶段
- 提示用户复制成功
- 用户可在微信公众号编辑器中直接粘贴内容

## 关键技术点

### 图片处理机制
1. **URL 预处理**: 在 Markdown 转换为 HTML 前，尝试将 Notion 的 attachment 格式图片 URL 转换为标准的 Notion 图片 URL
   - 识别 `attachment:uuid:filename` 格式的图片链接
   - 尝试从 Markdown 内容中提取 32 位页面 ID
   - 如果找到页面 ID，则将 attachment 格式转换为标准的 Notion 图片 URL
   - 如果未找到页面 ID，则 attachment 格式保持不变
   - 注意：此步骤生成的 URL 仍然需要身份验证才能访问，并不能直接显示图片

2. **预览处理**: 在预览阶段，通过 canvas 技术将页面中的图片转换为 base64 以确保正确显示
   - 调用 `processNotionImages` 函数处理转换后的 HTML
   - 遍历预览 HTML 中的所有 `<img>` 元素
   - 对于 attachment 格式的图片，通过 `findMatchingImage` 函数在当前页面中查找匹配的图片元素
   - 使用 canvas API 将找到的原始图片转换为 base64 数据 URI，并更新 `<img>` 标签的 src 属性
   - 实际上，显示图片的关键步骤是通过 canvas 将原网页中的图片转换为 base64，而不是之前 URL 转换步骤

3. **复制处理**: 确保图片以适合微信公众号的格式输出
   - 复制时使用预览区域的 HTML 内容（其中部分图片已转换为 base64）
   - 当前实现中只有 attachment 格式的图片被转换为 base64，其他图片仍为需要身份验证的 URL
   - 这可能导致复制到微信公众号编辑器的图片无法正常显示
   - 理想情况下，所有图片都应该从原网页中匹配并转换为 base64，以确保在微信编辑器中正常显示

### 主题系统
1. **CSS 解析**: 解析主题 CSS 规则，提取选择器和样式
2. **内联样式**: 将 CSS 样式转换为内联样式，确保在微信公众号编辑器中生效
3. **动态切换**: 支持实时切换不同主题并更新预览

### 代码高亮
1. **自定义渲染**: 使用 marked.js 的自定义渲染器处理代码块
2. **语法识别**: 识别不同编程语言并应用相应高亮规则
3. **内联样式**: 使用内联样式确保在公众号编辑器中保持高亮效果