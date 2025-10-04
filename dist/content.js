var V=Object.defineProperty;var ee=(a,t,e)=>t in a?V(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var x=(a,t,e)=>(ee(a,typeof t!="symbol"?t+"":t,e),e),te=(a,t,e)=>{if(!t.has(a))throw TypeError("Cannot "+e)};var D=(a,t,e)=>{if(t.has(a))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(a):t.set(a,e)};var E=(a,t,e)=>(te(a,t,"access private method"),e);const z={name:"default",styles:' .wechat-article { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; line-height: 1.6; color: #333; max-width: 100%; margin: 0 auto; padding: 20px; } .wechat-article h1 { font-size: 24px; font-weight: bold; margin: 20px 0; color: #000; } .wechat-article h2 { font-size: 20px; font-weight: bold; margin: 18px 0; color: #000; } .wechat-article h3 { font-size: 18px; font-weight: bold; margin: 16px 0; color: #000; } .wechat-article p { margin: 15px 0; text-align: justify; } .wechat-article img { max-width: 100%; height: auto; display: block; margin: 15px auto; } .wechat-article blockquote { border-left: 4px solid #ddd; margin: 15px 0; padding: 10px 20px; background-color: #f9f9f9; } .wechat-article code { background-color: #f4f4f4; padding: 2px 4px; border-radius: 3px; font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace; } .wechat-article pre { background-color: #f4f4f4; padding: 15px; border-radius: 5px; overflow-x: auto; margin: 15px 0; } .wechat-article pre code { background-color: transparent; padding: 0; } .wechat-article table { width: 100%; border-collapse: collapse; margin: 15px 0; } .wechat-article th, .wechat-article td { border: 1px solid #ddd; padding: 8px; text-align: left; } .wechat-article th { background-color: #f2f2f2; } .wechat-article ul, .wechat-article ol { margin: 15px 0; padding-left: 30px; } .wechat-article li { margin: 5px 0; } '},ne={name:"blue",styles:`
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
  `},ie={name:"red",styles:`
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
  `},re=[z,ne,ie];async function se(){return re}async function oe(a){const t=document.createElement("div");t.innerHTML=a;const e=t.querySelectorAll("img");for(const n of Array.from(e)){const i=n.src;if(i.includes("notion.so")||i.includes("notionusercontent.com")||i.includes("file.notion.so"))try{const s=await fetch(i);if(!s.ok)throw new Error("Failed to download image");const r=await s.blob(),l=await new Promise((o,u)=>{const h=new FileReader;h.onload=()=>o(h.result),h.onerror=u,h.readAsDataURL(r)});n.src=l}catch(s){console.warn("Failed to process image:",s)}}return t.innerHTML}function Z(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let v=Z();function W(a){v=a}const Y=/[&<>"']/,le=new RegExp(Y.source,"g"),G=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,ae=new RegExp(G.source,"g"),ce={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Q=a=>ce[a];function w(a,t){if(t){if(Y.test(a))return a.replace(le,Q)}else if(G.test(a))return a.replace(ae,Q);return a}const he=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function pe(a){return a.replace(he,(t,e)=>(e=e.toLowerCase(),e==="colon"?":":e.charAt(0)==="#"?e.charAt(1)==="x"?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1)):""))}const ue=/(^|[^\[])\^/g;function b(a,t){a=typeof a=="string"?a:a.source,t=t||"";const e={replace:(n,i)=>(i=typeof i=="object"&&"source"in i?i.source:i,i=i.replace(ue,"$1"),a=a.replace(n,i),e),getRegex:()=>new RegExp(a,t)};return e}function U(a){try{a=encodeURI(a).replace(/%25/g,"%")}catch{return null}return a}const I={exec:()=>null};function X(a,t){const e=a.replace(/\|/g,(s,r,l)=>{let o=!1,u=r;for(;--u>=0&&l[u]==="\\";)o=!o;return o?"|":" |"}),n=e.split(/ \|/);let i=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(/\\\|/g,"|");return n}function A(a,t,e){const n=a.length;if(n===0)return"";let i=0;for(;i<n;){const s=a.charAt(n-i-1);if(s===t&&!e)i++;else if(s!==t&&e)i++;else break}return a.slice(0,n-i)}function de(a,t){if(a.indexOf(t[1])===-1)return-1;let e=0;for(let n=0;n<a.length;n++)if(a[n]==="\\")n++;else if(a[n]===t[0])e++;else if(a[n]===t[1]&&(e--,e<0))return n;return-1}function K(a,t,e,n){const i=t.href,s=t.title?w(t.title):null,r=a[1].replace(/\\([\[\]])/g,"$1");if(a[0].charAt(0)!=="!"){n.state.inLink=!0;const l={type:"link",raw:e,href:i,title:s,text:r,tokens:n.inlineTokens(r)};return n.state.inLink=!1,l}return{type:"image",raw:e,href:i,title:s,text:w(r)}}function ge(a,t){const e=a.match(/^(\s+)(?:```)/);if(e===null)return t;const n=e[1];return t.split(`
`).map(i=>{const s=i.match(/^\s+/);if(s===null)return i;const[r]=s;return r.length>=n.length?i.slice(n.length):i}).join(`
`)}class L{constructor(t){x(this,"options");x(this,"rules");x(this,"lexer");this.options=t||v}space(t){const e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){const e=this.rules.block.code.exec(t);if(e){const n=e[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?n:A(n,`
`)}}}fences(t){const e=this.rules.block.fences.exec(t);if(e){const n=e[0],i=ge(n,e[3]||"");return{type:"code",raw:n,lang:e[2]?e[2].trim().replace(this.rules.inline._escapes,"$1"):e[2],text:i}}}heading(t){const e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(/#$/.test(n)){const i=A(n,"#");(this.options.pedantic||!i||/ $/.test(i))&&(n=i.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){const e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:e[0]}}blockquote(t){const e=this.rules.block.blockquote.exec(t);if(e){const n=A(e[0].replace(/^ *>[ \t]?/gm,""),`
`),i=this.lexer.state.top;this.lexer.state.top=!0;const s=this.lexer.blockTokens(n);return this.lexer.state.top=i,{type:"blockquote",raw:e[0],tokens:s,text:n}}}list(t){let e=this.rules.block.list.exec(t);if(e){let n=e[1].trim();const i=n.length>1,s={type:"list",raw:"",ordered:i,start:i?+n.slice(0,-1):"",loose:!1,items:[]};n=i?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=i?n:"[*+-]");const r=new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);let l="",o="",u=!1;for(;t;){let h=!1;if(!(e=r.exec(t))||this.rules.block.hr.test(t))break;l=e[0],t=t.substring(l.length);let g=e[2].split(`
`,1)[0].replace(/^\t+/,M=>" ".repeat(3*M.length)),d=t.split(`
`,1)[0],f=0;this.options.pedantic?(f=2,o=g.trimStart()):(f=e[2].search(/[^ ]/),f=f>4?1:f,o=g.slice(f),f+=e[1].length);let y=!1;if(!g&&/^ *$/.test(d)&&(l+=d+`
`,t=t.substring(d.length+1),h=!0),!h){const M=new RegExp(`^ {0,${Math.min(3,f-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),F=new RegExp(`^ {0,${Math.min(3,f-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),O=new RegExp(`^ {0,${Math.min(3,f-1)}}(?:\`\`\`|~~~)`),H=new RegExp(`^ {0,${Math.min(3,f-1)}}#`);for(;t;){const B=t.split(`
`,1)[0];if(d=B,this.options.pedantic&&(d=d.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),O.test(d)||H.test(d)||M.test(d)||F.test(t))break;if(d.search(/[^ ]/)>=f||!d.trim())o+=`
`+d.slice(f);else{if(y||g.search(/[^ ]/)>=4||O.test(g)||H.test(g)||F.test(g))break;o+=`
`+d}!y&&!d.trim()&&(y=!0),l+=B+`
`,t=t.substring(B.length+1),g=d.slice(f)}}s.loose||(u?s.loose=!0:/\n *\n *$/.test(l)&&(u=!0));let k=null,_;this.options.gfm&&(k=/^\[[ xX]\] /.exec(o),k&&(_=k[0]!=="[ ] ",o=o.replace(/^\[[ xX]\] +/,""))),s.items.push({type:"list_item",raw:l,task:!!k,checked:_,loose:!1,text:o,tokens:[]}),s.raw+=l}s.items[s.items.length-1].raw=l.trimEnd(),s.items[s.items.length-1].text=o.trimEnd(),s.raw=s.raw.trimEnd();for(let h=0;h<s.items.length;h++)if(this.lexer.state.top=!1,s.items[h].tokens=this.lexer.blockTokens(s.items[h].text,[]),!s.loose){const g=s.items[h].tokens.filter(f=>f.type==="space"),d=g.length>0&&g.some(f=>/\n.*\n/.test(f.raw));s.loose=d}if(s.loose)for(let h=0;h<s.items.length;h++)s.items[h].loose=!0;return s}}html(t){const e=this.rules.block.html.exec(t);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(t){const e=this.rules.block.def.exec(t);if(e){const n=e[1].toLowerCase().replace(/\s+/g," "),i=e[2]?e[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",s=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline._escapes,"$1"):e[3];return{type:"def",tag:n,raw:e[0],href:i,title:s}}}table(t){const e=this.rules.block.table.exec(t);if(e){if(!/[:|]/.test(e[2]))return;const n={type:"table",raw:e[0],header:X(e[1]).map(i=>({text:i,tokens:[]})),align:e[2].replace(/^\||\| *$/g,"").split("|"),rows:e[3]&&e[3].trim()?e[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(n.header.length===n.align.length){let i=n.align.length,s,r,l,o;for(s=0;s<i;s++){const u=n.align[s];u&&(/^ *-+: *$/.test(u)?n.align[s]="right":/^ *:-+: *$/.test(u)?n.align[s]="center":/^ *:-+ *$/.test(u)?n.align[s]="left":n.align[s]=null)}for(i=n.rows.length,s=0;s<i;s++)n.rows[s]=X(n.rows[s],n.header.length).map(u=>({text:u,tokens:[]}));for(i=n.header.length,r=0;r<i;r++)n.header[r].tokens=this.lexer.inline(n.header[r].text);for(i=n.rows.length,r=0;r<i;r++)for(o=n.rows[r],l=0;l<o.length;l++)o[l].tokens=this.lexer.inline(o[l].text);return n}}}lheading(t){const e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){const e=this.rules.block.paragraph.exec(t);if(e){const n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(t){const e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){const e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:w(e[1])}}tag(t){const e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&/^<a /i.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){const e=this.rules.inline.link.exec(t);if(e){const n=e[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const r=A(n.slice(0,-1),"\\");if((n.length-r.length)%2===0)return}else{const r=de(e[2],"()");if(r>-1){const o=(e[0].indexOf("!")===0?5:4)+e[1].length+r;e[2]=e[2].substring(0,r),e[0]=e[0].substring(0,o).trim(),e[3]=""}}let i=e[2],s="";if(this.options.pedantic){const r=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);r&&(i=r[1],s=r[3])}else s=e[3]?e[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(n)?i=i.slice(1):i=i.slice(1,-1)),K(e,{href:i&&i.replace(this.rules.inline._escapes,"$1"),title:s&&s.replace(this.rules.inline._escapes,"$1")},e[0],this.lexer)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){let i=(n[2]||n[1]).replace(/\s+/g," ");if(i=e[i.toLowerCase()],!i){const s=n[0].charAt(0);return{type:"text",raw:s,text:s}}return K(n,i,n[0],this.lexer)}}emStrong(t,e,n=""){let i=this.rules.inline.emStrong.lDelim.exec(t);if(!i||i[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const r=[...i[0]].length-1;let l,o,u=r,h=0;const g=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(g.lastIndex=0,e=e.slice(-1*t.length+r);(i=g.exec(e))!=null;){if(l=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!l)continue;if(o=[...l].length,i[3]||i[4]){u+=o;continue}else if((i[5]||i[6])&&r%3&&!((r+o)%3)){h+=o;continue}if(u-=o,u>0)continue;o=Math.min(o,o+u+h);const d=[...i[0]][0].length,f=t.slice(0,r+i.index+d+o);if(Math.min(r,o)%2){const k=f.slice(1,-1);return{type:"em",raw:f,text:k,tokens:this.lexer.inlineTokens(k)}}const y=f.slice(2,-2);return{type:"strong",raw:f,text:y,tokens:this.lexer.inlineTokens(y)}}}}codespan(t){const e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(/\n/g," ");const i=/[^ ]/.test(n),s=/^ /.test(n)&&/ $/.test(n);return i&&s&&(n=n.substring(1,n.length-1)),n=w(n,!0),{type:"codespan",raw:e[0],text:n}}}br(t){const e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){const e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t){const e=this.rules.inline.autolink.exec(t);if(e){let n,i;return e[2]==="@"?(n=w(e[1]),i="mailto:"+n):(n=w(e[1]),i=n),{type:"link",raw:e[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}url(t){let e;if(e=this.rules.inline.url.exec(t)){let n,i;if(e[2]==="@")n=w(e[0]),i="mailto:"+n;else{let s;do s=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])[0];while(s!==e[0]);n=w(e[0]),e[1]==="www."?i="http://"+e[0]:i=e[0]}return{type:"link",raw:e[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(t){const e=this.rules.inline.text.exec(t);if(e){let n;return this.lexer.state.inRawBlock?n=e[0]:n=w(e[0]),{type:"text",raw:e[0],text:n}}}}const p={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:I,lheading:/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};p._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;p._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;p.def=b(p.def).replace("label",p._label).replace("title",p._title).getRegex();p.bullet=/(?:[*+-]|\d{1,9}[.)])/;p.listItemStart=b(/^( *)(bull) */).replace("bull",p.bullet).getRegex();p.list=b(p.list).replace(/bull/g,p.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+p.def.source+")").getRegex();p._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";p._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;p.html=b(p.html,"i").replace("comment",p._comment).replace("tag",p._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();p.lheading=b(p.lheading).replace(/bull/g,p.bullet).getRegex();p.paragraph=b(p._paragraph).replace("hr",p.hr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",p._tag).getRegex();p.blockquote=b(p.blockquote).replace("paragraph",p.paragraph).getRegex();p.normal={...p};p.gfm={...p.normal,table:"^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};p.gfm.table=b(p.gfm.table).replace("hr",p.hr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",p._tag).getRegex();p.gfm.paragraph=b(p._paragraph).replace("hr",p.hr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",p.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",p._tag).getRegex();p.pedantic={...p.normal,html:b(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",p._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:I,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:b(p.normal._paragraph).replace("hr",p.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",p.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const c={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:I,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,rDelimAst:/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:I,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^((?![*_])[\spunctuation])/};c._punctuation="\\p{P}$+<=>`^|~";c.punctuation=b(c.punctuation,"u").replace(/punctuation/g,c._punctuation).getRegex();c.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;c.anyPunctuation=/\\[punct]/g;c._escapes=/\\([punct])/g;c._comment=b(p._comment).replace("(?:-->|$)","-->").getRegex();c.emStrong.lDelim=b(c.emStrong.lDelim,"u").replace(/punct/g,c._punctuation).getRegex();c.emStrong.rDelimAst=b(c.emStrong.rDelimAst,"gu").replace(/punct/g,c._punctuation).getRegex();c.emStrong.rDelimUnd=b(c.emStrong.rDelimUnd,"gu").replace(/punct/g,c._punctuation).getRegex();c.anyPunctuation=b(c.anyPunctuation,"gu").replace(/punct/g,c._punctuation).getRegex();c._escapes=b(c._escapes,"gu").replace(/punct/g,c._punctuation).getRegex();c._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;c._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;c.autolink=b(c.autolink).replace("scheme",c._scheme).replace("email",c._email).getRegex();c._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;c.tag=b(c.tag).replace("comment",c._comment).replace("attribute",c._attribute).getRegex();c._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;c._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;c._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;c.link=b(c.link).replace("label",c._label).replace("href",c._href).replace("title",c._title).getRegex();c.reflink=b(c.reflink).replace("label",c._label).replace("ref",p._label).getRegex();c.nolink=b(c.nolink).replace("ref",p._label).getRegex();c.reflinkSearch=b(c.reflinkSearch,"g").replace("reflink",c.reflink).replace("nolink",c.nolink).getRegex();c.normal={...c};c.pedantic={...c.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:b(/^!?\[(label)\]\((.*?)\)/).replace("label",c._label).getRegex(),reflink:b(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",c._label).getRegex()};c.gfm={...c.normal,escape:b(c.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};c.gfm.url=b(c.gfm.url,"i").replace("email",c.gfm._extended_email).getRegex();c.breaks={...c.gfm,br:b(c.br).replace("{2,}","*").getRegex(),text:b(c.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class T{constructor(t){x(this,"tokens");x(this,"options");x(this,"state");x(this,"tokenizer");x(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=t||v,this.options.tokenizer=this.options.tokenizer||new L,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const e={block:p.normal,inline:c.normal};this.options.pedantic?(e.block=p.pedantic,e.inline=c.pedantic):this.options.gfm&&(e.block=p.gfm,this.options.breaks?e.inline=c.breaks:e.inline=c.gfm),this.tokenizer.rules=e}static get rules(){return{block:p,inline:c}}static lex(t,e){return new T(e).lex(t)}static lexInline(t,e){return new T(e).inlineTokens(t)}lex(t){t=t.replace(/\r\n|\r/g,`
`),this.blockTokens(t,this.tokens);let e;for(;e=this.inlineQueue.shift();)this.inlineTokens(e.src,e.tokens);return this.tokens}blockTokens(t,e=[]){this.options.pedantic?t=t.replace(/\t/g,"    ").replace(/^ +$/gm,""):t=t.replace(/^( *)(\t+)/gm,(l,o,u)=>o+"    ".repeat(u.length));let n,i,s,r;for(;t;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(l=>(n=l.call({lexer:this},t,e))?(t=t.substring(n.raw.length),e.push(n),!0):!1))){if(n=this.tokenizer.space(t)){t=t.substring(n.raw.length),n.raw.length===1&&e.length>0?e[e.length-1].raw+=`
`:e.push(n);continue}if(n=this.tokenizer.code(t)){t=t.substring(n.raw.length),i=e[e.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):e.push(n);continue}if(n=this.tokenizer.fences(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.heading(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.hr(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.blockquote(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.list(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.html(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.def(t)){t=t.substring(n.raw.length),i=e[e.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.lheading(t)){t=t.substring(n.raw.length),e.push(n);continue}if(s=t,this.options.extensions&&this.options.extensions.startBlock){let l=1/0;const o=t.slice(1);let u;this.options.extensions.startBlock.forEach(h=>{u=h.call({lexer:this},o),typeof u=="number"&&u>=0&&(l=Math.min(l,u))}),l<1/0&&l>=0&&(s=t.substring(0,l+1))}if(this.state.top&&(n=this.tokenizer.paragraph(s))){i=e[e.length-1],r&&i.type==="paragraph"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):e.push(n),r=s.length!==t.length,t=t.substring(n.raw.length);continue}if(n=this.tokenizer.text(t)){t=t.substring(n.raw.length),i=e[e.length-1],i&&i.type==="text"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):e.push(n);continue}if(t){const l="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,e}inline(t,e=[]){return this.inlineQueue.push({src:t,tokens:e}),e}inlineTokens(t,e=[]){let n,i,s,r=t,l,o,u;if(this.tokens.links){const h=Object.keys(this.tokens.links);if(h.length>0)for(;(l=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)h.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(l=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(l=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,l.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;t;)if(o||(u=""),o=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(h=>(n=h.call({lexer:this},t,e))?(t=t.substring(n.raw.length),e.push(n),!0):!1))){if(n=this.tokenizer.escape(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.tag(t)){t=t.substring(n.raw.length),i=e[e.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):e.push(n);continue}if(n=this.tokenizer.link(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(n.raw.length),i=e[e.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):e.push(n);continue}if(n=this.tokenizer.emStrong(t,r,u)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.codespan(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.br(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.del(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.autolink(t)){t=t.substring(n.raw.length),e.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(t))){t=t.substring(n.raw.length),e.push(n);continue}if(s=t,this.options.extensions&&this.options.extensions.startInline){let h=1/0;const g=t.slice(1);let d;this.options.extensions.startInline.forEach(f=>{d=f.call({lexer:this},g),typeof d=="number"&&d>=0&&(h=Math.min(h,d))}),h<1/0&&h>=0&&(s=t.substring(0,h+1))}if(n=this.tokenizer.inlineText(s)){t=t.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(u=n.raw.slice(-1)),o=!0,i=e[e.length-1],i&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):e.push(n);continue}if(t){const h="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(h);break}else throw new Error(h)}}return e}}class q{constructor(t){x(this,"options");this.options=t||v}code(t,e,n){var s;const i=(s=(e||"").match(/^\S*/))==null?void 0:s[0];return t=t.replace(/\n$/,"")+`
`,i?'<pre><code class="language-'+w(i)+'">'+(n?t:w(t,!0))+`</code></pre>
`:"<pre><code>"+(n?t:w(t,!0))+`</code></pre>
`}blockquote(t){return`<blockquote>
${t}</blockquote>
`}html(t,e){return t}heading(t,e,n){return`<h${e}>${t}</h${e}>
`}hr(){return`<hr>
`}list(t,e,n){const i=e?"ol":"ul",s=e&&n!==1?' start="'+n+'"':"";return"<"+i+s+`>
`+t+"</"+i+`>
`}listitem(t,e,n){return`<li>${t}</li>
`}checkbox(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(t){return`<p>${t}</p>
`}table(t,e){return e&&(e=`<tbody>${e}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+e+`</table>
`}tablerow(t){return`<tr>
${t}</tr>
`}tablecell(t,e){const n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong(t){return`<strong>${t}</strong>`}em(t){return`<em>${t}</em>`}codespan(t){return`<code>${t}</code>`}br(){return"<br>"}del(t){return`<del>${t}</del>`}link(t,e,n){const i=U(t);if(i===null)return n;t=i;let s='<a href="'+t+'"';return e&&(s+=' title="'+e+'"'),s+=">"+n+"</a>",s}image(t,e,n){const i=U(t);if(i===null)return n;t=i;let s=`<img src="${t}" alt="${n}"`;return e&&(s+=` title="${e}"`),s+=">",s}text(t){return t}}class j{strong(t){return t}em(t){return t}codespan(t){return t}del(t){return t}html(t){return t}text(t){return t}link(t,e,n){return""+n}image(t,e,n){return""+n}br(){return""}}class ${constructor(t){x(this,"options");x(this,"renderer");x(this,"textRenderer");this.options=t||v,this.options.renderer=this.options.renderer||new q,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new j}static parse(t,e){return new $(e).parse(t)}static parseInline(t,e){return new $(e).parseInline(t)}parse(t,e=!0){let n="";for(let i=0;i<t.length;i++){const s=t[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const r=s,l=this.options.extensions.renderers[r.type].call({parser:this},r);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(r.type)){n+=l||"";continue}}switch(s.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{const r=s;n+=this.renderer.heading(this.parseInline(r.tokens),r.depth,pe(this.parseInline(r.tokens,this.textRenderer)));continue}case"code":{const r=s;n+=this.renderer.code(r.text,r.lang,!!r.escaped);continue}case"table":{const r=s;let l="",o="";for(let h=0;h<r.header.length;h++)o+=this.renderer.tablecell(this.parseInline(r.header[h].tokens),{header:!0,align:r.align[h]});l+=this.renderer.tablerow(o);let u="";for(let h=0;h<r.rows.length;h++){const g=r.rows[h];o="";for(let d=0;d<g.length;d++)o+=this.renderer.tablecell(this.parseInline(g[d].tokens),{header:!1,align:r.align[d]});u+=this.renderer.tablerow(o)}n+=this.renderer.table(l,u);continue}case"blockquote":{const r=s,l=this.parse(r.tokens);n+=this.renderer.blockquote(l);continue}case"list":{const r=s,l=r.ordered,o=r.start,u=r.loose;let h="";for(let g=0;g<r.items.length;g++){const d=r.items[g],f=d.checked,y=d.task;let k="";if(d.task){const _=this.renderer.checkbox(!!f);u?d.tokens.length>0&&d.tokens[0].type==="paragraph"?(d.tokens[0].text=_+" "+d.tokens[0].text,d.tokens[0].tokens&&d.tokens[0].tokens.length>0&&d.tokens[0].tokens[0].type==="text"&&(d.tokens[0].tokens[0].text=_+" "+d.tokens[0].tokens[0].text)):d.tokens.unshift({type:"text",text:_+" "}):k+=_+" "}k+=this.parse(d.tokens,u),h+=this.renderer.listitem(k,y,!!f)}n+=this.renderer.list(h,l,o);continue}case"html":{const r=s;n+=this.renderer.html(r.text,r.block);continue}case"paragraph":{const r=s;n+=this.renderer.paragraph(this.parseInline(r.tokens));continue}case"text":{let r=s,l=r.tokens?this.parseInline(r.tokens):r.text;for(;i+1<t.length&&t[i+1].type==="text";)r=t[++i],l+=`
`+(r.tokens?this.parseInline(r.tokens):r.text);n+=e?this.renderer.paragraph(l):l;continue}default:{const r='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(r),"";throw new Error(r)}}}return n}parseInline(t,e){e=e||this.renderer;let n="";for(let i=0;i<t.length;i++){const s=t[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const r=this.options.extensions.renderers[s.type].call({parser:this},s);if(r!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){n+=r||"";continue}}switch(s.type){case"escape":{const r=s;n+=e.text(r.text);break}case"html":{const r=s;n+=e.html(r.text);break}case"link":{const r=s;n+=e.link(r.href,r.title,this.parseInline(r.tokens,e));break}case"image":{const r=s;n+=e.image(r.href,r.title,r.text);break}case"strong":{const r=s;n+=e.strong(this.parseInline(r.tokens,e));break}case"em":{const r=s;n+=e.em(this.parseInline(r.tokens,e));break}case"codespan":{const r=s;n+=e.codespan(r.text);break}case"br":{n+=e.br();break}case"del":{const r=s;n+=e.del(this.parseInline(r.tokens,e));break}case"text":{const r=s;n+=e.text(r.text);break}default:{const r='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(r),"";throw new Error(r)}}}return n}}class C{constructor(t){x(this,"options");this.options=t||v}preprocess(t){return t}postprocess(t){return t}}x(C,"passThroughHooks",new Set(["preprocess","postprocess"]));var R,P,N,J;class fe{constructor(...t){D(this,R);D(this,N);x(this,"defaults",Z());x(this,"options",this.setOptions);x(this,"parse",E(this,R,P).call(this,T.lex,$.parse));x(this,"parseInline",E(this,R,P).call(this,T.lexInline,$.parseInline));x(this,"Parser",$);x(this,"Renderer",q);x(this,"TextRenderer",j);x(this,"Lexer",T);x(this,"Tokenizer",L);x(this,"Hooks",C);this.use(...t)}walkTokens(t,e){var i,s;let n=[];for(const r of t)switch(n=n.concat(e.call(this,r)),r.type){case"table":{const l=r;for(const o of l.header)n=n.concat(this.walkTokens(o.tokens,e));for(const o of l.rows)for(const u of o)n=n.concat(this.walkTokens(u.tokens,e));break}case"list":{const l=r;n=n.concat(this.walkTokens(l.items,e));break}default:{const l=r;(s=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&s[l.type]?this.defaults.extensions.childTokens[l.type].forEach(o=>{n=n.concat(this.walkTokens(l[o],e))}):l.tokens&&(n=n.concat(this.walkTokens(l.tokens,e)))}}return n}use(...t){const e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(n=>{const i={...n};if(i.async=this.defaults.async||i.async||!1,n.extensions&&(n.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const r=e.renderers[s.name];r?e.renderers[s.name]=function(...l){let o=s.renderer.apply(this,l);return o===!1&&(o=r.apply(this,l)),o}:e.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const r=e[s.level];r?r.unshift(s.tokenizer):e[s.level]=[s.tokenizer],s.start&&(s.level==="block"?e.startBlock?e.startBlock.push(s.start):e.startBlock=[s.start]:s.level==="inline"&&(e.startInline?e.startInline.push(s.start):e.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(e.childTokens[s.name]=s.childTokens)}),i.extensions=e),n.renderer){const s=this.defaults.renderer||new q(this.defaults);for(const r in n.renderer){const l=n.renderer[r],o=r,u=s[o];s[o]=(...h)=>{let g=l.apply(s,h);return g===!1&&(g=u.apply(s,h)),g||""}}i.renderer=s}if(n.tokenizer){const s=this.defaults.tokenizer||new L(this.defaults);for(const r in n.tokenizer){const l=n.tokenizer[r],o=r,u=s[o];s[o]=(...h)=>{let g=l.apply(s,h);return g===!1&&(g=u.apply(s,h)),g}}i.tokenizer=s}if(n.hooks){const s=this.defaults.hooks||new C;for(const r in n.hooks){const l=n.hooks[r],o=r,u=s[o];C.passThroughHooks.has(r)?s[o]=h=>{if(this.defaults.async)return Promise.resolve(l.call(s,h)).then(d=>u.call(s,d));const g=l.call(s,h);return u.call(s,g)}:s[o]=(...h)=>{let g=l.apply(s,h);return g===!1&&(g=u.apply(s,h)),g}}i.hooks=s}if(n.walkTokens){const s=this.defaults.walkTokens,r=n.walkTokens;i.walkTokens=function(l){let o=[];return o.push(r.call(this,l)),s&&(o=o.concat(s.call(this,l))),o}}this.defaults={...this.defaults,...i}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return T.lex(t,e??this.defaults)}parser(t,e){return $.parse(t,e??this.defaults)}}R=new WeakSet,P=function(t,e){return(n,i)=>{const s={...i},r={...this.defaults,...s};this.defaults.async===!0&&s.async===!1&&(r.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),r.async=!0);const l=E(this,N,J).call(this,!!r.silent,!!r.async);if(typeof n>"u"||n===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(r.hooks&&(r.hooks.options=r),r.async)return Promise.resolve(r.hooks?r.hooks.preprocess(n):n).then(o=>t(o,r)).then(o=>r.walkTokens?Promise.all(this.walkTokens(o,r.walkTokens)).then(()=>o):o).then(o=>e(o,r)).then(o=>r.hooks?r.hooks.postprocess(o):o).catch(l);try{r.hooks&&(n=r.hooks.preprocess(n));const o=t(n,r);r.walkTokens&&this.walkTokens(o,r.walkTokens);let u=e(o,r);return r.hooks&&(u=r.hooks.postprocess(u)),u}catch(o){return l(o)}}},N=new WeakSet,J=function(t,e){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t){const i="<p>An error occurred:</p><pre>"+w(n.message+"",!0)+"</pre>";return e?Promise.resolve(i):i}if(e)return Promise.reject(n);throw n}};const S=new fe;function m(a,t){return S.parse(a,t)}m.options=m.setOptions=function(a){return S.setOptions(a),m.defaults=S.defaults,W(m.defaults),m};m.getDefaults=Z;m.defaults=v;m.use=function(...a){return S.use(...a),m.defaults=S.defaults,W(m.defaults),m};m.walkTokens=function(a,t){return S.walkTokens(a,t)};m.parseInline=S.parseInline;m.Parser=$;m.parser=$.parse;m.Renderer=q;m.TextRenderer=j;m.Lexer=T;m.lexer=T.lex;m.Tokenizer=L;m.Hooks=C;m.parse=m;m.options;m.setOptions;m.use;m.walkTokens;m.parseInline;$.parse;T.lex;function be(a,t){return{html:m(a),images:t}}function me(a,t=z){return`<div id="nice">${a}</div><style>${t.styles}</style>`}class xe{constructor(){x(this,"sidebar",null);x(this,"button",null);x(this,"availableThemes",[z]);this.init()}async init(){this.createFloatingButton(),this.attachButtonEvent(),this.loadThemes().then(()=>{console.log("Themes loaded:",this.availableThemes.map(t=>t.name))})}async loadThemes(){try{this.availableThemes=await se()}catch(t){console.warn("Failed to load themes:",t),this.availableThemes=[z]}}attachButtonEvent(){var t;(t=this.button)==null||t.addEventListener("click",()=>this.openSidebar())}openSidebar(){if(this.sidebar){this.closeSidebar();return}this.createSidebar(),document.body.appendChild(this.sidebar),setTimeout(()=>{this.sidebar&&(this.sidebar.style.transform="translateX(0)")},10),this.attachSidebarEvents()}createFloatingButton(){this.button=document.createElement("div"),this.button.id="notion2wechat-button",this.button.innerHTML=`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,this.button.style.cssText=`
      position: fixed;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
      width: 48px;
      height: 48px;
      background: #2563eb;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 10000;
      transition: all 0.3s ease;
    `,this.button.addEventListener("mouseenter",()=>{this.button.style.transform="translateY(-50%) scale(1.1)"}),this.button.addEventListener("mouseleave",()=>{this.button.style.transform="translateY(-50%) scale(1)"}),document.body.appendChild(this.button)}createSidebar(){this.sidebar=document.createElement("div"),this.sidebar.className="notion2wechat-sidebar";const t=this.availableThemes.length>1?this.availableThemes:[z];this.sidebar.innerHTML=`
      <div class="sidebar-header">
        <button class="close-btn">&times;</button>
        <div class="controls">
          <select id="theme-select">
            ${t.map(n=>`<option value="${n.name}">${this.getThemeDisplayName(n.name)}</option>`).join("")}
          </select>
          <button id="generate-btn" class="primary-btn">生成</button>
          <button id="publish-btn" class="secondary-btn" disabled>复制</button>
        </div>
      </div>
      <div class="preview-area">
        <div id="preview-content" class="preview-content"></div>
      </div>
    `,this.sidebar.style.cssText=`
      position: fixed;
      top: 0;
      right: 0;
      width: 400px;
      height: 100vh;
      background: white;
      box-shadow: -4px 0 12px rgba(0,0,0,0.15);
      z-index: 10001;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    `;const e=document.createElement("style");e.textContent=`
      .notion2wechat-sidebar * {
        box-sizing: border-box;
      }
      .sidebar-header {
        padding: 12px 16px;
        border-bottom: 1px solid #e5e7eb;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
      }
      .close-btn {
        background: none;
        border: none;
        font-size: 20px;
        cursor: pointer;
        color: #6b7280;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .close-btn:hover {
        color: #374151;
      }
      .controls {
        display: flex;
        gap: 8px;
        align-items: center;
        flex: 1;
      }
      .controls select {
        padding: 6px 8px;
        border: 1px solid #d1d5db;
        border-radius: 4px;
        font-size: 12px;
        min-width: 80px;
      }
      .primary-btn, .secondary-btn {
        padding: 6px 12px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-weight: 500;
        font-size: 12px;
        white-space: nowrap;
      }
      .primary-btn {
        background: #2563eb;
        color: white;
      }
      .primary-btn:hover {
        background: #1d4ed8;
      }
      .primary-btn:disabled {
        background: #9ca3af;
        cursor: not-allowed;
      }
      .secondary-btn {
        background: #f3f4f6;
        color: #374151;
      }
      .secondary-btn:hover {
        background: #e5e7eb;
      }
      .secondary-btn:disabled {
        background: #f9fafb;
        color: #9ca3af;
        cursor: not-allowed;
      }
      .preview-area {
        height: calc(100vh - 60px);
        overflow-y: auto;
        padding: 16px;
      }
      .preview-content {
        min-height: 100%;
        background: #f9fafb;
        border-radius: 8px;
        padding: 16px;
      }
    `,document.head.appendChild(e)}attachSidebarEvents(){var s,r,l,o;const t=(s=this.sidebar)==null?void 0:s.querySelector(".close-btn"),e=(r=this.sidebar)==null?void 0:r.querySelector("#generate-btn"),n=(l=this.sidebar)==null?void 0:l.querySelector("#publish-btn"),i=(o=this.sidebar)==null?void 0:o.querySelector("#theme-select");t==null||t.addEventListener("click",()=>this.closeSidebar()),e==null||e.addEventListener("click",()=>this.generateContent()),n==null||n.addEventListener("click",()=>this.copyContent()),i&&i.addEventListener("change",()=>this.updatePreviewTheme())}closeSidebar(){this.sidebar&&(this.sidebar.style.transform="translateX(100%)",setTimeout(()=>{this.sidebar&&(this.sidebar.remove(),this.sidebar=null)},300))}async generateContent(){var n,i;const t=this.extractNotionContent();if(!t){alert("无法获取Notion页面内容");return}const e=(n=this.sidebar)==null?void 0:n.querySelector("#generate-btn");e&&(e.textContent="处理中...",e.disabled=!0);try{const s=be(t.content,[]);this.showPreview(s.html);const r=(i=this.sidebar)==null?void 0:i.querySelector("#publish-btn");r&&(r.disabled=!1)}catch(s){console.error("Content generation failed:",s),alert("内容生成失败，请重试")}finally{e&&(e.textContent="生成",e.disabled=!1)}}extractNotionContent(){try{const t=document.querySelector('[placeholder="Untitled"]'),e=(t==null?void 0:t.innerText)||"无标题",n=document.querySelector(".notion-page-content");if(!n)return null;const i=this.extractMarkdownFromElement(n);return{title:e,content:i,images:[]}}catch(t){return console.error("Error extracting Notion content:",t),null}}extractMarkdownFromElement(t){let e="";function n(s){var o;if(s.nodeType===Node.TEXT_NODE){e+=s.textContent||"";return}if(s.nodeType!==Node.ELEMENT_NODE)return;const r=s;switch(r.tagName.toLowerCase()){case"h1":e+=`
# ${r.textContent||""}

`;break;case"h2":e+=`
## ${r.textContent||""}

`;break;case"h3":e+=`
### ${r.textContent||""}

`;break;case"p":const u=i(r);e+=`${u}

`;break;case"ul":e+=`
`,Array.from(r.children).forEach(y=>{e+=`- ${i(y)}
`}),e+=`
`;break;case"ol":e+=`
`,Array.from(r.children).forEach((y,k)=>{e+=`${k+1}. ${i(y)}
`}),e+=`
`;break;case"blockquote":e+=`> ${i(r)}

`;break;case"strong":case"b":e+=`**${r.textContent||""}**`;break;case"em":case"i":e+=`*${r.textContent||""}*`;break;case"code":((o=r.parentElement)==null?void 0:o.tagName.toLowerCase())==="pre"?e+=r.textContent||"":e+=`\`${r.textContent||""}\``;break;case"pre":e+=`\`\`\`
${r.textContent||""}
\`\`\`

`;break;case"a":const h=r.getAttribute("href")||"",g=r.textContent||"";e+=`[${g}](${h})`;break;case"img":const d=r.getAttribute("src")||"",f=r.getAttribute("alt")||"";e+=`![${f}](${d})`;break;case"hr":e+=`
---

`;break;case"br":e+=`
`;break;default:Array.from(r.childNodes).forEach(n)}}function i(s){let r="";return Array.from(s.childNodes).forEach(l=>{if(l.nodeType===Node.TEXT_NODE)r+=l.textContent||"";else if(l.nodeType===Node.ELEMENT_NODE){const o=l;switch(o.tagName.toLowerCase()){case"strong":case"b":r+=`**${o.textContent||""}**`;break;case"em":case"i":r+=`*${o.textContent||""}*`;break;case"code":r+=`\`${o.textContent||""}\``;break;case"a":const h=o.getAttribute("href")||"",g=o.textContent||"";r+=`[${g}](${h})`;break;default:Array.from(o.childNodes).forEach(n)}}}),r}return Array.from(t.childNodes).forEach(n),e.trim()}showPreview(t){var n;const e=(n=this.sidebar)==null?void 0:n.querySelector("#preview-content");e&&(e.innerHTML=`<div id="nice">${t}</div>`,this.updatePreviewTheme())}getCurrentTheme(){var n;const t=(n=this.sidebar)==null?void 0:n.querySelector("#theme-select");if(!t)return null;const e=t.value;return this.availableThemes.find(i=>i.name===e)||null}getThemeDisplayName(t){return{default:"默认主题",blue:"蓝色主题",red:"红色主题"}[t]||t}updatePreviewTheme(){var s;const t=(s=this.sidebar)==null?void 0:s.querySelector("#preview-content");if(!t)return;const e=this.getCurrentTheme()||z,n=t.querySelector("#preview-theme-style");n&&n.remove();const i=document.createElement("style");i.id="preview-theme-style",i.textContent=e.styles,t.appendChild(i)}async copyContent(){const t=document.getElementById("preview-content");if(!t)return;const e=t.innerHTML,n=document.getElementById("copy-btn");n&&(n.textContent="处理图片中...",n.disabled=!0);try{const i=await oe(e),s=this.getCurrentTheme()||z,r=me(i,s);await navigator.clipboard.write([new ClipboardItem({"text/html":new Blob([r],{type:"text/html"}),"text/plain":new Blob([t.textContent||""],{type:"text/plain"})})]),alert("已复制到剪贴板，可以直接粘贴到公众号编辑器")}catch(i){console.error("复制失败:",i),alert("复制失败，请重试")}finally{n&&(n.textContent="复制",n.disabled=!1)}}}new xe;
