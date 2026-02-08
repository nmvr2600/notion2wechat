import type { Theme } from '@/types'

// highlight.js 样式 - 作为基础样式
export const highlightJsStyles = `
/* highlight.js 样式 */
#nice pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
#nice code.hljs {
  padding: 3px 5px
}
#nice .hljs {
  background: #F3F3F3;
  color: #444
}
#nice .hljs-subst {

}
#nice .hljs-formula,
#nice .hljs-attr,
#nice .hljs-property,
#nice .hljs-params {

}
#nice .hljs-comment {
  color: #697070
}
#nice .hljs-tag,
#nice .hljs-punctuation {
  color: #444a
}
#nice .hljs-tag .hljs-name,
#nice .hljs-tag .hljs-attr {
  color: #444
}
#nice .hljs-keyword,
#nice .hljs-attribute,
#nice .hljs-selector-tag,
#nice .hljs-meta .hljs-keyword,
#nice .hljs-doctag,
#nice .hljs-name {
  font-weight: bold
}
#nice .hljs-type,
#nice .hljs-string,
#nice .hljs-number,
#nice .hljs-selector-id,
#nice .hljs-selector-class,
#nice .hljs-quote,
#nice .hljs-template-tag,
#nice .hljs-deletion {
  color: #880000
}
#nice .hljs-title,
#nice .hljs-section {
  color: #880000;
  font-weight: bold
}
#nice .hljs-regexp,
#nice .hljs-symbol,
#nice .hljs-variable,
#nice .hljs-template-variable,
#nice .hljs-link,
#nice .hljs-selector-attr,
#nice .hljs-operator,
#nice .hljs-selector-pseudo {
  color: #ab5656
}
#nice .hljs-literal {
  color: #695
}
#nice .hljs-built_in,
#nice .hljs-bullet,
#nice .hljs-code,
#nice .hljs-addition {
  color: #397300
}
#nice .hljs-meta {
  color: #1f7199
}
#nice .hljs-meta .hljs-string {
  color: #38a
}
#nice .hljs-emphasis {
  font-style: italic
}
#nice .hljs-strong {
  font-weight: bold
}
`

// VS Code 2025 风格的代码高亮样式 - 作为默认代码块样式
export const defaultCodeStyles = `
/* 代码块样式 */
#nice pre {
  background-color: #1e1e1e !important;
  border-radius: 8px !important;
  padding: 16px !important;
  overflow-x: auto !important;
  margin: 16px 0 !important;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
}

#nice pre code {
  background-color: transparent !important;
  padding: 0 !important;
  font-family: 'Cascadia Code', 'Fira Code', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important;
  font-size: 14px !important;
  line-height: 1.5 !important;
  color: #d4d4d4 !important;
  display: block !important;
}

#nice code.hljs {
  padding: 1em !important;
  overflow-x: auto !important;
  background: #1e1e1e !important;
  color: #d4d4d4 !important;
  border-radius: 8px !important;
}

/* 行内代码样式 */
#nice .inline-code {
  background-color: rgba(110, 118, 129, 0.2) !important;
  color: #d73a49 !important;
  padding: 2px 6px !important;
  border-radius: 4px !important;
  font-family: 'Cascadia Code', 'Fira Code', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important;
  font-size: 0.9em !important;
}
`

// 默认表格样式 - 作为基础表格样式
export const defaultTableStyles = `
/* 表格样式 */
#nice table {
  width: 100%;
  border-collapse: collapse;
  margin: 15px 0;
}

#nice table tr th,
#nice table tr td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  font-size: 16px;
}

#nice table tr th {
  background-color: #f2f2f2;
  font-weight: bold;
}
`

export const defaultMediaStyles = `
#nice section.notion-image-container {
  max-height: 400px;
  overflow-y: auto;
  width: 100%;
  margin: 16px 0;
  display: block;
  background-color: #f8f8f8;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  padding: 4px;
  box-sizing: border-box;
}

#nice section.notion-image-container img {
  width: 100% !important;
  height: auto !important;
  display: block !important;
  border-radius: 4px !important;
  margin: 0 !important;
  max-width: 100% !important;
  box-sizing: border-box !important;
}

/* Mermaid 图表容器样式 */
#nice .mermaid-container {
  text-align: center;
  margin: 16px 0;
  overflow-x: auto;
}

#nice .mermaid-container img {
  max-width: 100%;
  height: auto;
  display: inline-block;
  margin: 0 auto;
}
`

// 各主题的特定样式（不包含 highlight.js 样式和代码块样式）
const blue = `/* 全局属性
 * 页边距 padding: 30px;
 * 全文字体 font-family: ptima-Regular;
 * 英文换行 word-break: break-all;
 */
#nice {
}

/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 5px;
 * 下边距 margin-bottom: 5px;
 * 行高 line-height: 26px;
 * 词间距 word-spacing: 3px;
 * 字间距 letter-spacing: 3px;
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
#nice p {
  line-height: 1.6;
  color: #3f3f3f;
  font-size: 16px;
  margin: 10px 0px;
}

/* 一级标题 */
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

/* 一级标题内容 */
#nice h1 .content {
  color: #2563eb;
  font-weight: bold;
}

/* 一级标题修饰 请参考有实例的主题 */
#nice h1:after {
}

/* 二级标题 */
#nice h2 {
  margin: 80px 10px 40px 10px;
  text-align: center;
  font-weight: normal;
  color: #3f3f3f;
  font-size: 140%;
}

/* 二级标题内容 */
#nice h2 .content {
}

/* 二级标题修饰 请参考有实例的主题 */
#nice h2:after {
}

/* 三级标题 */
#nice h3 {
  margin: 40px 0px 20px 0px;
  font-weight: bold;
  line-height: 1.5;
  color: #3f3f3f;
  font-size: 120%;
}

/* 三级标题内容 */
#nice h3 .content {
}

/* 三级标题修饰 请参考有实例的主题 */
#nice h3:after {
}

/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#nice ul {
list-style-type: disc;
}

/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#nice ol {
list-style-type: decimal;
}

/* 列表内容，不要设置li
 */
#nice li section {
}

/* 引用
* 左边缘颜色 border-left-color: black;
* 背景色 background: gray;
*/
#nice .multiquote-1 {
  color: rgb(91,91,91);
  border-left: 3px solid rgb(158,158,158);
  background: rgba(158, 158, 158, 0.1);
  padding: 1px 0 1px 10px;
  margin: 20px 0px;
}

/* 引用文字 */
#nice .multiquote-1 p {
  color: #3f3f3f;
  line-height: 1.5;
  font-size: 16px;
  margin: 10px;
  padding: 0px;
}

/* 链接
 * border-bottom: 1px solid #009688;
 */
#nice a {
  color: #ff3502;
  border-bottom: 1px solid #ff3502;
}

/* 加粗 */
#nice strong {
  color: #ff3502;
  line-height: 1.5;
  font-size: 16px;
}

/* 斜体 */
#nice em {
}

/* 加粗斜体 */
#nice em strong {
}

/* 删除线 */
#nice del {
}

/* 分隔线
* 粗细、样式和颜色
* border-top: 1px solid #3e3e3e;
*/
#nice hr {
}

/* 图片
* 宽度 width: 80%;
* 居中 margin: 0 auto;
* 居左 margin: 0 0;
*/
#nice img {
  max-width: 100% !important;
  height: auto;
  display: block;
  margin: 15px auto;
  box-sizing: border-box;
  border-radius: 6px;
}


/* 图片描述文字 */
#nice figcaption {
}

/* 行内代码 */
#nice p code, #nice li code {
  background: #f8f5ec;
  color: #ff3502;
  line-height: 1.5;
  font-size: 90%;
  padding: 3px 5px;
  border-radius: 2px;
}

/* 非微信代码块
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
#nice pre code {
}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#nice table tr th,
#nice table tr td {
}

/* 脚注文字 */
#nice .footnote-word {
  color: #ff3502;
  font-size: 16px;
  line-height: 1.5;
  font-weight: normal;
}

/* 脚注上标 */
#nice .footnote-ref {
  color: #ff3502;
  font-weight: normal;
}

/* "参考资料"四个字 */
#nice .footnotes-sep {
}

/* 参考资料编号 */
#nice .footnote-num {
}

/* 参考资料文字 */
#nice .footnote-item p {
}

/* 参考资料解释 */
#nice .footnote-item p em {
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#nice .block-equation svg {
}

/* 行内公式
 */
#nice .inline-equation svg {
}`

const red = `
/*自定义样式，实时生效*/

/* 全局属性 */
#nice {
    font-family: Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, "PingFang SC", Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    padding: 5px;
    font-size: 16px;
    color: #353535;
    word-spacing: 0.8px;
    letter-spacing: 0.8px;
    border-radius: 16px;
}

/* 段落 */
#nice p {
    line-height: 1.75;
    margin: 0.8em 0;
    font-size: 16px;
    color: #353535;
}

/* 一级标题 */
#nice h1 {
    border-top: 2px solid rgb(248, 57, 41);
    text-align: center;
    font-size: 1.3em;
}

/* 一级标题内容 */
#nice h1 .content {
    display: inline-block;
    font-weight: normal;
    background: rgb(248, 57, 41);
    color: #ffffff;
    padding: 3px 10px 1px;
    border-radius: 0 0 13px 13px;
}

/* 二级标题 */
#nice h2 {
    text-align: left;
    margin: 20px 10px 0px 0px;
}

/* 二级标题内容 */
#nice h2 .content {
    font-size: 18px;
    font-weight: 700;
    color: #222;
    display: inline-block;
    padding-left: 10px;
    border-left: 5px solid rgb(248, 57, 41);
}

/* 三级标题内容 */
#nice h3 .content {
    font-size: 16px;
    color: #222;
}

/* 无序列表整体样式 */
#nice ul {
    color: #f83929;
    font-size: 16px;
    list-style-type: disc;
}

/* 有序列表整体样式 */
#nice ol {
    color: #f83929;
    font-size: 16px;
    list-style-type: decimal;
}

/* 列表内容 */
#nice li {
    color: #353535;
}

#nice li section {
    color: #353535;
}

/* 引用 */
#nice .multiquote-1 {
    font-style: normal;
    border-left: none;
    padding: 15px 10px;
    line-height: 1.75;
    border-radius: 13px;
    color: #353535;
    background: #f5f5f5;
}

#nice .multiquote-1:before {
    content: "";
    display: block;
    font-size: 2em;
    color: rgb(248, 57, 41);
    font-family: Arial, serif;
    line-height: 1em;
    font-weight: 700;
}

/* 引用文字 */
#nice .multiquote-1 p {
    color: #353535;
    font-size: 16px;
    margin: 0 10px;
    display: block;
}

#nice .multiquote-1:after {
    content: "";
    float: right;
    display: block;
    font-size: 2em;
    color: rgb(248, 57, 41);
    font-family: Arial, serif;
    line-height: 1em;
    font-weight: 700;
}

/* 链接 */
#nice a {
    color: rgb(248, 57, 41);
    font-weight: 400;
    border-bottom: 1px solid rgb(248, 57, 41);
}

/* 加粗 */
#nice strong {
    font-weight: 700;
    color: rgb(248, 57, 41);
}

/* 斜体 */
#nice em {
    color: rgb(248, 57, 41);
}

/* 加粗斜体 */
#nice em strong {
    color: rgb(248, 57, 41);
}

/* 分隔线 */
#nice hr {
    height: 1px;
    padding: 0;
    border: none;
    border-top: medium solidid #333;
    text-align: center;
    background-image: linear-gradient(to right, rgba(248, 57, 41, 0), rgba(248, 57, 41, 0.75), rgba(248, 57, 41, 0));
}

/* 图片 */
#nice figure {
    border-radius: 16px;
    overflow: hidden;
}

#nice figure a img {
    border-radius: 16px;
    width: 100%;
    max-width: 100%;
}

#nice img {
    border-radius: 6px;
    display: block;
    margin: 20px auto;
    max-width: 95%;
    object-fit: contain;
}

/* 图片描述文字 */
#nice figcaption {
    display: block;
    font-size: 12px;
}

/* 行内代码 */
#nice p code,
#nice li code {
    color: rgb(271, 93, 108);
}

/* 代码块样式（红色主题自定义） */
#nice pre {
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 16px;
  overflow-x: auto;
  margin: 16px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

#nice pre code {
  background-color: transparent;
  padding: 0;
  font-family: 'Cascadia Code', 'Fira Code', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 14px;
  line-height: 1.5;
  color: #d4d4d4;
}

/* 行内代码样式（红色主题自定义） */
#nice .inline-code {
  background-color: rgba(248, 57, 41, 0.1);
  color: #f83929;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Cascadia Code', 'Fira Code', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.9em;
}

/* 表格内的单元格 */
#nice table tr th,
#nice table tr td {
    font-size: 16px;
    color: #645647;
}

#nice table tr th {
    color: #353535;
    background-color: #dbd9d8;
}

/* 脚注 */
#nice .footnotes {
    font-size: 16px;
}

/* 脚注文字 */
#nice .footnote-word {
    font-weight: normal;
    color: #f83929;
}

/* 脚注上标 */
#nice .footnote-ref {
    font-weight: normal;
    color: #f83929;
}

/* "参考资料"四个字 */
#nice .footnotes-sep:before {
    content: '参考资料 ';
    color: #f83929;
    letter-spacing: 1px;
    text-align: left;
    display: block;
    font-weight: 500;
    padding-bottom: .1em;
    border-bottom: 3px double #f83929;
    font-size: 20px;
}

/* 参考资料编号 */
#nice .footnote-num {
    color: #f83929;
}

/* 参考资料文字 */
#nice .footnote-item p {
    font-weight: 400;
    color: #f83929;
}

/* 参考资料解释 */
#nice .footnote-item p em {
    font-weight: 400;
    font-size: 14px;
    color: #353535;
}

/* 行间公式 */
#nice .block-equation svg {
    color: #353535;
}

/* 行内公式 */
#nice .inline-equation svg {
    color: #353535;
}

/* 滑动图片 */
#nice .imageflow-img {
    display: inline-block;
    width: 100%;
    margin-bottom: 0;
}
`

const black = `
/* 自定义样式，实时生效，浏览器实时缓存 */

/* 全局属性
 * 页边距 padding: 30px;
 * 全文字体 font-family: ptima-Regular;
 * 英文换行 word-break: break-all;
 */
 #nice {
  font-size:14px;
  padding:10px;
}

/*图片下提示*/
#nice figcaption{
  font-size:12px;
}
#nice .imageflow-caption{
  font-size:12px;
}

/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 5px;
 * 下边距 margin-bottom: 5px;
 * 行高 line-height: 26px;
 * 词间距 word-spacing: 3px;
 * 字间距 letter-spacing: 3px;
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
#nice p {
  font-size: 16px;
  margin: 15px 0;
  line-height: 1.6;
  color: #3e3e3e;
}

/* 一级标题 */
#nice h1 {
  font-size: 24px;
}

/* 一级标题内容 */
#nice h1 .content {
}

/* 一级标题前缀 */
#nice h1 .prefix {
}

/* 一级标题后缀 */
#nice h1 .suffix{
}

/* 二级标题 */
#nice h2 {
  	text-align:center;
  	position:relative;
    font-weight: bold;
    color: black;
    line-height: 1.1em;
    padding-top: 12px;
    padding-bottom: 12px;
    margin:70px 30px 30px;
    border: 1px solid #000;
    font-size: 20px;
}

#nice h2:before{
  content: ' ';
  float: left;
  display: block;
  width: 90%;
  border-top: 1px solid #000;
  height: 1px;
  line-height: 1px;
  margin-left: -5px;
  margin-top: -17px;
}
#nice h2:after{
  content: ' ';
  float: right;
  display: block;
  width: 90%;
  border-bottom: 1px solid #000;
  height: 1px;
  line-height: 1px;
  margin-right: -5px;
  margin-top: 16px;
}
/* 二级标题内容 */
#nice h2 .content {
  display: block;
  -webkit-box-reflect: below 0em -webkit-gradient(linear,left top,left bottom, from(rgba(0,0,0,0)),to(rgba(255,255,255,0.1)));
}
#nice h2 strong {
}
/* 二级标题前缀 */
#nice h2 .prefix {
  display: block;
  width: 3px;
  margin: 0 0 0 5%;
  height: 3px;
  line-height: 3px;
  overflow: hidden;
  background-color: #000;
  box-shadow:3px 0 #000,
    0 3px #000,
    -3px 0 #000,
    0 -3px #000;
}

/* 二级标题后缀 */
#nice h2 .suffix {
  display: block;
  width: 3px;
  margin: 0 0 0 95%;
  height: 3px;
  line-height: 3px;
  overflow: hidden;
  background-color: #000;
  box-shadow:3px 0 #000,
    0 3px #000,
    -3px 0 #000,
    0 -3px #000;
}

/* 三级标题 */
#nice h3 {
  background-color:#000;
  color:#fff;
  padding:2px 10px;
  width:fit-content;
  font-size:18px;
  margin:60px auto 10px;
}
#nice h3 strong {
  color:#fff;
}

/* 三级标题内容 */
#nice h3 .content {
}

/* 三级标题前缀 */
#nice h3 .prefix {
}

/* 三级标题后缀 */
#nice h3 .suffix {
}

/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#nice ul {
  list-style-type: square;
  font-size: 16px;
}
/* 无序二级列表
 */
#nice ul li ul li{
  list-style-type: disc;
}

/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#nice ol {
  list-style-type: decimal;
  font-size: 16px;
}

/* 列表内容，不要设置li
 */
#nice li section {
}

/* 引用
 * 左边缘颜色 border-left-color: black;
 * 背景色 background: gray;
 */
#nice .multiquote-1 {
  border-left: 3px solid rgba(0, 0, 0, 0.65);
  border-right: 1px solid rgba(0, 0, 0, 0.65);
  background: rgb(249, 249, 249);
}

/* 引用文字 */
#nice .multiquote-1 p {
}

/* 链接
 * border-bottom: 1px solid #009688;
 */
#nice a {
}

/* 加粗 */
#nice strong {
}

/* 斜体 */
#nice em {
}

/* 加粗斜体 */
#nice em strong {
}

/* 删除线 */
#nice del {
}

/* 分隔线
 * 粗细、样式和颜色
 * border-top: 1px solid #3e3e3e;
 */
#nice hr {
}

/* 图片
 * 宽度 width: 80%;
 * 居中 margin: 0 auto;
 * 居左 margin: 0 0;
 */
#nice img {
  box-shadow: rgba(170, 170, 170, 0.48) 0px 0px 6px 0px;
  border-radius:4px;
  margin-top:10px;
  max-width: 100%;
  height: auto;
  display: block;
  margin: 10px auto;
}
/* 行内代码 */
#nice p code, #nice li code {
  color:#ff6441;
}

/* 代码块样式（黑色主题自定义） */
#nice pre {
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 16px;
  overflow-x: auto;
  margin: 16px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

#nice pre code {
  background-color: transparent;
  padding: 0;
  font-family: 'Cascadia Code', 'Fira Code', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 14px;
  line-height: 1.5;
  color: #d4d4d4;
}

/* 行内代码样式（黑色主题自定义） */
#nice .inline-code {
  background-color: rgba(255, 100, 65, 0.1);
  color: #ff6441;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Cascadia Code', 'Fira Code', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.9em;
}

/* 非微信代码块
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
#nice pre.custom {
  box-shadow: rgba(170, 170, 170, 0.48) 0px 0px 6px 0px;
  max-width: 100%;
  border-radius:4px;
  margin: 10px auto 0 auto;
}
#nice pre code {
}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#nice table tr th,
#nice table tr td {
  font-size: 16px;
}

/* 脚注文字 */
#nice .footnote-word {
}

/* 脚注上标 */
#nice .footnote-ref {
}

/* "参考资料"四个字
 * 内容 content: "参考资料";
 */
#nice .footnotes-sep {
  font-size: 16px;
  color: #888;
  border-top: 1px solid #eee;
  padding: 30px 0 10px 0px;
  background-color: transparent;
  margin: 0;
  width: 100%;
}
#nice .footnotes-sep:before {
  content:'参考资料';
}
#nice .footnotes{
  font-size: 16px;
  border-left:5px solid #eee;
  padding-left:10px;
}

/* 参考资料编号 */
#nice .footnote-num {
  font-size:16px;
  color:#999;
}

/* 参考资料文字 */
#nice .footnote-item p {
  font-size:16px;
  color:#999;
}

/* 参考资料解释 */
#nice .footnote-item p em {
  font-size:16px;
  color:#999;
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#nice .block-equation svg {
}

/* 行内公式
 */
#nice .inline-equation svg {
}
/* 文章结尾 */
#nice:after{
  content:'- END -';
  font-size:15px;
  display:block;
  text-align:center;
  margin-top:50px;
  color:#999;
  border-bottom:1px solid #eee;
}

/*滑动幻灯片*/
#nice .imageflow-layer1 img{
  margin:0;
  box-shadow: none;
  border-radius: 0;
}

`

const yellow = `
/*自定义样式，实时生效*/
#nice {
}

#nice p {
	font-size: 16px;
	padding-top: 8px;
	padding-bottom: 8px;
	margin: 0 0 20px;
	padding: 0;
	line-height: 1.8em;
	color: #3a3a3a;
}

/* 一级标题 */
#nice h1 {
  font-size: 2.1em;
	line-height: 1.1em;
	padding-top: 16px;
  padding-bottom: 10px;
  margin-bottom: 4px;
  border-bottom: 1px solid #c99833;
}
/* 一级标题内容 */
#nice h1 .content {
  color: #515151;
  font-weight: 700;
}

#nice h2, h3, h4, h5, h6 {
 line-height: 1.5em;
 margin-top: 2.2em;
 margin-bottom: 4px;
}

/* 一级标题修饰 请参考有实例的主题 */
#nice h1:after {}

/* 二级标题 */
#nice h2 {
 margin-bottom: 35px;
}

/* 二级标题内容 */

#nice h2 .content {
  display: inline-block;
  font-weight: bold;
  background: linear-gradient(#fff 60%, #ffb11b 40%);
  color: #515151;
  padding: 2px 13px 2px;
  margin-right: 3px;
  height: 50%;
}

/* 二级标题修饰 请参考有实例的主题 */
#nice h2:after {}

/* 三级标题 */
#nice h3 {
  line-height: 1.4;
  padding-top: 10px;
  margin: 10px 0 5px;
}

/* 三级标题内容 */
#nice h3 .content {
  color: #515151;
  font-weight: 700;
 font-size: 1.0em;
  padding-left: 20px;
  border-left: 3px solid #f9bf45;
}

/* 三级标题修饰 请参考有实例的主题 */
#nice h3:after {}

/* 引用
* 左边缘颜色 border-left-color: black;
* 背景色 background: gray;
*/
#nice .multiquote-1 {
  border-left-color: #ffb11b;
 background: #fff5e3;
}

/* 引用文字 */
#nice .multiquote-1 p {
  color: #595959;
}

/* 链接 */
#nice a {
  border: none;
  text-decoration: none;
  color: #dda52d;
}

#nice a:hover {
  color: #f9bf45;
  text-decoration: underline;
}

/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#nice ul {
list-style-type: disc;
}

/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#nice ol {
list-style-type: decimal;
}

/* 列表内容，不要设置li
 */
#nice li section {
}

/* 加粗 */
#nice strong {}

/* 斜体 */
#nice em {}

/* 加粗斜体 */
#nice em strong {}

/* 删除线 */
#nice del {
  color: #d19826;
}

/* 分隔线
* 粗细、样式和颜色
* border-top: 1px solid #3e3e3e;
*/
#nice hr {
  border-top: 1px solid #f9bf45;
  margin: 20px 0px;
}

/* 图片
* 宽度 width: 80%;
* 居中 margin: 0 auto;
* 居左 margin: 0 0;
*/
#nice img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  display: block;
  margin: 15px auto;
}

/* 图片描述文字 */
#nice figcaption {
  color: #dda52d;
  font-size: 14px;
}

/* 行内代码 */
#nice p code, #nice li code {
  color: #9b6e23;
  background-color: #fff5e3;
  padding: 3px;
  margin: 3px;
}

/* 代码块样式（黄色主题自定义） */
#nice pre {
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 16px;
  overflow-x: auto;
  margin: 16px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

#nice pre code {
  background-color: transparent;
  padding: 0;
  font-family: 'Cascadia Code', 'Fira Code', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 14px;
  line-height: 1.5;
  color: #d4d4d4;
}

/* 行内代码样式（黄色主题自定义） */
#nice .inline-code {
  background-color: rgba(249, 191, 69, 0.1);
  color: #9b6e23;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Cascadia Code', 'Fira Code', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.9em;
}

/* 非微信代码块
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
#nice pre code {}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#nice table tr th,
#nice table tr td {
  text-align: center;
}

/* 脚注文字 */
#nice .footnote-word {
  color: #ffb11b;
  padding: 3px;
}

/* 脚注上标 */
#nice .footnote-ref {
  color: #dda52d;
  margin: 2px;
  padding: 3px;
}

/* "参考资料"四个字
 * 内容 content: "参考资料";
 */
#nice .footnotes-sep:before {
  margin: 30px 0px 15px 0px;
  font-weight: 800;
}


/* 参考资料编号 */
#nice .footnote-num {
}

/* 参考资料文字 */
#nice .footnote-item p {
}

/* 参考资料解释 */
#nice .footnote-item p em {
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#nice .block-equation svg {
}

/* 行内公式
 */
#nice .inline-equation svg {
}

/* 滑动图片
 */
#nice .imageflow-img {
  display: inline-block;
  width:100%;
  margin-bottom: 0;
}
`

const orange = `
/* 全局属性
 * 页边距 padding: 30px;
 * 全文字体 font-family: ptima-Regular;
 * 英文换行 word-break: break-all;
 */
#nice {
  font-size: 16px;
  color: black;
  padding: 0 10px;
  line-height: 1.6;
  word-spacing: 0px;
  letter-spacing: 0px;
  word-break: break-word;
  word-wrap: break-word;
  text-align: left;
  font-family: Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, 'PingFang SC', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 5px;
 * 下边距 margin-bottom: 5px;
 * 行高 line-height: 26px;
 * 词间距 word-spacing: 3px;
 * 字间距 letter-spacing: 3px;
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
#nice p {
font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 15px 0; line-height: 26px; color: black;
}
/* 一级标题 */
#nice h1 {
  font-size: 1.8em;
  font-weight: bold;
  margin: 30px 0;
  padding: 10px 0;
  text-align: center;
  color: rgb(239, 112, 96);
  border-bottom: 3px solid rgb(239, 112, 96);
}
/* 一级标题内容 */
#nice h1 .content {
  font-weight: bold;
  color: inherit;
}
/* 一级标题修饰 请参考有实例的主题 */
#nice h1:after {
}
/* 二级标题 */
#nice h2 {
  margin: 40px 0 20px 0;
  border-bottom: 2px solid rgb(239, 112, 96);
  font-size: 1.3em;
}
/* 二级标题内容 */
#nice h2 .content {
  display: inline-block;
  font-weight: bold;
  background: rgb(239, 112, 96);
  color: #ffffff;
  padding: 3px 10px 1px;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  margin-right: 3px;
}
/* 二级标题修饰 请参考有实例的主题 */
#nice h2:after {
  display: inline-block;
  content: " ";
  vertical-align: bottom;
  border-bottom: 36px solid #efebe9;
  border-right: 20px solid transparent;
}
/* 三级标题 */
#nice h3 {
}
/* 三级标题内容 */
#nice h3 .content {
}
/* 三级标题修饰 请参考有实例的主题 */
#nice h3:after {
}
/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#nice ul {
list-style-type: disc;
}
/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#nice ol {
list-style-type: decimal;
}
/* 列表内容，不要设置li
 */
#nice li section {
}
/* 引用
 * 左边缘颜色 border-left-color: black;
 * 背景色 background: gray;
 */
#nice .multiquote-1 {
  border-left-color: rgb(239, 112, 96);
  background: #fff9f9;
}
/* 引用文字 */
#nice .multiquote-1 p {
}
/* 链接
 * border-bottom: 1px solid #009688;
 */
#nice a {
  color: rgb(239, 112, 96);
  border-bottom: 1px solid rgb(239, 112, 96);
}
/* 加粗 */
#nice strong {
}
/* 斜体 */
#nice em {
}
/* 加粗斜体 */
#nice em strong {
}
/* 删除线 */
#nice del {
}
/* 分隔线
 * 粗细、样式和颜色
 * border-top: 1px solid #3e3e3e;
 */
#nice hr {
}
/* 图片
 * 宽度 width: 80%;
 * 居中 margin: 0 auto;
 * 居左 margin: 0 0;
 */
#nice img {
  max-width: 100%;
  max-height: 600px;
  height: auto;
  display: block;
  margin: 15px auto;
  overflow-y: auto;
  object-position: top;
}
/* 图片描述文字 */
#nice figcaption {
}
/* 行内代码 */
#nice p code, #nice li code {
  color: rgb(239, 112, 96);
}

/* 代码块样式（橙色主题自定义） */
#nice pre {
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 16px;
  overflow-x: auto;
  margin: 16px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

#nice pre code {
  background-color: transparent;
  padding: 0;
  font-family: 'Cascadia Code', 'Fira Code', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 14px;
  line-height: 1.5;
  color: #d4d4d4;
}

/* 行内代码样式（橙色主题自定义） */
#nice .inline-code {
  background-color: rgba(239, 112, 96, 0.1);
  color: rgb(239, 112, 96);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Cascadia Code', 'Fira Code', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.9em;
}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#nice table tr th,
#nice table tr td {
}
/* 脚注文字 */
#nice .footnote-word {
  color: #ff3502;
}
/* 脚注上标 */
#nice .footnote-ref {
  color: rgb(239, 112, 96);
}
/* "参考资料"四个字
 * 内容 content: "参考资料";
 */
#nice .footnotes-sep:before {
}
/* 参考资料编号 */
#nice .footnote-num {
}
/* 参考资料文字 */
#nice .footnote-item p {
}
/* 参考资料解释 */
#nice .footnote-item p em {
}
/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#nice .block-equation svg {
}
/* 行内公式
 */
#nice .inline-equation svg {
}
`

const defaultStyle = `
 #nice { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; line-height: 1.6; color: #333; max-width: 100%; margin: 0 auto; padding: 20px; } #nice h1 { font-size: 24px; font-weight: bold; margin: 20px 0; color: #000; } #nice h2 { font-size: 20px; font-weight: bold; margin: 18px 0; color: #000; } #nice h3 { font-size: 18px; font-weight: bold; margin: 16px 0; color: #000; } #nice p { margin: 15px 0; text-align: justify; } #nice blockquote { border-left: 4px solid #ddd; margin: 15px 0; padding: 10px 20px; background-color: #f9f9f9; } #nice table { width: 100%; border-collapse: collapse; margin: 15px 0; } #nice th, #nice td { border: 1px solid #ddd; padding: 8px; text-align: left; } #nice th { background-color: #f2f2f2; } #nice ul, #nice ol { margin: 15px 0; padding-left: 30px; } #nice li { margin: 5px 0; }
`

// 创建主题的函数，包含基础样式和主题特定样式
function createTheme(name: string, themeStyles: string): Theme {
  const allStyles = [
    highlightJsStyles,
    defaultCodeStyles,
    defaultTableStyles,
    defaultMediaStyles,
    themeStyles,
  ].join('\n')

  return {
    name,
    styles: allStyles,
  }
}

// 默认主题
export const defaultTheme: Theme = createTheme('默认', defaultStyle)

// 蓝色主题
export const blueTheme: Theme = createTheme('微信', blue)

// 红色主题
export const redTheme: Theme = createTheme('红绯', red)

// 黑色主题
export const blackTheme: Theme = createTheme('简黑', black)

// 黄色主题
export const yellowTheme: Theme = createTheme('山吹', yellow)

// 橙色主题
export const orangeTheme: Theme = createTheme('橙心', orange)

// 获取所有主题
export function getAllThemes(): Theme[] {
  return [defaultTheme, blueTheme, redTheme, blackTheme, yellowTheme, orangeTheme]
}
