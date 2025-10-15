# Notion2WeChat 项目概述

## 项目简介

Notion2WeChat 是一款专为内容创作者设计的 Chrome 浏览器扩展，能够将 Notion 中的文章一键转换为微信公众号可发布的格式。通过智能解析、样式优化和图片处理，显著提升内容发布效率，让您的创作更加专注。

## 项目架构

这是一个基于 TypeScript 和 Vite 构建的 Chrome 扩展程序（Chrome Extension Manifest V3），主要技术栈包括：

- **语言**: TypeScript
- **构建工具**: Vite
- **浏览器标准**: Chrome Extension Manifest V3
- **Markdown解析**: Marked.js
- **代码高亮**: Highlight.js
- **CSS内联**: Juice
- **包管理**: pnpm

### 项目结构

```
notion2wechat/
├── src/
│   ├── background/       # 后台脚本
│   ├── content/          # 内容脚本（核心功能）
│   ├── types/            # TypeScript 类型定义
│   └── utils/            # 工具函数
│       ├── imageProcessor.ts  # 图片处理逻辑
│       ├── markdown.ts        # Markdown 解析和转换
│       └── themes.ts          # 主题样式管理
├── public/               # 静态资源和 manifest.json
├── dist/                 # 构建输出目录
├── package.json          # 项目配置和依赖
└── vite.config.ts        # 构建配置
```

核心功能在 `src/content/index.ts` 中实现，该文件包含 Notion2WeChat 类，负责创建浮动按钮、侧边栏界面、内容提取、预览和转换等功能。

## 构建和运行

### 开发环境设置

```bash
# 安装依赖
pnpm install

# 开发模式（热重载）
pnpm run dev

# 构建生产版本
pnpm run build

# 代码检查
pnpm run lint

# 代码格式化
pnpm run format
```

### 扩展安装方法

#### 开发者模式安装
1. 克隆项目
2. 进入项目目录
3. 安装依赖: `pnpm install`
4. 构建项目: `pnpm run build`
5. 在 Chrome 浏览器中打开 `chrome://extensions/`
6. 开启"开发者模式"
7. 点击"加载已解压的扩展程序"
8. 选择项目中的 `dist` 文件夹

## 主要功能

- **一键转换** - 快速将 Notion 文章转换为微信公众号格式
- **多主题支持** - 内置 6 种精美主题（默认、微信、红绯、简黑、山吹、橙心）
- **实时预览** - 侧边栏实时预览转换效果
- **智能图片处理** - 自动处理 Notion 图片 URL 并转换为可访问链接
- **一键复制** - 一键复制并自动打开公众号后台
- **代码高亮** - 支持代码块语法高亮显示
- **响应式设计** - 适配不同屏幕尺寸的预览界面

## 开发规范

### 代码风格
- 使用 TypeScript 进行类型安全的开发
- 使用 biome 作为代码格式化和 linting 工具
- 配置了代码宽度为100字符，缩进为2空格，使用单引号等格式化规则
- 强类型检查，避免使用 any 类型

### 编码约定
- 使用 ES2020 作为目标编译版本
- 模块系统使用 ESNext
- 模块解析使用 bundler 模式
- 使用路径别名 `@/*` 指向 `src/*`

### 代码质量检查
- 使用 Biome 进行代码质量和格式化检查
- 配置了复杂度检查、未使用变量检查、非空断言检查等规则
- 使用推荐的 linting 规则

## 项目依赖

### 生产依赖
- highlight.js: 代码语法高亮
- juice: CSS 内联工具
- marked: Markdown 解析器
- marked-highlight: Marked.js 的代码高亮扩展

### 开发依赖
- @biomejs/biome: 代码格式化和 linting
- @types/chrome: Chrome API 类型定义
- @types/node: Node.js 类型定义
- crx: Chrome 扩展打包工具
- sharp: 图片处理库
- typescript: TypeScript 编译器
- vite: 构建工具

## 扩展工作流程

1. 在 Notion 中打开要转换的文章页面
2. 点击页面右侧的蓝色插件图标
3. 在侧边栏中选择喜欢的主题样式
4. 点击"生成"按钮，等待内容转换完成
5. 在预览区域查看转换效果
6. 点击"复制"按钮，自动复制内容
7. 打开微信公众号后台，直接粘贴即可