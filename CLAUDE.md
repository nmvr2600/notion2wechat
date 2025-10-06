# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Notion2WeChat is a Chrome extension that converts Notion articles to WeChat Official Account format. The extension provides a floating button on Notion pages that opens a sidebar for content conversion with multiple theme options.

## Architecture

The extension follows a standard Chrome extension structure:

1. **Content Script** (`src/content/index.ts`): Main functionality that runs on Notion pages
   - Creates a floating button on the right side of Notion pages
   - Opens a sidebar for content conversion when clicked
   - Extracts Notion page content and converts it to HTML
   - Applies theme styles and handles image processing
   - Provides copy functionality for WeChat publishing

2. **Background Script** (`src/background/index.ts`): Handles extension lifecycle and messaging

3. **Utilities** (`src/utils/`):
   - `markdown.ts`: Markdown to HTML conversion with custom renderers
   - `themes.ts`: Theme definitions and styling
   - `imageProcessor.ts`: Image URL processing and conversion

4. **Types** (`src/types/index.ts`): TypeScript interfaces for data structures

## Key Components

### Notion2WeChat Class (Content Script)
- Manages UI elements (floating button, sidebar)
- Handles content extraction from Notion pages
- Processes Markdown to HTML conversion
- Manages theme application
- Handles image processing for Notion attachments
- Provides clipboard copy functionality

### Theme System
- 6 built-in themes: Default, WeChat (Blue), Red, Black, Yellow, Orange
- Themes defined in CSS with specific selectors
- Each theme provides styling for different HTML elements

### Markdown Processing
- Custom marked.js renderer for specific HTML structure
- Syntax highlighting with highlight.js
- Special handling for headings, lists, quotes, and images

### Image Processing
- Converts Notion attachment URLs to accessible formats
- Processes images to base64 for clipboard compatibility
- Handles URL encoding issues

## Development Commands

```bash
# Install dependencies
pnpm install

# Development mode (watch mode)
pnpm run dev

# Build for production
pnpm run build

# Code linting
pnpm run lint

# Code formatting
pnpm run format
```

## Build Process

The project uses Vite with a custom configuration:
- Builds separate bundles for content script, background script, and styles
- Uses TypeScript for type checking
- Outputs to `dist/` directory
- Supports CSS preprocessing with PostCSS and Tailwind CSS

## Extension Structure

- `manifest.json`: Chrome extension manifest (MV3)
- Content script runs on `https://www.notion.so/*` pages
- Background script handles extension lifecycle
- Assets include icons and styles

## Key Technologies

- TypeScript
- Vite (build tool)
- marked.js (Markdown parsing)
- highlight.js (code syntax highlighting)
- juice (CSS inlining)
- Chrome Extension Manifest V3