import type { Theme } from '@/types'

const blue = `
/* 全局属性 */
#nice {
  counter-reset: counterh1 counterh2 counterh3;
}

/* 段落 */
#nice p {
}

/* 一级标题 */
#nice h1 {
  line-height: 28px;
  border-bottom: 1px solid rgb(37,132,181);
}

#nice h1:before {
  background: rgb(37,132,181);
  color: white;
  counter-increment: counterh1;
  content: 'Part'counter(counterh1); 
  padding: 2px 8px;
}

/* 一级标题内容 */
#nice h1 .content {
  color: rgb(37,132,181);
  margin-left: 8px;
  font-size: 20px;
}

/* 二级标题内容 */
#nice h2 .content {
  font-size: 18px;
  border-bottom: 4px solid rgb(37,132,181);
  padding: 2px 4px;
  color: rgb(37,132,181);
}

/* 二级标题前缀 */
#nice h2 .prefix {
  display: inline-block;
}

#nice h2 .prefix:before {
  counter-increment: counterh2;
  content: counter(counterh2); 
  color:rgb(159,205,208);
  border-bottom: 4px solid rgb(159,205,208);
  font-size: 18px;
  padding: 2px 4px;
}

/* 三级标题内容 */
#nice h3 .content {
  font-size: 16px;
  border-bottom: 1px solid rgb(37,132,181);
  padding: 2px 10px;
  color: rgb(37,132,181);
}

/* 三级标题前缀 */
#nice h3 .prefix {
  display:inline-block;
  background:linear-gradient(45deg, transparent 48%, rgb(37,132,181) 48%, 
            rgb(37,132,181) 52%, transparent 52%);
  width:24px;
  height:24px;
  margin-bottom: -7px;
}

/* 一级引用 */
#nice .multiquote-1 {
  border: 1px dashed rgb(37,132,181);
  background: transparent;
}

/* 二级引用 */
#nice .multiquote-2 {
  border: 1px dashed rgb(248,99,77);
  box-shadow: none;
}

#nice .multiquote-2 blockquote {
  margin: 0;
}

#nice .multiquote-2 strong {
  color:rgb(248,99,77);
}

#nice .multiquote-2 a {
  color:rgb(248,99,77);
  border-bottom: 1px solid rgb(248,99,77);
}

/* 链接 */
#nice a {
  color:rgb(37,132,181);
  border-bottom: 1px solid rgb(37,132,181);
}

/* 加粗 */
#nice strong {
  color: rgb(37,132,181);
}

/* 斜体 */
#nice em {
  color: rgb(37,132,181);
}

/* 加粗斜体 */
#nice em strong {
  color: rgb(37,132,181);
}

/* 分隔线 */
#nice hr {
  border-top: 1px solid rgb(37,132,181);
}

/* 表格 */
#nice table tr th {
  border: 1px solid rgb(248,99,77);
  background-color: rgb(235,114,80);
  color: #f8f8f8;
  border-bottom: 0;
  border: 1px solid rgb(245,203,174);
}

#nice table tr td {
  border: 1px solid rgb(245,203,174);
}

#nice table tr:nth-of-type(2) {
  background-color: rgb(248,222,203);
}

/* 脚注文字 */
#nice .footnote-word {
  color:rgb(37,132,181);
}

/* 脚注上标 */
#nice .footnote-ref {
  color:rgb(37,132,181);
}

/* 代码块样式 */
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

/* 行内代码样式 */
#nice .inline-code {
  background-color: rgba(37, 132, 181, 0.1);
  color: #2584b5;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Cascadia Code', 'Fira Code', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.9em;
}

/* Shiki 生成的代码块样式调整 */
#nice pre.shiki {
  margin: 16px 0 !important;
  border-radius: 8px !important;
  overflow-x: auto !important;
}

#nice pre.shiki code {
  display: block !important;
}
`

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
}

/* 有序列表整体样式 */
#nice ol {
    color: #f83929;
    font-size: 16px;
}

/* 列表内容 */
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
    content: """;
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
    content: """;
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

/* 代码块样式 */
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

/* 行内代码样式 */
#nice .inline-code {
  background-color: rgba(248, 57, 41, 0.1);
  color: #f83929;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Cascadia Code', 'Fira Code', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.9em;
}

/* Shiki 生成的代码块样式调整 */
#nice pre.shiki {
  margin: 16px 0 !important;
  border-radius: 8px !important;
  overflow-x: auto !important;
}

#nice pre.shiki code {
  display: block !important;
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
  font-size:14px;
}

/* 一级标题 */
#nice h1 {
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
  font-size:17px;
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
}
/* 无序二级列表
 */
#nice ul li ul li{
  list-style-type: circle;
}

/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#nice ol {
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
}
/* 行内代码 */
#nice p code, #nice li code {
  color:#ff6441;
}

/* 代码块样式 */
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

/* 行内代码样式 */
#nice .inline-code {
  background-color: rgba(255, 100, 65, 0.1);
  color: #ff6441;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Cascadia Code', 'Fira Code', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.9em;
}

/* Shiki 生成的代码块样式调整 */
#nice pre.shiki {
  margin: 16px 0 !important;
  border-radius: 8px !important;
  overflow-x: auto !important;
}

#nice pre.shiki code {
  display: block !important;
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
  font-size:14px;
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
  font-size: 14px;
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
  border-left:5px solid #eee;
  padding-left:10px;
}

/* 参考资料编号 */
#nice .footnote-num {
  font-size:14px;
  color:#999;
}

/* 参考资料文字 */
#nice .footnote-item p { 
  font-size:14px;
  color:#999;
}

/* 参考资料解释 */
#nice .footnote-item p em {
  font-size:14px;
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
}

/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#nice ol {
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
  width: 100%;
 border-radius: 5px;
 display: block;
 margin-bottom: 15px;
 height: auto;
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

/* 代码块样式 */
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

/* 行内代码样式 */
#nice .inline-code {
  background-color: rgba(249, 191, 69, 0.1);
  color: #9b6e23;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Cascadia Code', 'Fira Code', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.9em;
}

/* Shiki 生成的代码块样式调整 */
#nice pre.shiki {
  margin: 16px 0 !important;
  border-radius: 8px !important;
  overflow-x: auto !important;
}

#nice pre.shiki code {
  display: block !important;
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

// VS Code 2025 风格的代码高亮样式
const vscodeCodeStyles = `
/* 代码块样式 */
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

/* 行内代码样式 */
#nice .inline-code {
  background-color: rgba(110, 118, 129, 0.2);
  color: #d73a49;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Cascadia Code', 'Fira Code', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.9em;
}

/* Shiki 生成的代码块样式调整 */
#nice pre.shiki {
  margin: 16px 0 !important;
  border-radius: 8px !important;
  overflow-x: auto !important;
}

#nice pre.shiki code {
  display: block !important;
}

/* 代码语言标签 */
#nice pre.shiki .language-id {
  position: absolute;
  top: 0;
  right: 12px;
  padding: 4px 8px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #8c8c8c;
  font-size: 12px;
  border-radius: 0 0 4px 4px;
  text-transform: uppercase;
  font-weight: 500;
}
`

// 默认主题
export const defaultTheme: Theme = {
  name: '默认',
  styles: ` #nice { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; line-height: 1.6; color: #333; max-width: 100%; margin: 0 auto; padding: 20px; } #nice h1 { font-size: 24px; font-weight: bold; margin: 20px 0; color: #000; } #nice h2 { font-size: 20px; font-weight: bold; margin: 18px 0; color: #000; } #nice h3 { font-size: 18px; font-weight: bold; margin: 16px 0; color: #000; } #nice p { margin: 15px 0; text-align: justify; } #nice img { max-width: 100%; height: auto; display: block; margin: 15px auto; } #nice blockquote { border-left: 4px solid #ddd; margin: 15px 0; padding: 10px 20px; background-color: #f9f9f9; } ${vscodeCodeStyles} #nice table { width: 100%; border-collapse: collapse; margin: 15px 0; } #nice th, #nice td { border: 1px solid #ddd; padding: 8px; text-align: left; } #nice th { background-color: #f2f2f2; } #nice ul, #nice ol { margin: 15px 0; padding-left: 30px; } #nice li { margin: 5px 0; } `,
}

// 蓝色主题
export const blueTheme: Theme = {
  name: '蓝色',
  styles: blue,
}

// 红色主题
export const redTheme: Theme = {
  name: '红色',
  styles: red,
}

export const blackTheme: Theme = {
  name: '黑色',
  styles: black,
}

export const yellowTheme: Theme = {
  name: '黄色',
  styles: yellow,
}

// 获取所有主题
export function getAllThemes(): Theme[] {
  return [defaultTheme, blueTheme, redTheme, blackTheme, yellowTheme]
}
