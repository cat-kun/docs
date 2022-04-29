import{_ as r,r as e,o,a as i,d as n,b as a,w as t,F as u,e as s,c as b}from"./app.a22dc89e.js";const k={},m=n("h1",{id:"kingfeng\u90E8\u7F72",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#kingfeng\u90E8\u7F72","aria-hidden":"true"},"#"),s(" KingFeng\u90E8\u7F72")],-1),d=n("h2",{id:"\u9752\u9F99\u4E0A\u4F20ck",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u9752\u9F99\u4E0A\u4F20ck","aria-hidden":"true"},"#"),s(" \u9752\u9F99\u4E0A\u4F20CK")],-1),g={href:"https://github.com/WindFgg/kingfeng",target:"_blank",rel:"noopener noreferrer"},h=s("\u539F\u5927\u4F6Cgithub\u4ED3\u5E93\u5730\u5740"),f=n("h3",{id:"\u642D\u5EFA\u65B9\u6CD5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u642D\u5EFA\u65B9\u6CD5","aria-hidden":"true"},"#"),s(" \u642D\u5EFA\u65B9\u6CD5")],-1),_=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# \u4E91\u670D\u52A1\u5668\u62C9\u53D6docker\u955C\u50CF"),s(`
`),n("span",{class:"token function"},"docker"),s(` pull ranqi03/kingfeng:latest

`),n("span",{class:"token comment"},"# \u90E8\u7F72\u5BB9\u5668 5000\u7AEF\u53E3\u53EF\u81EA\u5B9A\u4E49"),s(`
`),n("span",{class:"token function"},"docker"),s(" run -dit "),n("span",{class:"token punctuation"},"\\"),s(`
   -v `),n("span",{class:"token environment constant"},"$PWD"),s("/kingfeng/:/app/config/ "),n("span",{class:"token punctuation"},"\\"),s(`
   -p `),n("span",{class:"token number"},"5000"),s(":80 "),n("span",{class:"token punctuation"},"\\"),s(`
   --name kingfeng `),n("span",{class:"token punctuation"},"\\"),s(`
   --hostname kingfeng `),n("span",{class:"token punctuation"},"\\"),s(`
   ranqi03/kingfeng:latest

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br")])],-1),v=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# \u505C\u6B62\u5BB9\u5668"),s(`
`),n("span",{class:"token function"},"docker"),s(),n("span",{class:"token function"},"kill"),s(" kingfeng "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token function"},"docker"),s(),n("span",{class:"token function"},"rm"),s(" kingfeng "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token function"},"docker"),s(` rmi ranqi03/kingfeng

`),n("span",{class:"token comment"},"# \u91CD\u65B0\u62C9\u53D6\u5BB9\u5668"),s(`
`),n("span",{class:"token function"},"docker"),s(` pull ranqi03/kingfeng:latest

`),n("span",{class:"token comment"},"# \u8FD0\u884C"),s(`
`),n("span",{class:"token function"},"docker"),s(" run -dit "),n("span",{class:"token punctuation"},"\\"),s(`
   -v `),n("span",{class:"token environment constant"},"$PWD"),s("/kingfeng/:/app/config/ "),n("span",{class:"token punctuation"},"\\"),s(`
   -p `),n("span",{class:"token number"},"5000"),s(":80 "),n("span",{class:"token punctuation"},"\\"),s(`
   --name kingfeng `),n("span",{class:"token punctuation"},"\\"),s(`
   --hostname kingfeng `),n("span",{class:"token punctuation"},"\\"),s(`
   ranqi03/kingfeng:latest
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br")])],-1),x=b(`<h3 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8FDB\u5165docker\u5BB9\u5668</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it kingfeng <span class="token function">bash</span>

<span class="token comment"># \u8FDB\u5165\u914D\u7F6E\u76EE\u5F55</span>
<span class="token builtin class-name">cd</span> config

<span class="token comment"># \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</span>
<span class="token function">vi</span> config.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">Servers</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">QL_Name</span><span class="token punctuation">:</span> \u817E\u8BAF\u4E91
  <span class="token key atrule">QL_URL</span><span class="token punctuation">:</span> \u9752\u9F99ip<span class="token punctuation">:</span>\u7AEF\u53E3
  <span class="token key atrule">QL_Client_ID</span><span class="token punctuation">:</span> \u9752\u9F99Client_ID
  <span class="token key atrule">QL_Client_Secret</span><span class="token punctuation">:</span> \u9752\u9F99Client_Secret
  <span class="token key atrule">MaxCount</span><span class="token punctuation">:</span> <span class="token number">200</span>
<span class="token key atrule">SecretKey</span><span class="token punctuation">:</span> kingfeng\u7BA1\u7406\u5458\u5BC6\u94A5\uFF08\u53EF\u4E0D\u4FEE\u6539\uFF09
<span class="token key atrule">WsKeyTaskFullName</span><span class="token punctuation">:</span> wskey\u8F6C\u6362
<span class="token key atrule">Notice</span><span class="token punctuation">:</span> \u4E3A\u4E86\u4FDD\u969C\u60A8\u8D26\u53F7\u7684\u5B89\u5168\uFF0C\u8BF7\u8BBE\u7F6E\u652F\u4ED8\u5BC6\u7801\u5E76\u76EE\u5173\u95ED\u514D\u5BC6\u652F\u4ED8\uFF01
<span class="token key atrule">UserName</span><span class="token punctuation">:</span> \u81ED\u5F1F\u5F1F
<span class="token key atrule">PushImageUrl</span><span class="token punctuation">:</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,4);function y(C,N){const c=e("ExternalLinkIcon"),l=e("CodeGroupItem"),p=e("CodeGroup");return o(),i(u,null,[m,d,n("p",null,[n("a",g,[h,a(c)])]),f,a(p,null,{default:t(()=>[a(l,{title:"\u9996\u6B21\u90E8\u7F72",active:""},{default:t(()=>[_]),_:1}),a(l,{title:"\u66F4\u65B0"},{default:t(()=>[v]),_:1})]),_:1}),x],64)}var L=r(k,[["render",y],["__file","kingfeng.html.vue"]]);export{L as default};
