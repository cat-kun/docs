import{_ as a,o as e,c as i,a as t}from"./app.dcecfe39.js";const l={},r=t('<h1 id="常见的面试题" tabindex="-1"><a class="header-anchor" href="#常见的面试题" aria-hidden="true">#</a> 常见的面试题</h1><h2 id="get-和-post-区别" tabindex="-1"><a class="header-anchor" href="#get-和-post-区别" aria-hidden="true">#</a> get 和 post 区别</h2><h2 id="网页从输入网址到渲染完成经历了哪些过程" tabindex="-1"><a class="header-anchor" href="#网页从输入网址到渲染完成经历了哪些过程" aria-hidden="true">#</a> 网页从输入网址到渲染完成经历了哪些过程？</h2><details class="custom-container details"><summary>点击展开详解</summary><p>大致可以分为以下 7 步</p><ol><li>输入网址；</li><li>发送到 DNS 服务器，并获取域名对应的 web 服务器对应的 ip 地址；</li><li>与 web 服务器建立 TCP 连接；</li><li>浏览器向 web 服务器发送 http 请求；</li><li>web 服务器响应请求，并返回指定 url 的数据（或错误信息，或重定向的新的 url 地址）；</li><li>浏览器下载 web 服务器返回的数据及解析 html 源文件；</li><li>生成 DOM 树，解析 css 和 js，渲染页面，直至显示完成</li></ol></details><h2 id="前端如何优化网站性能" tabindex="-1"><a class="header-anchor" href="#前端如何优化网站性能" aria-hidden="true">#</a> 前端如何优化网站性能</h2><ol><li>减少 http 请求数（CSS Sprites、合并 CSS 和 JS 文件、采用 Lazyload）</li><li>控制资源文件加载优先级</li><li>利用浏览器缓存</li><li>减少重排</li><li>减少 dom 操作</li><li>图标使用 iconfont</li></ol><h2 id="讲讲虚拟-dom" tabindex="-1"><a class="header-anchor" href="#讲讲虚拟-dom" aria-hidden="true">#</a> 讲讲虚拟 DOM</h2><h2 id="深拷贝和浅拷贝的区别" tabindex="-1"><a class="header-anchor" href="#深拷贝和浅拷贝的区别" aria-hidden="true">#</a> 深拷贝和浅拷贝的区别</h2><p>1.浅拷贝： 将原对象或原数组的引用直接赋给新对象，新数组，新对象／数组只是原对象的一个引用 2.深拷贝： 创建一个新的对象和数组，将原对象的各项属性的“值”（数组的所有元素）拷贝过来，是“值”而不是“引用”</p><p>为什么要使用深拷贝？ 我们希望在改变新的数组（对象）的时候，不改变原数组（对象）</p><h2 id="讲讲宏任务-微任务" tabindex="-1"><a class="header-anchor" href="#讲讲宏任务-微任务" aria-hidden="true">#</a> 讲讲宏任务 微任务</h2><ul><li><p>可以理解是每次执行栈执行的代码就是一个宏任务（包括每次从事件队列中获取一个事件回调并放到执行栈中执行）。 浏览器为了能够使得 JS 内部(macro)task 与 DOM 任务能够有序的执行，会在一个(macro)task 执行结束后，在下一个(macro)task 执行开始前，对页面进行重新渲染</p></li><li><p>可以理解是在当前 task 执行结束后立即执行的任务。也就是说，在当前 task 任务后，下一个 task 之前，在渲染之前。 所以它的响应速度相比 setTimeout（setTimeout 是 task）会更快，因为无需等渲染。也就是说，在某一个 macrotask 执行完后，就会将在它执行期间产生的所有 microtask 都执行完毕（在渲染前）</p></li></ul>',12),s=[r];function h(d,o){return e(),i("div",null,s)}const n=a(l,[["render",h],["__file","Base.html.vue"]]);export{n as default};
