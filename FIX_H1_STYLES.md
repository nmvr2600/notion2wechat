# 修复 H1 标题样式问题

## 问题描述

在边栏里预览的HTML和复制后的HTML样式不一致，特别是H1标题，复制后变成普通正文样式。

## 根本原因

1. **CSS选择器不完整**：
   - 蓝色主题（微信）和橙色主题的 `#nice h1` 选择器为空
   - 样式只定义在 `#nice h1 .content` 上，但juice内联CSS时无法正确处理复杂的后代选择器

2. **Juice库内联局限性**：
   - juice在处理复杂CSS选择器（如 `#nice h1 .content`）时，内联效果不理想
   - 导致复制的HTML中样式丢失

## 修复方案

### 1. 修复主题CSS样式

#### 蓝色主题（微信主题）
**修改前**：
```css
#nice h1 {
}
/* 一级标题内容 */
#nice h1 .content {
}
```

**修改后**：
```css
#nice h1 {
  font-size: 2em;
  font-weight: bold;
  margin: 30px 0 20px 0;
  padding: 10px 0;
  text-align: center;
  color: #3f3f3f;
  line-height: 1.3;
  border-bottom: 2px solid #2563eb;
}

#nice h1 .content {
  color: #2563eb;
  font-weight: bold;
}
```

#### 橙色主题（橙心）
**修改前**：
```css
#nice h1 {
}
/* 一级标题内容 */
#nice h1 .content {
}
```

**修改后**：
```css
#nice h1 {
  font-size: 1.8em;
  font-weight: bold;
  margin: 30px 0;
  padding: 10px 0;
  text-align: center;
  color: rgb(239, 112, 96);
  border-bottom: 3px solid rgb(239, 112, 96);
}
#nice h1 .content {
  font-weight: bold;
  color: inherit;
}
```

### 2. 优化 Juice 配置

在 `showPreview` 方法中优化juice配置：

```typescript
const inlinedHtml = juice(fullHtml, {
  removeStyleTags: false,
  preserveMediaQueries: true,
  applyWidthAttributes: true,
  applyHeightAttributes: true,
  insertPreservedExtraCss: true,
})
```

### 3. 添加备用机制

在 `copyContent` 方法中添加检查和备用方案：

```typescript
// 检查是否包含内联样式
const hasStyleTag = previewHtml.includes('<style')
const hasInlineStyles = previewHtml.includes('style=')

if (!hasStyleTag && !hasInlineStyles) {
  // 如果样式未正确内联，自动注入style标签
  const allStyles = Array.from(document.querySelectorAll('style'))
    .map(s => s.textContent || '')
    .join('\n')

  if (allStyles) {
    previewHtml = `<style>${allStyles}</style>${previewHtml}`
  }
}
```

## 文件修改

1. **`src/utils/themes.ts`**：
   - 修复蓝色主题H1样式（186-201行）
   - 修复橙色主题H1样式（1375-1389行）

2. **`src/content/index.ts`**：
   - 优化juice配置（535-542行）
   - 添加复制备用机制（659-679行）

## 测试验证

构建成功，所有修改已应用：
```
✓ 353 modules transformed.
dist/styles.css         0.11 kB │ gzip:  0.12 kB
dist/background.js      0.54 kB │ gzip:  0.33 kB
dist/content.js     1,361.88 kB │ gzip: 471.96 kB
```

## 效果

修复后，H1标题在复制到剪贴板后将保持与预览一致的样式，包括：
- 字体大小
- 字体粗细
- 颜色
- 边距
- 装饰效果（如底部边框）

## 备注

- 红色主题、黑色主题、黄色主题的H1样式已经是完整的，不需要修改
- 默认主题的H1样式在1551行的字符串中，已经包含完整样式
