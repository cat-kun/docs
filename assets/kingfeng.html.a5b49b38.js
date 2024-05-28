import{_ as o,r as e,o as r,c as p,b as n,d as a,e as s,w as t,a as u}from"./app.dcecfe39.js";const d={},k=n("h1",{id:"kingfeng部署",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#kingfeng部署","aria-hidden":"true"},"#"),a(" KingFeng部署")],-1),m=n("h2",{id:"青龙上传ck",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#青龙上传ck","aria-hidden":"true"},"#"),a(" 青龙上传CK")],-1),v={href:"https://github.com/WindFgg/kingfeng",target:"_blank",rel:"noopener noreferrer"},b=n("h3",{id:"搭建方法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#搭建方法","aria-hidden":"true"},"#"),a(" 搭建方法")],-1),g=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# 云服务器拉取docker镜像"),a(`
`),n("span",{class:"token function"},"docker"),a(` pull ranqi03/kingfeng:latest

`),n("span",{class:"token comment"},"# 部署容器 5000端口可自定义"),a(`
`),n("span",{class:"token function"},"docker"),a(" run "),n("span",{class:"token parameter variable"},"-dit"),a(),n("span",{class:"token punctuation"},"\\"),a(`
   `),n("span",{class:"token parameter variable"},"-v"),a(),n("span",{class:"token environment constant"},"$PWD"),a("/kingfeng/:/app/config/ "),n("span",{class:"token punctuation"},"\\"),a(`
   `),n("span",{class:"token parameter variable"},"-p"),a(),n("span",{class:"token number"},"5000"),a(":80 "),n("span",{class:"token punctuation"},"\\"),a(`
   `),n("span",{class:"token parameter variable"},"--name"),a(" kingfeng "),n("span",{class:"token punctuation"},"\\"),a(`
   `),n("span",{class:"token parameter variable"},"--hostname"),a(" kingfeng "),n("span",{class:"token punctuation"},"\\"),a(`
   ranqi03/kingfeng:latest

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# 停止容器"),a(`
`),n("span",{class:"token function"},"docker"),a(),n("span",{class:"token function"},"kill"),a(" kingfeng "),n("span",{class:"token operator"},"&&"),a(),n("span",{class:"token function"},"docker"),a(),n("span",{class:"token function"},"rm"),a(" kingfeng "),n("span",{class:"token operator"},"&&"),a(),n("span",{class:"token function"},"docker"),a(` rmi ranqi03/kingfeng

`),n("span",{class:"token comment"},"# 重新拉取容器"),a(`
`),n("span",{class:"token function"},"docker"),a(` pull ranqi03/kingfeng:latest

`),n("span",{class:"token comment"},"# 运行"),a(`
`),n("span",{class:"token function"},"docker"),a(" run "),n("span",{class:"token parameter variable"},"-dit"),a(),n("span",{class:"token punctuation"},"\\"),a(`
   `),n("span",{class:"token parameter variable"},"-v"),a(),n("span",{class:"token environment constant"},"$PWD"),a("/kingfeng/:/app/config/ "),n("span",{class:"token punctuation"},"\\"),a(`
   `),n("span",{class:"token parameter variable"},"-p"),a(),n("span",{class:"token number"},"5000"),a(":80 "),n("span",{class:"token punctuation"},"\\"),a(`
   `),n("span",{class:"token parameter variable"},"--name"),a(" kingfeng "),n("span",{class:"token punctuation"},"\\"),a(`
   `),n("span",{class:"token parameter variable"},"--hostname"),a(" kingfeng "),n("span",{class:"token punctuation"},"\\"),a(`
   ranqi03/kingfeng:latest
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=u(`<h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入docker容器</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> kingfeng <span class="token function">bash</span>

<span class="token comment"># 进入配置目录</span>
<span class="token builtin class-name">cd</span> config

<span class="token comment"># 修改配置文件</span>
<span class="token function">vi</span> config.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">Servers</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">QL_Name</span><span class="token punctuation">:</span> 腾讯云
  <span class="token key atrule">QL_URL</span><span class="token punctuation">:</span> 青龙ip<span class="token punctuation">:</span>端口
  <span class="token key atrule">QL_Client_ID</span><span class="token punctuation">:</span> 青龙Client_ID
  <span class="token key atrule">QL_Client_Secret</span><span class="token punctuation">:</span> 青龙Client_Secret
  <span class="token key atrule">MaxCount</span><span class="token punctuation">:</span> <span class="token number">200</span>
<span class="token key atrule">SecretKey</span><span class="token punctuation">:</span> kingfeng管理员密钥（可不修改）
<span class="token key atrule">WsKeyTaskFullName</span><span class="token punctuation">:</span> wskey转换
<span class="token key atrule">Notice</span><span class="token punctuation">:</span> 为了保障您账号的安全，请设置支付密码并目关闭免密支付！
<span class="token key atrule">UserName</span><span class="token punctuation">:</span> 臭弟弟
<span class="token key atrule">PushImageUrl</span><span class="token punctuation">:</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function _(x,y){const l=e("ExternalLinkIcon"),i=e("CodeGroupItem"),c=e("CodeGroup");return r(),p("div",null,[k,m,n("p",null,[n("a",v,[a("原大佬github仓库地址"),s(l)])]),b,s(c,null,{default:t(()=>[s(i,{title:"首次部署",active:""},{default:t(()=>[g]),_:1}),s(i,{title:"更新"},{default:t(()=>[h]),_:1})]),_:1}),f])}const N=o(d,[["render",_],["__file","kingfeng.html.vue"]]);export{N as default};
