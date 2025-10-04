import type { Theme } from '@/types'

export const defaultTheme: Theme = {
  name: 'default',
  styles: ` .wechat-article { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; line-height: 1.6; color: #333; max-width: 100%; margin: 0 auto; padding: 20px; } .wechat-article h1 { font-size: 24px; font-weight: bold; margin: 20px 0; color: #000; } .wechat-article h2 { font-size: 20px; font-weight: bold; margin: 18px 0; color: #000; } .wechat-article h3 { font-size: 18px; font-weight: bold; margin: 16px 0; color: #000; } .wechat-article p { margin: 15px 0; text-align: justify; } .wechat-article img { max-width: 100%; height: auto; display: block; margin: 15px auto; } .wechat-article blockquote { border-left: 4px solid #ddd; margin: 15px 0; padding: 10px 20px; background-color: #f9f9f9; } .wechat-article code { background-color: #f4f4f4; padding: 2px 4px; border-radius: 3px; font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace; } .wechat-article pre { background-color: #f4f4f4; padding: 15px; border-radius: 5px; overflow-x: auto; margin: 15px 0; } .wechat-article pre code { background-color: transparent; padding: 0; } .wechat-article table { width: 100%; border-collapse: collapse; margin: 15px 0; } .wechat-article th, .wechat-article td { border: 1px solid #ddd; padding: 8px; text-align: left; } .wechat-article th { background-color: #f2f2f2; } .wechat-article ul, .wechat-article ol { margin: 15px 0; padding-left: 30px; } .wechat-article li { margin: 5px 0; } `,
}

// 蓝色主题
export const blueTheme: Theme = {
  name: 'blue',
  styles: `
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
  `
}

// 红色主题
export const redTheme: Theme = {
  name: 'red',
  styles: `
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
}

// 获取所有主题
export const themes: Theme[] = [defaultTheme, blueTheme, redTheme]

// 获取所有主题（异步兼容）
export async function getAllThemes(): Promise<Theme[]> {
  return themes
}
