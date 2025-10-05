Terminal Assistant Agent Operating Guide

命令
- 安装依赖：pnpm install
- 开发构建（监听）：pnpm run dev
- 生产构建：pnpm run build
- 预览已构建扩展：pnpm run preview
- 代码检查：pnpm run lint
- 自动修复：pnpm run lint:fix
- 格式化：pnpm run format

构建与加载扩展
- 构建：pnpm run build（输出到 dist/，包含 content.js、background.js、styles.css）
- Chrome 加载：chrome://extensions → 开启开发者模式 → 加载已解压的扩展程序 → 选择 dist/

架构概览
- Chrome 扩展 MV3
  - 内容脚本：src/content/index.ts
    - 注入悬浮按钮与侧边栏 UI；通过剪贴板/文本提取生成 HTML；应用所选主题的内联样式；支持复制富文本到剪贴板
    - 依赖工具：markdown.ts（marked 自定义渲染；Prism 内联代码高亮）、imageProcessor.ts（修复 Notion 图片 URL、在可能时将附件转为 base64）、themes.ts（默认/蓝/红主题 CSS 字符串，内联应用）
  - 背景脚本：src/background/index.ts
    - 处理消息（convertContent），可通过 fetch 代理转换请求
  - 类型定义：src/types/index.ts
    - 共享接口（NotionPageData、NotionImage、Theme、ConversionResult）
  - 构建配置：vite.config.ts
    - 多入口（content、styles.css、background），输出到 dist/，路径别名 @ 指向 src
  - TypeScript 配置：tsconfig.json
    - 严格模式，路径别名 @/*，bundler 模块解析

注意事项
- 未定义测试命令
- 使用 Biome 进行检查与格式化
- 使用 Marked 与 PrismJS；代码高亮以内联样式渲染，便于在公众号编辑器中粘贴
- Tailwind 已引入，但侧边栏 UI 主要通过内容脚本中的内联样式实现
