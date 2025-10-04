var V=Object.defineProperty;var ee=(a,e,t)=>e in a?V(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var x=(a,e,t)=>(ee(a,typeof e!="symbol"?e+"":e,t),t),te=(a,e,t)=>{if(!e.has(a))throw TypeError("Cannot "+t)};var Z=(a,e,t)=>{if(e.has(a))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(a):e.set(a,t)};var I=(a,e,t)=>(te(a,e,"access private method"),t);const z={name:"default",styles:' .wechat-article { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; line-height: 1.6; color: #333; max-width: 100%; margin: 0 auto; padding: 20px; } .wechat-article h1 { font-size: 24px; font-weight: bold; margin: 20px 0; color: #000; } .wechat-article h2 { font-size: 20px; font-weight: bold; margin: 18px 0; color: #000; } .wechat-article h3 { font-size: 18px; font-weight: bold; margin: 16px 0; color: #000; } .wechat-article p { margin: 15px 0; text-align: justify; } .wechat-article img { max-width: 100%; height: auto; display: block; margin: 15px auto; } .wechat-article blockquote { border-left: 4px solid #ddd; margin: 15px 0; padding: 10px 20px; background-color: #f9f9f9; } .wechat-article code { background-color: #f4f4f4; padding: 2px 4px; border-radius: 3px; font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace; } .wechat-article pre { background-color: #f4f4f4; padding: 15px; border-radius: 5px; overflow-x: auto; margin: 15px 0; } .wechat-article pre code { background-color: transparent; padding: 0; } .wechat-article table { width: 100%; border-collapse: collapse; margin: 15px 0; } .wechat-article th, .wechat-article td { border: 1px solid #ddd; padding: 8px; text-align: left; } .wechat-article th { background-color: #f2f2f2; } .wechat-article ul, .wechat-article ol { margin: 15px 0; padding-left: 30px; } .wechat-article li { margin: 5px 0; } '},ne={name:"blue",styles:`
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
  `},re=[z,ne,ie];async function se(){return re}async function oe(a){const e=document.createElement("div");e.innerHTML=a;const t=e.querySelectorAll("img");for(const n of Array.from(t)){const i=n.src;if(i.includes("notion.so")||i.includes("notionusercontent.com")||i.includes("file.notion.so"))try{const r=await fetch(i);if(!r.ok)throw new Error("Failed to download image");const s=await r.blob(),o=await new Promise((l,u)=>{const h=new FileReader;h.onload=()=>l(h.result),h.onerror=u,h.readAsDataURL(s)});n.src=o}catch(r){console.warn("Failed to process image:",r)}}return e.innerHTML}function j(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let v=j();function W(a){v=a}const Y=/[&<>"']/,le=new RegExp(Y.source,"g"),G=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,ae=new RegExp(G.source,"g"),ce={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Q=a=>ce[a];function k(a,e){if(e){if(Y.test(a))return a.replace(le,Q)}else if(G.test(a))return a.replace(ae,Q);return a}const he=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function pe(a){return a.replace(he,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const ue=/(^|[^\[])\^/g;function f(a,e){a=typeof a=="string"?a:a.source,e=e||"";const t={replace:(n,i)=>(i=typeof i=="object"&&"source"in i?i.source:i,i=i.replace(ue,"$1"),a=a.replace(n,i),t),getRegex:()=>new RegExp(a,e)};return t}function U(a){try{a=encodeURI(a).replace(/%25/g,"%")}catch{return null}return a}const E={exec:()=>null};function X(a,e){const t=a.replace(/\|/g,(r,s,o)=>{let l=!1,u=s;for(;--u>=0&&o[u]==="\\";)l=!l;return l?"|":" |"}),n=t.split(/ \|/);let i=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(/\\\|/g,"|");return n}function A(a,e,t){const n=a.length;if(n===0)return"";let i=0;for(;i<n;){const r=a.charAt(n-i-1);if(r===e&&!t)i++;else if(r!==e&&t)i++;else break}return a.slice(0,n-i)}function de(a,e){if(a.indexOf(e[1])===-1)return-1;let t=0;for(let n=0;n<a.length;n++)if(a[n]==="\\")n++;else if(a[n]===e[0])t++;else if(a[n]===e[1]&&(t--,t<0))return n;return-1}function K(a,e,t,n){const i=e.href,r=e.title?k(e.title):null,s=a[1].replace(/\\([\[\]])/g,"$1");if(a[0].charAt(0)!=="!"){n.state.inLink=!0;const o={type:"link",raw:t,href:i,title:r,text:s,tokens:n.inlineTokens(s)};return n.state.inLink=!1,o}return{type:"image",raw:t,href:i,title:r,text:k(s)}}function ge(a,e){const t=a.match(/^(\s+)(?:```)/);if(t===null)return e;const n=t[1];return e.split(`
`).map(i=>{const r=i.match(/^\s+/);if(r===null)return i;const[s]=r;return s.length>=n.length?i.slice(n.length):i}).join(`
`)}class q{constructor(e){x(this,"options");x(this,"rules");x(this,"lexer");this.options=e||v}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:A(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],i=ge(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:i}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){const i=A(n,"#");(this.options.pedantic||!i||/ $/.test(i))&&(n=i.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const n=A(t[0].replace(/^ *>[ \t]?/gm,""),`
`),i=this.lexer.state.top;this.lexer.state.top=!0;const r=this.lexer.blockTokens(n);return this.lexer.state.top=i,{type:"blockquote",raw:t[0],tokens:r,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const i=n.length>1,r={type:"list",raw:"",ordered:i,start:i?+n.slice(0,-1):"",loose:!1,items:[]};n=i?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=i?n:"[*+-]");const s=new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);let o="",l="",u=!1;for(;e;){let h=!1;if(!(t=s.exec(e))||this.rules.block.hr.test(e))break;o=t[0],e=e.substring(o.length);let g=t[2].split(`
`,1)[0].replace(/^\t+/,M=>" ".repeat(3*M.length)),d=e.split(`
`,1)[0],m=0;this.options.pedantic?(m=2,l=g.trimStart()):(m=t[2].search(/[^ ]/),m=m>4?1:m,l=g.slice(m),m+=t[1].length);let _=!1;if(!g&&/^ *$/.test(d)&&(o+=d+`
`,e=e.substring(d.length+1),h=!0),!h){const M=new RegExp(`^ {0,${Math.min(3,m-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),N=new RegExp(`^ {0,${Math.min(3,m-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),H=new RegExp(`^ {0,${Math.min(3,m-1)}}(?:\`\`\`|~~~)`),O=new RegExp(`^ {0,${Math.min(3,m-1)}}#`);for(;e;){const P=e.split(`
`,1)[0];if(d=P,this.options.pedantic&&(d=d.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),H.test(d)||O.test(d)||M.test(d)||N.test(e))break;if(d.search(/[^ ]/)>=m||!d.trim())l+=`
`+d.slice(m);else{if(_||g.search(/[^ ]/)>=4||H.test(g)||O.test(g)||N.test(g))break;l+=`
`+d}!_&&!d.trim()&&(_=!0),o+=P+`
`,e=e.substring(P.length+1),g=d.slice(m)}}r.loose||(u?r.loose=!0:/\n *\n *$/.test(o)&&(u=!0));let w=null,$;this.options.gfm&&(w=/^\[[ xX]\] /.exec(l),w&&($=w[0]!=="[ ] ",l=l.replace(/^\[[ xX]\] +/,""))),r.items.push({type:"list_item",raw:o,task:!!w,checked:$,loose:!1,text:l,tokens:[]}),r.raw+=o}r.items[r.items.length-1].raw=o.trimEnd(),r.items[r.items.length-1].text=l.trimEnd(),r.raw=r.raw.trimEnd();for(let h=0;h<r.items.length;h++)if(this.lexer.state.top=!1,r.items[h].tokens=this.lexer.blockTokens(r.items[h].text,[]),!r.loose){const g=r.items[h].tokens.filter(m=>m.type==="space"),d=g.length>0&&g.some(m=>/\n.*\n/.test(m.raw));r.loose=d}if(r.loose)for(let h=0;h<r.items.length;h++)r.items[h].loose=!0;return r}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(/\s+/g," "),i=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:i,title:r}}}table(e){const t=this.rules.block.table.exec(e);if(t){if(!/[:|]/.test(t[2]))return;const n={type:"table",raw:t[0],header:X(t[1]).map(i=>({text:i,tokens:[]})),align:t[2].replace(/^\||\| *$/g,"").split("|"),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(n.header.length===n.align.length){let i=n.align.length,r,s,o,l;for(r=0;r<i;r++){const u=n.align[r];u&&(/^ *-+: *$/.test(u)?n.align[r]="right":/^ *:-+: *$/.test(u)?n.align[r]="center":/^ *:-+ *$/.test(u)?n.align[r]="left":n.align[r]=null)}for(i=n.rows.length,r=0;r<i;r++)n.rows[r]=X(n.rows[r],n.header.length).map(u=>({text:u,tokens:[]}));for(i=n.header.length,s=0;s<i;s++)n.header[s].tokens=this.lexer.inline(n.header[s].text);for(i=n.rows.length,s=0;s<i;s++)for(l=n.rows[s],o=0;o<l.length;o++)l[o].tokens=this.lexer.inline(l[o].text);return n}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:k(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const s=A(n.slice(0,-1),"\\");if((n.length-s.length)%2===0)return}else{const s=de(t[2],"()");if(s>-1){const l=(t[0].indexOf("!")===0?5:4)+t[1].length+s;t[2]=t[2].substring(0,s),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let i=t[2],r="";if(this.options.pedantic){const s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);s&&(i=s[1],r=s[3])}else r=t[3]?t[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(n)?i=i.slice(1):i=i.slice(1,-1)),K(t,{href:i&&i.replace(this.rules.inline._escapes,"$1"),title:r&&r.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let i=(n[2]||n[1]).replace(/\s+/g," ");if(i=t[i.toLowerCase()],!i){const r=n[0].charAt(0);return{type:"text",raw:r,text:r}}return K(n,i,n[0],this.lexer)}}emStrong(e,t,n=""){let i=this.rules.inline.emStrong.lDelim.exec(e);if(!i||i[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const s=[...i[0]].length-1;let o,l,u=s,h=0;const g=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(g.lastIndex=0,t=t.slice(-1*e.length+s);(i=g.exec(t))!=null;){if(o=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!o)continue;if(l=[...o].length,i[3]||i[4]){u+=l;continue}else if((i[5]||i[6])&&s%3&&!((s+l)%3)){h+=l;continue}if(u-=l,u>0)continue;l=Math.min(l,l+u+h);const d=[...i[0]][0].length,m=e.slice(0,s+i.index+d+l);if(Math.min(s,l)%2){const w=m.slice(1,-1);return{type:"em",raw:m,text:w,tokens:this.lexer.inlineTokens(w)}}const _=m.slice(2,-2);return{type:"strong",raw:m,text:_,tokens:this.lexer.inlineTokens(_)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," ");const i=/[^ ]/.test(n),r=/^ /.test(n)&&/ $/.test(n);return i&&r&&(n=n.substring(1,n.length-1)),n=k(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,i;return t[2]==="@"?(n=k(t[1]),i="mailto:"+n):(n=k(t[1]),i=n),{type:"link",raw:t[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let n,i;if(t[2]==="@")n=k(t[0]),i="mailto:"+n;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])[0];while(r!==t[0]);n=k(t[0]),t[1]==="www."?i="http://"+t[0]:i=t[0]}return{type:"link",raw:t[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){let n;return this.lexer.state.inRawBlock?n=t[0]:n=k(t[0]),{type:"text",raw:t[0],text:n}}}}const p={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:E,lheading:/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};p._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;p._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;p.def=f(p.def).replace("label",p._label).replace("title",p._title).getRegex();p.bullet=/(?:[*+-]|\d{1,9}[.)])/;p.listItemStart=f(/^( *)(bull) */).replace("bull",p.bullet).getRegex();p.list=f(p.list).replace(/bull/g,p.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+p.def.source+")").getRegex();p._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";p._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;p.html=f(p.html,"i").replace("comment",p._comment).replace("tag",p._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();p.lheading=f(p.lheading).replace(/bull/g,p.bullet).getRegex();p.paragraph=f(p._paragraph).replace("hr",p.hr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",p._tag).getRegex();p.blockquote=f(p.blockquote).replace("paragraph",p.paragraph).getRegex();p.normal={...p};p.gfm={...p.normal,table:"^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};p.gfm.table=f(p.gfm.table).replace("hr",p.hr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",p._tag).getRegex();p.gfm.paragraph=f(p._paragraph).replace("hr",p.hr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",p.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",p._tag).getRegex();p.pedantic={...p.normal,html:f(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",p._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:E,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:f(p.normal._paragraph).replace("hr",p.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",p.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const c={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:E,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,rDelimAst:/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:E,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^((?![*_])[\spunctuation])/};c._punctuation="\\p{P}$+<=>`^|~";c.punctuation=f(c.punctuation,"u").replace(/punctuation/g,c._punctuation).getRegex();c.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;c.anyPunctuation=/\\[punct]/g;c._escapes=/\\([punct])/g;c._comment=f(p._comment).replace("(?:-->|$)","-->").getRegex();c.emStrong.lDelim=f(c.emStrong.lDelim,"u").replace(/punct/g,c._punctuation).getRegex();c.emStrong.rDelimAst=f(c.emStrong.rDelimAst,"gu").replace(/punct/g,c._punctuation).getRegex();c.emStrong.rDelimUnd=f(c.emStrong.rDelimUnd,"gu").replace(/punct/g,c._punctuation).getRegex();c.anyPunctuation=f(c.anyPunctuation,"gu").replace(/punct/g,c._punctuation).getRegex();c._escapes=f(c._escapes,"gu").replace(/punct/g,c._punctuation).getRegex();c._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;c._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;c.autolink=f(c.autolink).replace("scheme",c._scheme).replace("email",c._email).getRegex();c._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;c.tag=f(c.tag).replace("comment",c._comment).replace("attribute",c._attribute).getRegex();c._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;c._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;c._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;c.link=f(c.link).replace("label",c._label).replace("href",c._href).replace("title",c._title).getRegex();c.reflink=f(c.reflink).replace("label",c._label).replace("ref",p._label).getRegex();c.nolink=f(c.nolink).replace("ref",p._label).getRegex();c.reflinkSearch=f(c.reflinkSearch,"g").replace("reflink",c.reflink).replace("nolink",c.nolink).getRegex();c.normal={...c};c.pedantic={...c.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:f(/^!?\[(label)\]\((.*?)\)/).replace("label",c._label).getRegex(),reflink:f(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",c._label).getRegex()};c.gfm={...c.normal,escape:f(c.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};c.gfm.url=f(c.gfm.url,"i").replace("email",c.gfm._extended_email).getRegex();c.breaks={...c.gfm,br:f(c.br).replace("{2,}","*").getRegex(),text:f(c.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class y{constructor(e){x(this,"tokens");x(this,"options");x(this,"state");x(this,"tokenizer");x(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||v,this.options.tokenizer=this.options.tokenizer||new q,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:p.normal,inline:c.normal};this.options.pedantic?(t.block=p.pedantic,t.inline=c.pedantic):this.options.gfm&&(t.block=p.gfm,this.options.breaks?t.inline=c.breaks:t.inline=c.gfm),this.tokenizer.rules=t}static get rules(){return{block:p,inline:c}}static lex(e,t){return new y(t).lex(e)}static lexInline(e,t){return new y(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(o,l,u)=>l+"    ".repeat(u.length));let n,i,r,s;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(o=>(n=o.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(r=e,this.options.extensions&&this.options.extensions.startBlock){let o=1/0;const l=e.slice(1);let u;this.options.extensions.startBlock.forEach(h=>{u=h.call({lexer:this},l),typeof u=="number"&&u>=0&&(o=Math.min(o,u))}),o<1/0&&o>=0&&(r=e.substring(0,o+1))}if(this.state.top&&(n=this.tokenizer.paragraph(r))){i=t[t.length-1],s&&i.type==="paragraph"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n),s=r.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&i.type==="text"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n);continue}if(e){const o="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,i,r,s=e,o,l,u;if(this.tokens.links){const h=Object.keys(this.tokens.links);if(h.length>0)for(;(o=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)h.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(o=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(o=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,o.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(l||(u=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(h=>(n=h.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,s,u)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e))){e=e.substring(n.raw.length),t.push(n);continue}if(r=e,this.options.extensions&&this.options.extensions.startInline){let h=1/0;const g=e.slice(1);let d;this.options.extensions.startInline.forEach(m=>{d=m.call({lexer:this},g),typeof d=="number"&&d>=0&&(h=Math.min(h,d))}),h<1/0&&h>=0&&(r=e.substring(0,h+1))}if(n=this.tokenizer.inlineText(r)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(u=n.raw.slice(-1)),l=!0,i=t[t.length-1],i&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(e){const h="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(h);break}else throw new Error(h)}}return t}}class L{constructor(e){x(this,"options");this.options=e||v}code(e,t,n){var r;const i=(r=(t||"").match(/^\S*/))==null?void 0:r[0];return e=e.replace(/\n$/,"")+`
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
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){const i=U(e);if(i===null)return n;e=i;let r='<a href="'+e+'"';return t&&(r+=' title="'+t+'"'),r+=">"+n+"</a>",r}image(e,t,n){const i=U(e);if(i===null)return n;e=i;let r=`<img src="${e}" alt="${n}"`;return t&&(r+=` title="${t}"`),r+=">",r}text(e){return e}}class F{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class T{constructor(e){x(this,"options");x(this,"renderer");x(this,"textRenderer");this.options=e||v,this.options.renderer=this.options.renderer||new L,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new F}static parse(e,t){return new T(t).parse(e)}static parseInline(e,t){return new T(t).parseInline(e)}parse(e,t=!0){let n="";for(let i=0;i<e.length;i++){const r=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]){const s=r,o=this.options.extensions.renderers[s.type].call({parser:this},s);if(o!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(s.type)){n+=o||"";continue}}switch(r.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{const s=r;n+=this.renderer.heading(this.parseInline(s.tokens),s.depth,pe(this.parseInline(s.tokens,this.textRenderer)));continue}case"code":{const s=r;n+=this.renderer.code(s.text,s.lang,!!s.escaped);continue}case"table":{const s=r;let o="",l="";for(let h=0;h<s.header.length;h++)l+=this.renderer.tablecell(this.parseInline(s.header[h].tokens),{header:!0,align:s.align[h]});o+=this.renderer.tablerow(l);let u="";for(let h=0;h<s.rows.length;h++){const g=s.rows[h];l="";for(let d=0;d<g.length;d++)l+=this.renderer.tablecell(this.parseInline(g[d].tokens),{header:!1,align:s.align[d]});u+=this.renderer.tablerow(l)}n+=this.renderer.table(o,u);continue}case"blockquote":{const s=r,o=this.parse(s.tokens);n+=this.renderer.blockquote(o);continue}case"list":{const s=r,o=s.ordered,l=s.start,u=s.loose;let h="";for(let g=0;g<s.items.length;g++){const d=s.items[g],m=d.checked,_=d.task;let w="";if(d.task){const $=this.renderer.checkbox(!!m);u?d.tokens.length>0&&d.tokens[0].type==="paragraph"?(d.tokens[0].text=$+" "+d.tokens[0].text,d.tokens[0].tokens&&d.tokens[0].tokens.length>0&&d.tokens[0].tokens[0].type==="text"&&(d.tokens[0].tokens[0].text=$+" "+d.tokens[0].tokens[0].text)):d.tokens.unshift({type:"text",text:$+" "}):w+=$+" "}w+=this.parse(d.tokens,u),h+=this.renderer.listitem(w,_,!!m)}n+=this.renderer.list(h,o,l);continue}case"html":{const s=r;n+=this.renderer.html(s.text,s.block);continue}case"paragraph":{const s=r;n+=this.renderer.paragraph(this.parseInline(s.tokens));continue}case"text":{let s=r,o=s.tokens?this.parseInline(s.tokens):s.text;for(;i+1<e.length&&e[i+1].type==="text";)s=e[++i],o+=`
`+(s.tokens?this.parseInline(s.tokens):s.text);n+=t?this.renderer.paragraph(o):o;continue}default:{const s='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return n}parseInline(e,t){t=t||this.renderer;let n="";for(let i=0;i<e.length;i++){const r=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]){const s=this.options.extensions.renderers[r.type].call({parser:this},r);if(s!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)){n+=s||"";continue}}switch(r.type){case"escape":{const s=r;n+=t.text(s.text);break}case"html":{const s=r;n+=t.html(s.text);break}case"link":{const s=r;n+=t.link(s.href,s.title,this.parseInline(s.tokens,t));break}case"image":{const s=r;n+=t.image(s.href,s.title,s.text);break}case"strong":{const s=r;n+=t.strong(this.parseInline(s.tokens,t));break}case"em":{const s=r;n+=t.em(this.parseInline(s.tokens,t));break}case"codespan":{const s=r;n+=t.codespan(s.text);break}case"br":{n+=t.br();break}case"del":{const s=r;n+=t.del(this.parseInline(s.tokens,t));break}case"text":{const s=r;n+=t.text(s.text);break}default:{const s='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return n}}class R{constructor(e){x(this,"options");this.options=e||v}preprocess(e){return e}postprocess(e){return e}}x(R,"passThroughHooks",new Set(["preprocess","postprocess"]));var C,D,B,J;class fe{constructor(...e){Z(this,C);Z(this,B);x(this,"defaults",j());x(this,"options",this.setOptions);x(this,"parse",I(this,C,D).call(this,y.lex,T.parse));x(this,"parseInline",I(this,C,D).call(this,y.lexInline,T.parseInline));x(this,"Parser",T);x(this,"Renderer",L);x(this,"TextRenderer",F);x(this,"Lexer",y);x(this,"Tokenizer",q);x(this,"Hooks",R);this.use(...e)}walkTokens(e,t){var i,r;let n=[];for(const s of e)switch(n=n.concat(t.call(this,s)),s.type){case"table":{const o=s;for(const l of o.header)n=n.concat(this.walkTokens(l.tokens,t));for(const l of o.rows)for(const u of l)n=n.concat(this.walkTokens(u.tokens,t));break}case"list":{const o=s;n=n.concat(this.walkTokens(o.items,t));break}default:{const o=s;(r=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&r[o.type]?this.defaults.extensions.childTokens[o.type].forEach(l=>{n=n.concat(this.walkTokens(o[l],t))}):o.tokens&&(n=n.concat(this.walkTokens(o.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const i={...n};if(i.async=this.defaults.async||i.async||!1,n.extensions&&(n.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){const s=t.renderers[r.name];s?t.renderers[r.name]=function(...o){let l=r.renderer.apply(this,o);return l===!1&&(l=s.apply(this,o)),l}:t.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const s=t[r.level];s?s.unshift(r.tokenizer):t[r.level]=[r.tokenizer],r.start&&(r.level==="block"?t.startBlock?t.startBlock.push(r.start):t.startBlock=[r.start]:r.level==="inline"&&(t.startInline?t.startInline.push(r.start):t.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(t.childTokens[r.name]=r.childTokens)}),i.extensions=t),n.renderer){const r=this.defaults.renderer||new L(this.defaults);for(const s in n.renderer){const o=n.renderer[s],l=s,u=r[l];r[l]=(...h)=>{let g=o.apply(r,h);return g===!1&&(g=u.apply(r,h)),g||""}}i.renderer=r}if(n.tokenizer){const r=this.defaults.tokenizer||new q(this.defaults);for(const s in n.tokenizer){const o=n.tokenizer[s],l=s,u=r[l];r[l]=(...h)=>{let g=o.apply(r,h);return g===!1&&(g=u.apply(r,h)),g}}i.tokenizer=r}if(n.hooks){const r=this.defaults.hooks||new R;for(const s in n.hooks){const o=n.hooks[s],l=s,u=r[l];R.passThroughHooks.has(s)?r[l]=h=>{if(this.defaults.async)return Promise.resolve(o.call(r,h)).then(d=>u.call(r,d));const g=o.call(r,h);return u.call(r,g)}:r[l]=(...h)=>{let g=o.apply(r,h);return g===!1&&(g=u.apply(r,h)),g}}i.hooks=r}if(n.walkTokens){const r=this.defaults.walkTokens,s=n.walkTokens;i.walkTokens=function(o){let l=[];return l.push(s.call(this,o)),r&&(l=l.concat(r.call(this,o))),l}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return y.lex(e,t??this.defaults)}parser(e,t){return T.parse(e,t??this.defaults)}}C=new WeakSet,D=function(e,t){return(n,i)=>{const r={...i},s={...this.defaults,...r};this.defaults.async===!0&&r.async===!1&&(s.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),s.async=!0);const o=I(this,B,J).call(this,!!s.silent,!!s.async);if(typeof n>"u"||n===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(s.hooks&&(s.hooks.options=s),s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(n):n).then(l=>e(l,s)).then(l=>s.walkTokens?Promise.all(this.walkTokens(l,s.walkTokens)).then(()=>l):l).then(l=>t(l,s)).then(l=>s.hooks?s.hooks.postprocess(l):l).catch(o);try{s.hooks&&(n=s.hooks.preprocess(n));const l=e(n,s);s.walkTokens&&this.walkTokens(l,s.walkTokens);let u=t(l,s);return s.hooks&&(u=s.hooks.postprocess(u)),u}catch(l){return o(l)}}},B=new WeakSet,J=function(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const i="<p>An error occurred:</p><pre>"+k(n.message+"",!0)+"</pre>";return t?Promise.resolve(i):i}if(t)return Promise.reject(n);throw n}};const S=new fe;function b(a,e){return S.parse(a,e)}b.options=b.setOptions=function(a){return S.setOptions(a),b.defaults=S.defaults,W(b.defaults),b};b.getDefaults=j;b.defaults=v;b.use=function(...a){return S.use(...a),b.defaults=S.defaults,W(b.defaults),b};b.walkTokens=function(a,e){return S.walkTokens(a,e)};b.parseInline=S.parseInline;b.Parser=T;b.parser=T.parse;b.Renderer=L;b.TextRenderer=F;b.Lexer=y;b.lexer=y.lex;b.Tokenizer=q;b.Hooks=R;b.parse=b;b.options;b.setOptions;b.use;b.walkTokens;b.parseInline;T.parse;y.lex;function be(a,e){return{html:b(a),images:e}}function me(a,e=z){return`<div id="nice">${a}</div><style>${e.styles}</style>`}class xe{constructor(){x(this,"sidebar",null);x(this,"button",null);x(this,"availableThemes",[z]);this.init()}async init(){this.createFloatingButton(),this.attachButtonEvent(),this.loadThemes().then(()=>{console.log("Themes loaded:",this.availableThemes.map(e=>e.name))})}async loadThemes(){try{this.availableThemes=await se()}catch(e){console.warn("Failed to load themes:",e),this.availableThemes=[z]}}attachButtonEvent(){var e;(e=this.button)==null||e.addEventListener("click",()=>this.openSidebar())}openSidebar(){if(this.sidebar){this.closeSidebar();return}this.createSidebar(),document.body.appendChild(this.sidebar),setTimeout(()=>{this.sidebar&&(this.sidebar.style.transform="translateX(0)")},10),this.attachSidebarEvents()}createFloatingButton(){this.button=document.createElement("div"),this.button.id="notion2wechat-button",this.button.innerHTML=`
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
    `,document.head.appendChild(t)}attachSidebarEvents(){var r,s,o,l;const e=(r=this.sidebar)==null?void 0:r.querySelector(".close-btn"),t=(s=this.sidebar)==null?void 0:s.querySelector("#generate-btn"),n=(o=this.sidebar)==null?void 0:o.querySelector("#publish-btn"),i=(l=this.sidebar)==null?void 0:l.querySelector("#theme-select");e==null||e.addEventListener("click",()=>this.closeSidebar()),t==null||t.addEventListener("click",()=>this.generateContent()),n==null||n.addEventListener("click",()=>this.copyContent()),i&&i.addEventListener("change",()=>this.updatePreviewTheme())}closeSidebar(){this.sidebar&&(this.sidebar.style.transform="translateX(100%)",setTimeout(()=>{this.sidebar&&(this.sidebar.remove(),this.sidebar=null)},300))}async generateContent(){var n,i;const e=this.extractNotionContent();if(!e){alert("无法获取Notion页面内容");return}const t=(n=this.sidebar)==null?void 0:n.querySelector("#generate-btn");t&&(t.textContent="处理中...",t.disabled=!0);try{const r=be(e.content,[]);this.showPreview(r.html);const s=(i=this.sidebar)==null?void 0:i.querySelector("#publish-btn");s&&(s.disabled=!1)}catch(r){console.error("Content generation failed:",r),alert("内容生成失败，请重试")}finally{t&&(t.textContent="生成",t.disabled=!1)}}extractNotionContent(){try{const e=document.querySelector('[placeholder="Untitled"]'),t=(e==null?void 0:e.innerText)||"无标题",n=document.querySelector(".notion-page-content");if(!n)return null;const i=this.extractMarkdownFromElement(n);return{title:t,content:i,images:[]}}catch(e){return console.error("Error extracting Notion content:",e),null}}extractMarkdownFromElement(e){return e.textContent||""}showPreview(e){var n;const t=(n=this.sidebar)==null?void 0:n.querySelector("#preview-content");t&&(t.innerHTML=`<div id="nice">${e}</div>`,this.updatePreviewTheme())}getCurrentTheme(){var n;const e=(n=this.sidebar)==null?void 0:n.querySelector("#theme-select");if(!e)return null;const t=e.value;return this.availableThemes.find(i=>i.name===t)||null}getThemeDisplayName(e){return{default:"默认主题",blue:"蓝色主题",red:"红色主题"}[e]||e}updatePreviewTheme(){var r;const e=(r=this.sidebar)==null?void 0:r.querySelector("#preview-content");if(!e)return;const t=this.getCurrentTheme()||z,n=e.querySelector("#preview-theme-style");n&&n.remove();const i=document.createElement("style");i.id="preview-theme-style",i.textContent=t.styles,e.appendChild(i)}async copyContent(){const e=document.getElementById("preview-content");if(!e)return;const t=e.innerHTML,n=document.getElementById("copy-btn");n&&(n.textContent="处理图片中...",n.disabled=!0);try{const i=await oe(t),r=this.getCurrentTheme()||z,s=me(i,r);await navigator.clipboard.write([new ClipboardItem({"text/html":new Blob([s],{type:"text/html"}),"text/plain":new Blob([e.textContent||""],{type:"text/plain"})})]),alert("已复制到剪贴板，可以直接粘贴到公众号编辑器")}catch(i){console.error("复制失败:",i),alert("复制失败，请重试")}finally{n&&(n.textContent="复制",n.disabled=!1)}}}new xe;
