# Notion2WeChat Chrome插件

一款Chrome浏览器插件，帮助将Notion文章一键转换为微信公众号可发布的格式。

## 功能特性

- 🚀 一键转换Notion文章为微信公众号格式
- 🎨 内置微信公众号适配主题
- 📱 侧边栏实时预览转换效果
- 🖼️ 自动处理Notion图片URL
- 📋 一键复制并打开公众号后台

## 安装方法

### 开发模式安装

1. 克隆项目到本地
2. 安装依赖：`pnpm install`
3. 构建项目：`pnpm run build`
4. 打开Chrome浏览器，进入 `chrome://extensions/`
5. 开启"开发者模式"
6. 点击"加载已解压的扩展程序"
7. 选择项目中的 `dist` 文件夹

## 使用方法

1. 在Notion中打开要转换的文章页面
2. 点击页面右侧的蓝色浮动图标
3. 在侧边栏中点击"生成"按钮
4. 预览转换后的效果
5. 点击"发布"按钮，自动复制内容并打开公众号后台
6. 在公众号编辑器中粘贴内容

## 技术栈

- TypeScript
- Vite
- Tailwind CSS
- Chrome Extension Manifest V3
- Marked.js (Markdown解析)

## 项目结构

```
notion2wechat/
├── src/
│   ├── content/          # 内容脚本
│   ├── background/       # 后台脚本
│   ├── components/       # UI组件
│   ├── types/           # TypeScript类型定义
│   └── utils/           # 工具函数
├── public/              # 静态资源
├── dist/                # 构建输出
└── package.json
```

## 开发

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm run dev

# 构建生产版本
pnpm run build
```

## 许可证

MIT