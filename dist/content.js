var ee=Object.defineProperty;var te=(a,e,t)=>e in a?ee(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var x=(a,e,t)=>(te(a,typeof e!="symbol"?e+"":e,t),t),ne=(a,e,t)=>{if(!e.has(a))throw TypeError("Cannot "+t)};var D=(a,e,t)=>{if(e.has(a))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(a):e.set(a,t)};var I=(a,e,t)=>(ne(a,e,"access private method"),t);const z={name:"default",styles:' .wechat-article { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; line-height: 1.6; color: #333; max-width: 100%; margin: 0 auto; padding: 20px; } .wechat-article h1 { font-size: 24px; font-weight: bold; margin: 20px 0; color: #000; } .wechat-article h2 { font-size: 20px; font-weight: bold; margin: 18px 0; color: #000; } .wechat-article h3 { font-size: 18px; font-weight: bold; margin: 16px 0; color: #000; } .wechat-article p { margin: 15px 0; text-align: justify; } .wechat-article img { max-width: 100%; height: auto; display: block; margin: 15px auto; } .wechat-article blockquote { border-left: 4px solid #ddd; margin: 15px 0; padding: 10px 20px; background-color: #f9f9f9; } .wechat-article code { background-color: #f4f4f4; padding: 2px 4px; border-radius: 3px; font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace; } .wechat-article pre { background-color: #f4f4f4; padding: 15px; border-radius: 5px; overflow-x: auto; margin: 15px 0; } .wechat-article pre code { background-color: transparent; padding: 0; } .wechat-article table { width: 100%; border-collapse: collapse; margin: 15px 0; } .wechat-article th, .wechat-article td { border: 1px solid #ddd; padding: 8px; text-align: left; } .wechat-article th { background-color: #f2f2f2; } .wechat-article ul, .wechat-article ol { margin: 15px 0; padding-left: 30px; } .wechat-article li { margin: 5px 0; } '},ie={name:"blue",styles:`
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
  `},re={name:"red",styles:`
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
  `},se=[z,ie,re];async function oe(){return se}async function le(a){const e=document.createElement("div");e.innerHTML=a;const t=e.querySelectorAll("img");for(const n of Array.from(t)){const i=n.src;if(i.includes("notion.so")||i.includes("notionusercontent.com")||i.includes("file.notion.so"))try{const r=await fetch(i);if(!r.ok)throw new Error("Failed to download image");const s=await r.blob(),o=await new Promise((l,u)=>{const p=new FileReader;p.onload=()=>l(p.result),p.onerror=u,p.readAsDataURL(s)});n.src=o}catch(r){console.warn("Failed to process image:",r)}}return e.innerHTML}function F(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let v=F();function Y(a){v=a}const G=/[&<>"']/,ae=new RegExp(G.source,"g"),J=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,ce=new RegExp(J.source,"g"),pe={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},U=a=>pe[a];function k(a,e){if(e){if(G.test(a))return a.replace(ae,U)}else if(J.test(a))return a.replace(ce,U);return a}const he=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function ue(a){return a.replace(he,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const de=/(^|[^\[])\^/g;function b(a,e){a=typeof a=="string"?a:a.source,e=e||"";const t={replace:(n,i)=>(i=typeof i=="object"&&"source"in i?i.source:i,i=i.replace(de,"$1"),a=a.replace(n,i),t),getRegex:()=>new RegExp(a,e)};return t}function X(a){try{a=encodeURI(a).replace(/%25/g,"%")}catch{return null}return a}const E={exec:()=>null};function K(a,e){const t=a.replace(/\|/g,(r,s,o)=>{let l=!1,u=s;for(;--u>=0&&o[u]==="\\";)l=!l;return l?"|":" |"}),n=t.split(/ \|/);let i=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(/\\\|/g,"|");return n}function q(a,e,t){const n=a.length;if(n===0)return"";let i=0;for(;i<n;){const r=a.charAt(n-i-1);if(r===e&&!t)i++;else if(r!==e&&t)i++;else break}return a.slice(0,n-i)}function fe(a,e){if(a.indexOf(e[1])===-1)return-1;let t=0;for(let n=0;n<a.length;n++)if(a[n]==="\\")n++;else if(a[n]===e[0])t++;else if(a[n]===e[1]&&(t--,t<0))return n;return-1}function W(a,e,t,n){const i=e.href,r=e.title?k(e.title):null,s=a[1].replace(/\\([\[\]])/g,"$1");if(a[0].charAt(0)!=="!"){n.state.inLink=!0;const o={type:"link",raw:t,href:i,title:r,text:s,tokens:n.inlineTokens(s)};return n.state.inLink=!1,o}return{type:"image",raw:t,href:i,title:r,text:k(s)}}function ge(a,e){const t=a.match(/^(\s+)(?:```)/);if(t===null)return e;const n=t[1];return e.split(`
`).map(i=>{const r=i.match(/^\s+/);if(r===null)return i;const[s]=r;return s.length>=n.length?i.slice(n.length):i}).join(`
`)}class L{constructor(e){x(this,"options");x(this,"rules");x(this,"lexer");this.options=e||v}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:q(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],i=ge(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:i}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){const i=q(n,"#");(this.options.pedantic||!i||/ $/.test(i))&&(n=i.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const n=q(t[0].replace(/^ *>[ \t]?/gm,""),`
`),i=this.lexer.state.top;this.lexer.state.top=!0;const r=this.lexer.blockTokens(n);return this.lexer.state.top=i,{type:"blockquote",raw:t[0],tokens:r,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const i=n.length>1,r={type:"list",raw:"",ordered:i,start:i?+n.slice(0,-1):"",loose:!1,items:[]};n=i?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=i?n:"[*+-]");const s=new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);let o="",l="",u=!1;for(;e;){let p=!1;if(!(t=s.exec(e))||this.rules.block.hr.test(e))break;o=t[0],e=e.substring(o.length);let f=t[2].split(`
`,1)[0].replace(/^\t+/,P=>" ".repeat(3*P.length)),d=e.split(`
`,1)[0],m=0;this.options.pedantic?(m=2,l=f.trimStart()):(m=t[2].search(/[^ ]/),m=m>4?1:m,l=f.slice(m),m+=t[1].length);let T=!1;if(!f&&/^ *$/.test(d)&&(o+=d+`
`,e=e.substring(d.length+1),p=!0),!p){const P=new RegExp(`^ {0,${Math.min(3,m-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),H=new RegExp(`^ {0,${Math.min(3,m-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),O=new RegExp(`^ {0,${Math.min(3,m-1)}}(?:\`\`\`|~~~)`),Q=new RegExp(`^ {0,${Math.min(3,m-1)}}#`);for(;e;){const Z=e.split(`
`,1)[0];if(d=Z,this.options.pedantic&&(d=d.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),O.test(d)||Q.test(d)||P.test(d)||H.test(e))break;if(d.search(/[^ ]/)>=m||!d.trim())l+=`
`+d.slice(m);else{if(T||f.search(/[^ ]/)>=4||O.test(f)||Q.test(f)||H.test(f))break;l+=`
`+d}!T&&!d.trim()&&(T=!0),o+=Z+`
`,e=e.substring(Z.length+1),f=d.slice(m)}}r.loose||(u?r.loose=!0:/\n *\n *$/.test(o)&&(u=!0));let w=null,_;this.options.gfm&&(w=/^\[[ xX]\] /.exec(l),w&&(_=w[0]!=="[ ] ",l=l.replace(/^\[[ xX]\] +/,""))),r.items.push({type:"list_item",raw:o,task:!!w,checked:_,loose:!1,text:l,tokens:[]}),r.raw+=o}r.items[r.items.length-1].raw=o.trimEnd(),r.items[r.items.length-1].text=l.trimEnd(),r.raw=r.raw.trimEnd();for(let p=0;p<r.items.length;p++)if(this.lexer.state.top=!1,r.items[p].tokens=this.lexer.blockTokens(r.items[p].text,[]),!r.loose){const f=r.items[p].tokens.filter(m=>m.type==="space"),d=f.length>0&&f.some(m=>/\n.*\n/.test(m.raw));r.loose=d}if(r.loose)for(let p=0;p<r.items.length;p++)r.items[p].loose=!0;return r}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(/\s+/g," "),i=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:i,title:r}}}table(e){const t=this.rules.block.table.exec(e);if(t){if(!/[:|]/.test(t[2]))return;const n={type:"table",raw:t[0],header:K(t[1]).map(i=>({text:i,tokens:[]})),align:t[2].replace(/^\||\| *$/g,"").split("|"),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(n.header.length===n.align.length){let i=n.align.length,r,s,o,l;for(r=0;r<i;r++){const u=n.align[r];u&&(/^ *-+: *$/.test(u)?n.align[r]="right":/^ *:-+: *$/.test(u)?n.align[r]="center":/^ *:-+ *$/.test(u)?n.align[r]="left":n.align[r]=null)}for(i=n.rows.length,r=0;r<i;r++)n.rows[r]=K(n.rows[r],n.header.length).map(u=>({text:u,tokens:[]}));for(i=n.header.length,s=0;s<i;s++)n.header[s].tokens=this.lexer.inline(n.header[s].text);for(i=n.rows.length,s=0;s<i;s++)for(l=n.rows[s],o=0;o<l.length;o++)l[o].tokens=this.lexer.inline(l[o].text);return n}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:k(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const s=q(n.slice(0,-1),"\\");if((n.length-s.length)%2===0)return}else{const s=fe(t[2],"()");if(s>-1){const l=(t[0].indexOf("!")===0?5:4)+t[1].length+s;t[2]=t[2].substring(0,s),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let i=t[2],r="";if(this.options.pedantic){const s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);s&&(i=s[1],r=s[3])}else r=t[3]?t[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(n)?i=i.slice(1):i=i.slice(1,-1)),W(t,{href:i&&i.replace(this.rules.inline._escapes,"$1"),title:r&&r.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let i=(n[2]||n[1]).replace(/\s+/g," ");if(i=t[i.toLowerCase()],!i){const r=n[0].charAt(0);return{type:"text",raw:r,text:r}}return W(n,i,n[0],this.lexer)}}emStrong(e,t,n=""){let i=this.rules.inline.emStrong.lDelim.exec(e);if(!i||i[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const s=[...i[0]].length-1;let o,l,u=s,p=0;const f=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(f.lastIndex=0,t=t.slice(-1*e.length+s);(i=f.exec(t))!=null;){if(o=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!o)continue;if(l=[...o].length,i[3]||i[4]){u+=l;continue}else if((i[5]||i[6])&&s%3&&!((s+l)%3)){p+=l;continue}if(u-=l,u>0)continue;l=Math.min(l,l+u+p);const d=[...i[0]][0].length,m=e.slice(0,s+i.index+d+l);if(Math.min(s,l)%2){const w=m.slice(1,-1);return{type:"em",raw:m,text:w,tokens:this.lexer.inlineTokens(w)}}const T=m.slice(2,-2);return{type:"strong",raw:m,text:T,tokens:this.lexer.inlineTokens(T)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," ");const i=/[^ ]/.test(n),r=/^ /.test(n)&&/ $/.test(n);return i&&r&&(n=n.substring(1,n.length-1)),n=k(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,i;return t[2]==="@"?(n=k(t[1]),i="mailto:"+n):(n=k(t[1]),i=n),{type:"link",raw:t[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let n,i;if(t[2]==="@")n=k(t[0]),i="mailto:"+n;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])[0];while(r!==t[0]);n=k(t[0]),t[1]==="www."?i="http://"+t[0]:i=t[0]}return{type:"link",raw:t[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){let n;return this.lexer.state.inRawBlock?n=t[0]:n=k(t[0]),{type:"text",raw:t[0],text:n}}}}const h={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:E,lheading:/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};h._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;h._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;h.def=b(h.def).replace("label",h._label).replace("title",h._title).getRegex();h.bullet=/(?:[*+-]|\d{1,9}[.)])/;h.listItemStart=b(/^( *)(bull) */).replace("bull",h.bullet).getRegex();h.list=b(h.list).replace(/bull/g,h.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+h.def.source+")").getRegex();h._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";h._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;h.html=b(h.html,"i").replace("comment",h._comment).replace("tag",h._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();h.lheading=b(h.lheading).replace(/bull/g,h.bullet).getRegex();h.paragraph=b(h._paragraph).replace("hr",h.hr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",h._tag).getRegex();h.blockquote=b(h.blockquote).replace("paragraph",h.paragraph).getRegex();h.normal={...h};h.gfm={...h.normal,table:"^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};h.gfm.table=b(h.gfm.table).replace("hr",h.hr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",h._tag).getRegex();h.gfm.paragraph=b(h._paragraph).replace("hr",h.hr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",h.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",h._tag).getRegex();h.pedantic={...h.normal,html:b(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",h._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:E,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:b(h.normal._paragraph).replace("hr",h.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",h.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const c={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:E,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,rDelimAst:/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:E,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^((?![*_])[\spunctuation])/};c._punctuation="\\p{P}$+<=>`^|~";c.punctuation=b(c.punctuation,"u").replace(/punctuation/g,c._punctuation).getRegex();c.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;c.anyPunctuation=/\\[punct]/g;c._escapes=/\\([punct])/g;c._comment=b(h._comment).replace("(?:-->|$)","-->").getRegex();c.emStrong.lDelim=b(c.emStrong.lDelim,"u").replace(/punct/g,c._punctuation).getRegex();c.emStrong.rDelimAst=b(c.emStrong.rDelimAst,"gu").replace(/punct/g,c._punctuation).getRegex();c.emStrong.rDelimUnd=b(c.emStrong.rDelimUnd,"gu").replace(/punct/g,c._punctuation).getRegex();c.anyPunctuation=b(c.anyPunctuation,"gu").replace(/punct/g,c._punctuation).getRegex();c._escapes=b(c._escapes,"gu").replace(/punct/g,c._punctuation).getRegex();c._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;c._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;c.autolink=b(c.autolink).replace("scheme",c._scheme).replace("email",c._email).getRegex();c._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;c.tag=b(c.tag).replace("comment",c._comment).replace("attribute",c._attribute).getRegex();c._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;c._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;c._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;c.link=b(c.link).replace("label",c._label).replace("href",c._href).replace("title",c._title).getRegex();c.reflink=b(c.reflink).replace("label",c._label).replace("ref",h._label).getRegex();c.nolink=b(c.nolink).replace("ref",h._label).getRegex();c.reflinkSearch=b(c.reflinkSearch,"g").replace("reflink",c.reflink).replace("nolink",c.nolink).getRegex();c.normal={...c};c.pedantic={...c.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:b(/^!?\[(label)\]\((.*?)\)/).replace("label",c._label).getRegex(),reflink:b(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",c._label).getRegex()};c.gfm={...c.normal,escape:b(c.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};c.gfm.url=b(c.gfm.url,"i").replace("email",c.gfm._extended_email).getRegex();c.breaks={...c.gfm,br:b(c.br).replace("{2,}","*").getRegex(),text:b(c.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class y{constructor(e){x(this,"tokens");x(this,"options");x(this,"state");x(this,"tokenizer");x(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||v,this.options.tokenizer=this.options.tokenizer||new L,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:h.normal,inline:c.normal};this.options.pedantic?(t.block=h.pedantic,t.inline=c.pedantic):this.options.gfm&&(t.block=h.gfm,this.options.breaks?t.inline=c.breaks:t.inline=c.gfm),this.tokenizer.rules=t}static get rules(){return{block:h,inline:c}}static lex(e,t){return new y(t).lex(e)}static lexInline(e,t){return new y(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(o,l,u)=>l+"    ".repeat(u.length));let n,i,r,s;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(o=>(n=o.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(r=e,this.options.extensions&&this.options.extensions.startBlock){let o=1/0;const l=e.slice(1);let u;this.options.extensions.startBlock.forEach(p=>{u=p.call({lexer:this},l),typeof u=="number"&&u>=0&&(o=Math.min(o,u))}),o<1/0&&o>=0&&(r=e.substring(0,o+1))}if(this.state.top&&(n=this.tokenizer.paragraph(r))){i=t[t.length-1],s&&i.type==="paragraph"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n),s=r.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&i.type==="text"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n);continue}if(e){const o="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,i,r,s=e,o,l,u;if(this.tokens.links){const p=Object.keys(this.tokens.links);if(p.length>0)for(;(o=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)p.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(o=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(o=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,o.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(l||(u=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(p=>(n=p.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,s,u)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e))){e=e.substring(n.raw.length),t.push(n);continue}if(r=e,this.options.extensions&&this.options.extensions.startInline){let p=1/0;const f=e.slice(1);let d;this.options.extensions.startInline.forEach(m=>{d=m.call({lexer:this},f),typeof d=="number"&&d>=0&&(p=Math.min(p,d))}),p<1/0&&p>=0&&(r=e.substring(0,p+1))}if(n=this.tokenizer.inlineText(r)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(u=n.raw.slice(-1)),l=!0,i=t[t.length-1],i&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(e){const p="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return t}}class B{constructor(e){x(this,"options");this.options=e||v}code(e,t,n){var r;const i=(r=(t||"").match(/^\S*/))==null?void 0:r[0];return e=e.replace(/\n$/,"")+`
`,i?'<pre><code class="language-'+k(i)+'">'+(n?e:k(e,!0))+`</code></pre>
`:"<pre><code>"+(n?e:k(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,t){return e}heading(e,t,n){return`<h${t}>${e}</h${t}>
`}hr(){return`<hr>
`}list(e,t,n){const i=t?"ol":"ul",r=t&&n!==1?' start="'+n+'"':"";return"<"+i+r+`>
`+e+"</"+i+`>
`}listitem(e,t,n){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(e){return`<p>${e}</p>
`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){const n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){const i=X(e);if(i===null)return n;e=i;let r='<a href="'+e+'"';return t&&(r+=' title="'+t+'"'),r+=">"+n+"</a>",r}image(e,t,n){const i=X(e);if(i===null)return n;e=i;let r=`<img src="${e}" alt="${n}"`;return t&&(r+=` title="${t}"`),r+=">",r}text(e){return e}}class N{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class ${constructor(e){x(this,"options");x(this,"renderer");x(this,"textRenderer");this.options=e||v,this.options.renderer=this.options.renderer||new B,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new N}static parse(e,t){return new $(t).parse(e)}static parseInline(e,t){return new $(t).parseInline(e)}parse(e,t=!0){let n="";for(let i=0;i<e.length;i++){const r=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]){const s=r,o=this.options.extensions.renderers[s.type].call({parser:this},s);if(o!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(s.type)){n+=o||"";continue}}switch(r.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{const s=r;n+=this.renderer.heading(this.parseInline(s.tokens),s.depth,ue(this.parseInline(s.tokens,this.textRenderer)));continue}case"code":{const s=r;n+=this.renderer.code(s.text,s.lang,!!s.escaped);continue}case"table":{const s=r;let o="",l="";for(let p=0;p<s.header.length;p++)l+=this.renderer.tablecell(this.parseInline(s.header[p].tokens),{header:!0,align:s.align[p]});o+=this.renderer.tablerow(l);let u="";for(let p=0;p<s.rows.length;p++){const f=s.rows[p];l="";for(let d=0;d<f.length;d++)l+=this.renderer.tablecell(this.parseInline(f[d].tokens),{header:!1,align:s.align[d]});u+=this.renderer.tablerow(l)}n+=this.renderer.table(o,u);continue}case"blockquote":{const s=r,o=this.parse(s.tokens);n+=this.renderer.blockquote(o);continue}case"list":{const s=r,o=s.ordered,l=s.start,u=s.loose;let p="";for(let f=0;f<s.items.length;f++){const d=s.items[f],m=d.checked,T=d.task;let w="";if(d.task){const _=this.renderer.checkbox(!!m);u?d.tokens.length>0&&d.tokens[0].type==="paragraph"?(d.tokens[0].text=_+" "+d.tokens[0].text,d.tokens[0].tokens&&d.tokens[0].tokens.length>0&&d.tokens[0].tokens[0].type==="text"&&(d.tokens[0].tokens[0].text=_+" "+d.tokens[0].tokens[0].text)):d.tokens.unshift({type:"text",text:_+" "}):w+=_+" "}w+=this.parse(d.tokens,u),p+=this.renderer.listitem(w,T,!!m)}n+=this.renderer.list(p,o,l);continue}case"html":{const s=r;n+=this.renderer.html(s.text,s.block);continue}case"paragraph":{const s=r;n+=this.renderer.paragraph(this.parseInline(s.tokens));continue}case"text":{let s=r,o=s.tokens?this.parseInline(s.tokens):s.text;for(;i+1<e.length&&e[i+1].type==="text";)s=e[++i],o+=`
`+(s.tokens?this.parseInline(s.tokens):s.text);n+=t?this.renderer.paragraph(o):o;continue}default:{const s='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return n}parseInline(e,t){t=t||this.renderer;let n="";for(let i=0;i<e.length;i++){const r=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]){const s=this.options.extensions.renderers[r.type].call({parser:this},r);if(s!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)){n+=s||"";continue}}switch(r.type){case"escape":{const s=r;n+=t.text(s.text);break}case"html":{const s=r;n+=t.html(s.text);break}case"link":{const s=r;n+=t.link(s.href,s.title,this.parseInline(s.tokens,t));break}case"image":{const s=r;n+=t.image(s.href,s.title,s.text);break}case"strong":{const s=r;n+=t.strong(this.parseInline(s.tokens,t));break}case"em":{const s=r;n+=t.em(this.parseInline(s.tokens,t));break}case"codespan":{const s=r;n+=t.codespan(s.text);break}case"br":{n+=t.br();break}case"del":{const s=r;n+=t.del(this.parseInline(s.tokens,t));break}case"text":{const s=r;n+=t.text(s.text);break}default:{const s='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return n}}class R{constructor(e){x(this,"options");this.options=e||v}preprocess(e){return e}postprocess(e){return e}}x(R,"passThroughHooks",new Set(["preprocess","postprocess"]));var C,j,M,V;class be{constructor(...e){D(this,C);D(this,M);x(this,"defaults",F());x(this,"options",this.setOptions);x(this,"parse",I(this,C,j).call(this,y.lex,$.parse));x(this,"parseInline",I(this,C,j).call(this,y.lexInline,$.parseInline));x(this,"Parser",$);x(this,"Renderer",B);x(this,"TextRenderer",N);x(this,"Lexer",y);x(this,"Tokenizer",L);x(this,"Hooks",R);this.use(...e)}walkTokens(e,t){var i,r;let n=[];for(const s of e)switch(n=n.concat(t.call(this,s)),s.type){case"table":{const o=s;for(const l of o.header)n=n.concat(this.walkTokens(l.tokens,t));for(const l of o.rows)for(const u of l)n=n.concat(this.walkTokens(u.tokens,t));break}case"list":{const o=s;n=n.concat(this.walkTokens(o.items,t));break}default:{const o=s;(r=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&r[o.type]?this.defaults.extensions.childTokens[o.type].forEach(l=>{n=n.concat(this.walkTokens(o[l],t))}):o.tokens&&(n=n.concat(this.walkTokens(o.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const i={...n};if(i.async=this.defaults.async||i.async||!1,n.extensions&&(n.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){const s=t.renderers[r.name];s?t.renderers[r.name]=function(...o){let l=r.renderer.apply(this,o);return l===!1&&(l=s.apply(this,o)),l}:t.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const s=t[r.level];s?s.unshift(r.tokenizer):t[r.level]=[r.tokenizer],r.start&&(r.level==="block"?t.startBlock?t.startBlock.push(r.start):t.startBlock=[r.start]:r.level==="inline"&&(t.startInline?t.startInline.push(r.start):t.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(t.childTokens[r.name]=r.childTokens)}),i.extensions=t),n.renderer){const r=this.defaults.renderer||new B(this.defaults);for(const s in n.renderer){const o=n.renderer[s],l=s,u=r[l];r[l]=(...p)=>{let f=o.apply(r,p);return f===!1&&(f=u.apply(r,p)),f||""}}i.renderer=r}if(n.tokenizer){const r=this.defaults.tokenizer||new L(this.defaults);for(const s in n.tokenizer){const o=n.tokenizer[s],l=s,u=r[l];r[l]=(...p)=>{let f=o.apply(r,p);return f===!1&&(f=u.apply(r,p)),f}}i.tokenizer=r}if(n.hooks){const r=this.defaults.hooks||new R;for(const s in n.hooks){const o=n.hooks[s],l=s,u=r[l];R.passThroughHooks.has(s)?r[l]=p=>{if(this.defaults.async)return Promise.resolve(o.call(r,p)).then(d=>u.call(r,d));const f=o.call(r,p);return u.call(r,f)}:r[l]=(...p)=>{let f=o.apply(r,p);return f===!1&&(f=u.apply(r,p)),f}}i.hooks=r}if(n.walkTokens){const r=this.defaults.walkTokens,s=n.walkTokens;i.walkTokens=function(o){let l=[];return l.push(s.call(this,o)),r&&(l=l.concat(r.call(this,o))),l}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return y.lex(e,t??this.defaults)}parser(e,t){return $.parse(e,t??this.defaults)}}C=new WeakSet,j=function(e,t){return(n,i)=>{const r={...i},s={...this.defaults,...r};this.defaults.async===!0&&r.async===!1&&(s.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),s.async=!0);const o=I(this,M,V).call(this,!!s.silent,!!s.async);if(typeof n>"u"||n===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(s.hooks&&(s.hooks.options=s),s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(n):n).then(l=>e(l,s)).then(l=>s.walkTokens?Promise.all(this.walkTokens(l,s.walkTokens)).then(()=>l):l).then(l=>t(l,s)).then(l=>s.hooks?s.hooks.postprocess(l):l).catch(o);try{s.hooks&&(n=s.hooks.preprocess(n));const l=e(n,s);s.walkTokens&&this.walkTokens(l,s.walkTokens);let u=t(l,s);return s.hooks&&(u=s.hooks.postprocess(u)),u}catch(l){return o(l)}}},M=new WeakSet,V=function(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const i="<p>An error occurred:</p><pre>"+k(n.message+"",!0)+"</pre>";return t?Promise.resolve(i):i}if(t)return Promise.reject(n);throw n}};const S=new be;function g(a,e){return S.parse(a,e)}g.options=g.setOptions=function(a){return S.setOptions(a),g.defaults=S.defaults,Y(g.defaults),g};g.getDefaults=F;g.defaults=v;g.use=function(...a){return S.use(...a),g.defaults=S.defaults,Y(g.defaults),g};g.walkTokens=function(a,e){return S.walkTokens(a,e)};g.parseInline=S.parseInline;g.Parser=$;g.parser=$.parse;g.Renderer=B;g.TextRenderer=N;g.Lexer=y;g.lexer=y.lex;g.Tokenizer=L;g.Hooks=R;g.parse=g;g.options;g.setOptions;g.use;g.walkTokens;g.parseInline;$.parse;y.lex;const A=new g.Renderer;A.heading=function(a,e){return e===1?`
      <h${e}>
        <span class="prefix"></span>
        <span class="content">${a}</span>
        <span class="suffix"></span>
      </h${e}>
    `:e===2?`
      <h${e}>
        <span class="prefix"></span>
        <span class="content">${a}</span>
        <span class="suffix"></span>
      </h${e}>
    `:e===3?`
      <h${e}>
        <span class="prefix"></span>
        <span class="content">${a}</span>
        <span class="suffix"></span>
      </h${e}>
    `:`<h${e}>${a}</h${e}>`};A.listitem=function(a){return`<li><section>${a}</section></li>`};A.blockquote=function(a){return`<blockquote class="multiquote-1">${a}</blockquote>`};A.image=function(a,e,t){const n=e?` title="${e}"`:"";return`<img src="${a}" alt="${t}"${n}>`};function me(a,e){return g.setOptions({renderer:A}),{html:g(a),images:e}}function xe(a,e=z){return`<div id="nice">${a}</div><style>${e.styles}</style>`}class ke{constructor(){x(this,"sidebar",null);x(this,"button",null);x(this,"availableThemes",[z]);this.init()}async init(){this.createFloatingButton(),this.attachButtonEvent(),this.loadThemes().then(()=>{console.log("Themes loaded:",this.availableThemes.map(e=>e.name))})}async loadThemes(){try{this.availableThemes=await oe()}catch(e){console.warn("Failed to load themes:",e),this.availableThemes=[z]}}attachButtonEvent(){var e;(e=this.button)==null||e.addEventListener("click",()=>this.openSidebar())}openSidebar(){if(this.sidebar){this.closeSidebar();return}this.createSidebar(),document.body.appendChild(this.sidebar),setTimeout(()=>{this.sidebar&&(this.sidebar.style.transform="translateX(0)")},10),this.attachSidebarEvents()}createFloatingButton(){this.button=document.createElement("div"),this.button.id="notion2wechat-button",this.button.innerHTML=`
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
    `,this.button.addEventListener("mouseenter",()=>{this.button.style.transform="translateY(-50%) scale(1.1)"}),this.button.addEventListener("mouseleave",()=>{this.button.style.transform="translateY(-50%) scale(1)"}),document.body.appendChild(this.button)}createSidebar(){this.sidebar=document.createElement("div"),this.sidebar.className="notion2wechat-sidebar";const e=this.availableThemes.length>1?this.availableThemes:[z];this.sidebar.innerHTML=`
      <div class="sidebar-header">
        <button class="close-btn">&times;</button>
        <div class="controls">
          <select id="theme-select">
            ${e.map(n=>`<option value="${n.name}">${this.getThemeDisplayName(n.name)}</option>`).join("")}
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
    `;const t=document.createElement("style");t.textContent=`
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
    `,document.head.appendChild(t)}attachSidebarEvents(){var r,s,o,l;const e=(r=this.sidebar)==null?void 0:r.querySelector(".close-btn"),t=(s=this.sidebar)==null?void 0:s.querySelector("#generate-btn"),n=(o=this.sidebar)==null?void 0:o.querySelector("#publish-btn"),i=(l=this.sidebar)==null?void 0:l.querySelector("#theme-select");e==null||e.addEventListener("click",()=>this.closeSidebar()),t==null||t.addEventListener("click",()=>this.generateContent()),n==null||n.addEventListener("click",()=>this.copyContent()),i&&i.addEventListener("change",()=>this.updatePreviewTheme())}closeSidebar(){this.sidebar&&(this.sidebar.style.transform="translateX(100%)",setTimeout(()=>{this.sidebar&&(this.sidebar.remove(),this.sidebar=null)},300))}async generateContent(){var n,i;const e=await this.extractNotionContent();if(!e){alert("无法获取Notion页面内容");return}const t=(n=this.sidebar)==null?void 0:n.querySelector("#generate-btn");t&&(t.textContent="处理中...",t.disabled=!0);try{const r=me(e.content,[]);this.showPreview(r.html);const s=(i=this.sidebar)==null?void 0:i.querySelector("#publish-btn");s&&(s.disabled=!1)}catch(r){console.error("Content generation failed:",r),alert("内容生成失败，请重试")}finally{t&&(t.textContent="生成",t.disabled=!1)}}async extractNotionContent(){try{const e=document.querySelector('[placeholder="Untitled"]'),t=(e==null?void 0:e.innerText)||"无标题",n=document.querySelector(".notion-page-content");if(!n)return null;const i=await this.extractMarkdownFromElement(n);return{title:t,content:i,images:[]}}catch(e){return console.error("Error extracting Notion content:",e),null}}async extractMarkdownFromElement(e){try{const t=document.createRange();t.selectNodeContents(e);const n=window.getSelection();if(n){n.removeAllRanges(),n.addRange(t),document.execCommand("copy"),n.removeAllRanges();const i=await navigator.clipboard.read();for(const r of i)for(const s of r.types)if(s==="text/plain")return await(await r.getType(s)).text()}return e.textContent||""}catch(t){return console.error("Failed to extract markdown from clipboard:",t),e.textContent||""}}showPreview(e){var n;const t=(n=this.sidebar)==null?void 0:n.querySelector("#preview-content");t&&(t.innerHTML=`<div id="nice">${e}</div>`,this.updatePreviewTheme())}getCurrentTheme(){var n;const e=(n=this.sidebar)==null?void 0:n.querySelector("#theme-select");if(!e)return null;const t=e.value;return this.availableThemes.find(i=>i.name===t)||null}getThemeDisplayName(e){return{default:"默认主题",blue:"蓝色主题",red:"红色主题"}[e]||e}updatePreviewTheme(){var r;const e=(r=this.sidebar)==null?void 0:r.querySelector("#preview-content");if(!e)return;const t=this.getCurrentTheme()||z,n=e.querySelector("#preview-theme-style");n&&n.remove();const i=document.createElement("style");i.id="preview-theme-style",i.textContent=t.styles,e.appendChild(i)}async copyContent(){const e=document.getElementById("preview-content");if(!e)return;const t=e.innerHTML,n=document.getElementById("copy-btn");n&&(n.textContent="处理图片中...",n.disabled=!0);try{const i=await le(t),r=this.getCurrentTheme()||z,s=xe(i,r);await navigator.clipboard.write([new ClipboardItem({"text/html":new Blob([s],{type:"text/html"}),"text/plain":new Blob([e.textContent||""],{type:"text/plain"})})]),alert("已复制到剪贴板，可以直接粘贴到公众号编辑器")}catch(i){console.error("复制失败:",i),alert("复制失败，请重试")}finally{n&&(n.textContent="复制",n.disabled=!1)}}}new ke;
