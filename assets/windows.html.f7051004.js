import{_ as n,r as a,o as r,c as i,b as e,d as o,e as l,a as t}from"./app.dcecfe39.js";const d="/docs/assets/img1.895f3686.webp",c="/docs/assets/img2.f44eb1eb.webp",h="/docs/assets/img3.230ca7fe.webp",p={},_=e("h1",{id:"windows-系统",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#windows-系统","aria-hidden":"true"},"#"),o(" Windows 系统")],-1),u=e("p",null,"Clash for Windows 是 Windows 上流行的客户端，以下教程将提供 Clash for Windows 的基础使用方法。",-1),f=e("p",null,[e("b",null,"请注意，教程编写时最新版为 0.19.14，后续版本界面可能会与图片所示内容有所差异，请以最新版为准。")],-1),w=e("h2",{id:"下载与安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#下载与安装","aria-hidden":"true"},"#"),o(" 下载与安装")],-1),b={href:"https://github.com/Fndroid/clash_for_windows_pkg/releases",target:"_blank",rel:"noopener noreferrer"},m=t('<p>Clash.for.Windows-0.XX.XX-win.7z（XX.XX 具体随版本号而定）是绿色版，解压即用。</p><p>Clash.for.Windows.Setup.0.XX.XX.exe（XX.XX 具体随版本号而定）是安装版，使用前需安装。</p><p><strong>在安装界面，如果出现 Windows 防火墙或杀软警告，请全部允许！</strong></p><p>在安装完毕后，运行&quot;Clash for Windows.exe&quot;，进入如下界面：</p><p><img src="'+d+'" alt=""></p><h2 id="获取订阅" tabindex="-1"><a class="header-anchor" href="#获取订阅" aria-hidden="true">#</a> 获取订阅</h2><p>点击左侧的“Profiles”，进入如下界面： <img src="'+c+'" alt=""> 复制您的订阅链接，并粘贴到界面上方的输入框中，然后点击“Download”按钮。</p><p>下载好之后，此界面会出现一个订阅，点击它。</p><p><b>如果发现节点不能使用，请先点击“Update All”按钮更新订阅！</b></p><h2 id="选择节点和模式-开始使用" tabindex="-1"><a class="header-anchor" href="#选择节点和模式-开始使用" aria-hidden="true">#</a> 选择节点和模式，开始使用</h2><p>点击左侧的“Proxies”，进入如下界面： <img src="'+h+'" alt=""> 上方的按钮是代理模式，其中 Script 不常用，其它介绍如下：</p><ul><li><p>Global 是全局代理，若选择此项，所有的网站经过代理访问。</p></li><li><p>Rule 是规则代理，若选择此项，只有国外的网站才会经过代理访问。</p></li><li><p>Direct 是全部直连，若选择此项，则所有网站都不经过代理。</p></li></ul><p>在选择了代理模式之后，选择一个希望使用的节点，然后回到“General”。</p><p>将倒数第二行的“System Proxy”开启，即可打开翻墙。</p><h2 id="其它" tabindex="-1"><a class="header-anchor" href="#其它" aria-hidden="true">#</a> 其它</h2><ul><li><p>如果想要了解更多，请查阅 Clash 文档。</p></li><li><p>请注意：Clash 默认情况下只代理浏览器，若需代理 Windows 应用，请使用 TUN 模式，TUN 模式使用方式请自行查阅。</p></li></ul><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2>',17),x=e("li",null,[e("p",null,[o("订阅链接下载报错（出现 "),e("code",null,"Network Error"),o(" 之类的）")]),e("ul",null,[e("li",null,"关闭软件 vpn 开关，再更新订阅")])],-1),X=e("p",null,[o("软件各种报错问题（出现 "),e("code",null,"error"),o("、"),e("code",null,"fail"),o(" 字样）")],-1),g={href:"https://github.com/Fndroid/clash_for_windows_pkg/releases",target:"_blank",rel:"noopener noreferrer"};function k(W,C){const s=a("ExternalLinkIcon");return r(),i("div",null,[_,u,f,w,e("ul",null,[e("li",null,[e("a",b,[o("官网-点击下载"),l(s)])])]),m,e("ul",null,[x,e("li",null,[X,e("ul",null,[e("li",null,[o("重新到官网下载最新版本软件 "),e("a",g,[o("点击下载"),l(s)])])])])])])}const v=n(p,[["render",k],["__file","windows.html.vue"]]);export{v as default};