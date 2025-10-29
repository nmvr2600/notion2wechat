# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Notion2WeChat is a Chrome Extension (Manifest V3) that converts Notion articles to WeChat Official Account format. The extension injects a floating button on Notion pages that opens a sidebar for content conversion with 6 built-in themes.

## Quick Start

```bash
# Install dependencies
pnpm install

# Development mode (watch mode, auto-rebuild on changes)
pnpm run dev

# Build for production
pnpm run build

# Load extension in Chrome (after build)
# 1. Open chrome://extensions/
# 2. Enable "Developer mode"
# 3. Click "Load unpacked" and select the dist/ folder
```

## Development Commands

```bash
# Watch mode - automatically rebuild on file changes
pnpm run dev

# Build for production
pnpm run build

# Build and create CRX file (for Chrome Web Store)
pnpm run build:crx

# Build and create ZIP file (for distribution)
pnpm run build:zip

# Build and get loading instructions
pnpm run build:load

# Code linting
pnpm run lint

# Fix lint issues
pnpm run lint:fix

# Format code
pnpm run format

# Preview (for testing built files)
pnpm run preview

# Generate extension icons from SVG
pnpm run icons
```

## High-Level Architecture

### Extension Structure
- **Manifest V3**: Modern Chrome extension using service worker
- **Target Domain**: `https://www.notion.so/*`
- **Content Script**: Injects UI and functionality into Notion pages
- **Background Script**: Service worker handling extension lifecycle

### Core Flow
1. User opens Notion page
2. Content script injects floating button
3. User clicks button → opens sidebar
4. User clicks "Generate" → extracts Notion content as Markdown
5. Markdown → HTML conversion with theme styles
6. User clicks "Copy" → HTML copied to clipboard (ready for WeChat)

### Source Code Organization

```
src/
├── background/
│   └── index.ts          # Service worker (extension lifecycle, messaging)
├── content/
│   ├── index.ts          # Main UI logic and content processing
│   └── styles.css        # Sidebar and UI styles
├── types/
│   ├── index.ts          # TypeScript interfaces (Theme, NotionPageData, etc.)
│   └── juice-client.d.ts # juice library type definitions
└── utils/
    ├── markdown.ts       # Markdown to HTML conversion (marked.js)
    ├── themes.ts         # Theme definitions and CSS styles
    └── imageProcessor.ts # Notion image URL processing & base64 conversion
```

## Key Components

### 1. Notion2WeChat Class (content/index.ts)
Main orchestrator class (approx 700 lines) with these responsibilities:

**UI Management**
- `createFloatingButton()`: Creates the blue floating button on Notion pages
- `createSidebar()`: Builds the conversion sidebar with theme selector
- `setupResizeHandler()`: Allows sidebar width adjustment via drag

**Content Processing**
- `extractNotionContent()`: Extracts page title and content
- `extractMarkdownFromElement()`: Uses Clipboard API + execCommand for Markdown extraction
- `generateContent()`: Main conversion pipeline (Markdown → HTML)
- `showPreview()`: Displays formatted result with theme styles applied

**Theme System**
- `loadThemes()`: Loads 6 built-in themes from themes.ts
- `updatePreviewTheme()`: Switches theme and reapplies styles
- `saveSelectedTheme()` / `getSavedTheme()`: Persistent theme selection

**Image Processing**
- Integrates with `imageProcessor.ts` to handle Notion attachment URLs
- Converts `attachment:` URLs to accessible formats
- Processes images to base64 for clipboard compatibility

**Clipboard Operations**
- `copyContent()`: Writes HTML to clipboard using Clipboard API
- Handles juice CSS inlining to preserve styles when pasted

### 2. Markdown Processing (utils/markdown.ts)
Custom renderer for marked.js with specific HTML structures:

**Custom Renderers**
- `heading`: Wraps H1-H3 in `<span class="prefix|content|suffix">` structure
- `listitem`: Wraps in `<section>` for theme consistency
- `blockquote`: Adds `multiquote-1` class
- `image`: Fixes URL encoding issues (handles `&` → `&amp;`)
- `codespan`: Adds `inline-code` class for inline code styling
- `code`: Custom code block renderer preventing backtick truncation

**Syntax Highlighting**
- Uses `highlight.js` via `marked-highlight`
- Applies `hljs language-*` classes to code blocks

### 3. Theme System (utils/themes.ts)
6 built-in themes with complete CSS styling:

1. **默认** (Default) - Clean, minimal styling
2. **微信** (WeChat Blue) - WeChat Official Account style
3. **红绯** (Red) - Red accent theme
4. **简黑** (Black) - Minimal black theme with special H2 styles
5. **山吹** (Yellow) - Warm yellow theme
6. **橙心** (Orange) - Orange accent theme

**CSS Composition**
Each theme merges:
- `highlightJsStyles`: Base syntax highlighting styles
- `defaultCodeStyles`: Code block styles (VS Code 2025 theme)
- `defaultTableStyles`: Table styles
- `theme-specific styles`: Per-theme element styling

**Critical Pattern**: Use `#nice` ID selector for all styles to ensure correct scoping and CSS inlining.

### 4. Image Processing (utils/imageProcessor.ts)
Handles Notion's proprietary image URL formats:

- Converts `attachment:fileId:fileName` to `https://www.notion.so/image/...`
- Processes internal `file.notion.so` domains → `www.notion.so/image`
- Handles URL encoding (`&` vs `&amp;`)
- Supports base64 conversion for clipboard compatibility

### 5. Background Script (background/index.ts)
Minimal service worker handling:
- Extension installation logging
- Message listener for `convertContent` action
- Placeholder for future API integration

## Build System

**Vite Configuration** (vite.config.ts)
- Separate bundles: `content.js`, `background.js`, `styles.css`
- TypeScript compilation via `tsc && vite build`
- Path alias: `@/` → `src/`
- Output directory: `dist/`

**TypeScript** (tsconfig.json)
- ES2020 target
- Module resolution with path aliases
- Strict type checking

**Linting & Formatting**
- Biome (all-in-one tool replacing ESLint + Prettier)
- Configuration in `biome.json`:
  - Formatter: 2-space indentation, 100 character line width
  - Linter: Recommended rules + custom rules (complexity, correctness, style, suspicious)
  - JavaScript: Single quotes, double quotes for JSX, semicolons as needed
  - Ignores: `dist/**` directory

**CI/CD**
- GitHub Actions workflow (`.github/workflows/build.yml`)
- Automatically builds on push to main branch

## Critical Implementation Details

### CSS Inlining with juice
The conversion process uses juice to inline CSS styles for clipboard compatibility:

```typescript
const fullHtml = `
  <style>${baseStyles}</style>
  <style>${theme.styles}</style>
  <section id="nice">${html}</section>
`

const inlinedHtml = juice(fullHtml, {
  removeStyleTags: false,
  preserveMediaQueries: true,
  insertPreservedExtraCss: true,
})
```

**Why `#nice` selector?**: Ensures styles are scoped and compatible with juice's inlining process.

### Notion Content Extraction
Uses a two-phase clipboard approach:

1. Select element → `execCommand('copy')`
2. Re-select page → `execCommand('copy')` (ensures full content)
3. Read from `navigator.clipboard.readText()`

This works because Notion's copy command generates Markdown.

### Theme Selection Persistence
Stored in `localStorage` with key `'notion2wechat_selected_theme'`.

### Image URL Format
Notion uses format: `attachment:uuid:filename`
- Extracted from Markdown: `![alt](attachment:uuid:filename)`
- Converted to: `https://www.notion.so/image/filename?id=pageId&table=block&width=1024&userId=v&cache=v2`

## Project Files & Configuration

### Root Configuration Files
- `package.json` - Dependencies, scripts, metadata
- `vite.config.ts` - Build configuration (bundling strategy, path aliases)
- `tsconfig.json` - TypeScript configuration
- `biome.json` - Linting, formatting, import organization rules
- `pnpm-lock.yaml` - PNPM lockfile

### Extension Files
- `public/manifest.json` - Chrome extension manifest (MV3)
- `public/_locales/` - i18n locale files (English default)
- `public/icons/` - Extension icons (16, 32, 48, 128px)

### Scripts
- `scripts/gen-icons.mjs` - Generates extension icons from SVG source

## File Dependencies

**Entry Points** (vite.config.ts)
- `src/content/index.ts` → `dist/content.js`
- `src/background/index.ts` → `dist/background.js`
- `src/content/styles.css` → `dist/styles.css`

**Key Imports**
- `content/index.ts` imports all utils and types
- `utils/markdown.ts` imports `marked`, `markedHighlight`, `highlight.js`
- `utils/themes.ts` exports 6 themes + helper functions
- `utils/imageProcessor.ts` handles image processing pipeline

## Extension Manifest (public/manifest.json)

**Permissions**
- `activeTab`: Access to current Notion tab
- `storage`: Save theme preference
- `host_permissions`: `https://www.notion.so/*` (inject content script)

**Content Scripts**
- Runs on `https://www.notion.so/*`
- Loads `content.js` + `styles.css`

**Web Accessible Resources**
- Allows Notion pages to access extension CSS/JS
- Pattern: `*.css`, `*.js`, `*.wasm`, `assets/*`

## Key Design Decisions

**Why two-phase copy for Notion content?**
Notion's `execCommand('copy')` only copies the currently focused block on first execution. The two-phase approach (focus block → copy → select all → copy) ensures we get the entire page content as Markdown.

**Why custom marked.js renderers?**
We need specific HTML structure to match theme CSS selectors:
- Headings wrapped in `<span class="prefix|content|suffix">` for decorative styling
- Lists wrapped in `<section>` for consistent spacing
- Blockquotes use `multiquote-1` class matching WeChat styles
- Images need URL encoding fixes for Notion attachments

**Why juice for CSS inlining?**
When copying to WeChat editor, external stylesheets are stripped. Juice inlines CSS into `style` attributes on each element, preserving formatting. However, juice has limitations with complex CSS selectors (like descendant selectors), so we use direct element selectors where possible.

**Why `#nice` ID wrapper?**
All theme styles use `#nice` selector to:
1. Scope styles to our content only (avoid affecting Notion page)
2. Ensure juice can correctly inline styles
3. Allow safe insertion into WeChat editor

## Common Development Workflows

### Adding a New Theme
1. Define CSS in `utils/themes.ts` (use `#nice` selector)
2. Add to theme array in `getAllThemes()`
3. Test by switching theme in sidebar

**Example theme structure**:
```css
const myTheme = `
#nice {
  /* Global styles */
}
#nice h1 {
  /* H1 styles - must have direct styles, not just .content */
}
#nice p {
  /* Paragraph styles */
}
/* ... other elements ... */
`
```

**Important**: Avoid relying solely on child selectors (like `#nice h1 .content`). Juice may not inline these correctly. Add direct styles to `#nice h1` as well.

### Modifying Markdown Renderer
Edit renderers in `utils/markdown.ts`:
- `renderer.heading()`: Control H1-H6 structure
- `renderer.listitem()`: Control list items
- `renderer.blockquote()`: Control blockquotes
- `renderer.image()`: Control images
- `renderer.code()` / `renderer.codespan()`: Control code

### Debugging Tips
1. **Content not showing**: Check Notion page structure, selectors in `extractNotionContent()`
2. **Styles not applying**: Verify `#nice` selector usage, check juice inlining
3. **Images not loading**: Check `imageProcessor.ts` URL conversion logic
4. **Clipboard empty**: Verify Clipboard API permissions, check browser compatibility

### Testing Changes
```bash
# 1. Build the extension
pnpm run build

# 2. Load in Chrome
# chrome://extensions/ → Developer mode → Load unpacked → select dist/

# 3. Test on Notion page
# Open https://www.notion.so/any-page

# 4. Verify
# - Floating button appears on right side
# - Click opens sidebar
# - Generate button produces formatted HTML
# - Copy button copies with styles intact
```

## Technology Stack

- **TypeScript** - Type safety and modern JavaScript features
- **Vite** - Fast build tool and dev server
- **Biome** - Linting, formatting, type checking (all-in-one)
- **Chrome Extension Manifest V3** - Modern extension API
- **marked.js** - Markdown parsing with custom renderers
- **highlight.js** - Code syntax highlighting
- **juice** - CSS inlining for email/clipboard compatibility
- **PNPM** - Fast, efficient package manager

## Recent Major Changes

- **Image Processing Fix**: Correctly converts Notion attachment images to base64 format
- **Code Block Styles**: Added VS Code 2025 style theme system with syntax highlighting
- **H1 Style Fix**: Resolved CSS inlining issue where H1 styles were lost on clipboard copy
