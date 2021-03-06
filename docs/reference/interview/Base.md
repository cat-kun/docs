# 常见的面试题

## get 和 post 区别

## 网页从输入网址到渲染完成经历了哪些过程？

::: details 点击展开详解
大致可以分为以下 7 步

1. 输入网址；
2. 发送到 DNS 服务器，并获取域名对应的 web 服务器对应的 ip 地址；
3. 与 web 服务器建立 TCP 连接；
4. 浏览器向 web 服务器发送 http 请求；
5. web 服务器响应请求，并返回指定 url 的数据（或错误信息，或重定向的新的 url 地址）；
6. 浏览器下载 web 服务器返回的数据及解析 html 源文件；
7. 生成 DOM 树，解析 css 和 js，渲染页面，直至显示完成
   :::

## 前端如何优化网站性能

1. 减少 http 请求数（CSS Sprites、合并 CSS 和 JS 文件、采用 Lazyload）
2. 控制资源文件加载优先级
3. 利用浏览器缓存
4. 减少重排
5. 减少 dom 操作
6. 图标使用 iconfont

## 讲讲虚拟 DOM

## 深拷贝和浅拷贝的区别

1.浅拷贝： 将原对象或原数组的引用直接赋给新对象，新数组，新对象／数组只是原对象的一个引用 2.深拷贝： 创建一个新的对象和数组，将原对象的各项属性的“值”（数组的所有元素）拷贝过来，是“值”而不是“引用”

为什么要使用深拷贝？
我们希望在改变新的数组（对象）的时候，不改变原数组（对象）

## 讲讲宏任务 微任务

- 可以理解是每次执行栈执行的代码就是一个宏任务（包括每次从事件队列中获取一个事件回调并放到执行栈中执行）。
  浏览器为了能够使得 JS 内部(macro)task 与 DOM 任务能够有序的执行，会在一个(macro)task 执行结束后，在下一个(macro)task 执行开始前，对页面进行重新渲染

- 可以理解是在当前 task 执行结束后立即执行的任务。也就是说，在当前 task 任务后，下一个 task 之前，在渲染之前。
  所以它的响应速度相比 setTimeout（setTimeout 是 task）会更快，因为无需等渲染。也就是说，在某一个 macrotask 执行完后，就会将在它执行期间产生的所有 microtask 都执行完毕（在渲染前）
