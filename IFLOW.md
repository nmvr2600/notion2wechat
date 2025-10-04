# Notion2WeChat Chrome插件 - 项目上下文

## 项目概述

Notion2WeChat是一款Chrome浏览器扩展，旨在帮助内容创作者将Notion中的文章一键转换为微信公众号可发布的格式。该插件通过解析Notion页面内容，应用适配微信公众号的样式主题，并提供预览和一键复制功能，显著提升内容发布效率。

### 核心功能
- 一键转换Notion文章为微信公众号格式
- 内置多种微信公众号适配主题（默认、蓝色、红色主题）
- 侧边栏实时预览转换效果
- 自动处理Notion图片URL并转换为可访问链接
- 一键复制并打开公众号后台

### 技术栈
- **语言**: TypeScript
- **构建工具**: Vite
- **样式框架**: Tailwind CSS
- **浏览器扩展标准**: Chrome Extension Manifest V3
- **Markdown解析**: Marked.js
- **包管理**: pnpm

## 项目结构

```
notion2wechat/
├── src/
│   ├── background/          # 后台脚本
│   ├── content/             # 内容脚本（核心功能）
│   ├── theme/               # 主题CSS文件
│   ├── types/               # TypeScript类型定义
│   └── utils/               # 工具函数
├── public/                  # 静态资源和manifest.json
├── dist/                    # 构建输出目录
├── package.json             # 项目配置和依赖
└── vite.config.ts           # 构建配置
```

## 核心实现

### 1. 内容脚本 (src/content/)
- **入口文件**: `src/content/index.ts`
- **主要职责**: 
  - 在Notion页面中注入侧边栏UI
  - 提取页面内容并转换为Markdown格式
  - 处理图片URL转换
  - 应用主题样式并提供预览
  - 实现一键复制功能

### 2. 工具函数 (src/utils/)
- **markdown.ts**: Markdown解析和转换逻辑，使用marked.js库
- **imageProcessor.ts**: 图片处理逻辑，将Notion附件图片转换为base64
- **themes.ts**: 主题管理，加载和应用不同样式主题
- **imageUpload.ts**: 图片上传相关功能（未完全实现）

### 3. 主题系统 (src/theme/)
- **blue.css**: 蓝色主题样式
- **red.css**: 红色主题样式
- 主题通过CSS选择器`#nice`应用样式

### 4. 后台脚本 (src/background/)
- **index.ts**: 后台服务工作线程，处理扩展的后台逻辑

## 构建和运行

### 开发环境
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

### 安装扩展
1. 构建项目：`pnpm run build`
2. 打开Chrome浏览器，进入 `chrome://extensions/`
3. 开启"开发者模式"
4. 点击"加载已解压的扩展程序"
5. 选择项目中的 `dist` 文件夹

## 开发约定

### 代码风格
- 使用Biome进行代码格式化和检查
- TypeScript严格模式
- 单引号用于JavaScript/TypeScript字符串
- 2个空格缩进

### 架构模式
- 使用ES模块系统
- 采用面向对象编程风格
- 工具函数模块化设计
- 异步加载资源以提高性能

### 主题开发
- 主题文件位于`src/theme/`目录
- 使用CSS选择器`#nice`作为根元素
- 主题通过`src/utils/themes.ts`动态加载

## 重要实现细节

### 图片处理流程
1. 识别Markdown中的attachment格式图片URL
2. 将attachment URL转换为可访问的Notion图片URL
3. 在预览时，查找页面中已加载的相同图片并转换为base64，确保预览中图片正确显示
4. 在复制时，确保图片数据嵌入到HTML中以保证公众号编辑器能正确显示

### 预览图片显示保障机制
- 预览阶段调用`processNotionImages`函数处理HTML中的图片
- 对于attachment格式的图片，在当前页面中查找匹配的已加载图片元素
- 使用Canvas API将找到的图片转换为base64数据URI
- 将图片的src属性更新为base64数据，确保在预览中能正确显示
- 对于无法找到匹配图片的情况，保留原始URL让浏览器尝试加载

### 内容提取机制
1. 通过双次全选操作模拟用户行为获取完整内容
2. 使用剪贴板API读取Markdown格式内容
3. 解析Markdown并转换为适配微信的HTML

### 主题应用
1. 主题样式通过动态创建`<style>`标签应用
2. 预览和复制时保持主题一致性
3. 支持多种预设主题（默认、蓝色、红色）

## 扩展点

### 可扩展功能
- 增加更多主题样式
- 实现自定义主题功能
- 添加图片上传到图床服务
- 支持导出为多种格式（HTML、Markdown等）
- 增加内容检查和优化建议

### 注意事项
- 保持与Notion页面结构的兼容性
- 确保图片处理的稳定性和准确性
- 维护主题样式与微信公众号的兼容性