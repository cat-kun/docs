# 2022 面试题

## JavaScript

### `??` 和 `||` 区别

::: details 点击展开详解

```js
值1 ?? 值2;
值1 || 值2;
```

使用 ?? 时，只有当值 1 为 `null` 或 `undefined` 时才返回值 2；

使用 || 时，值 1 会转换为布尔值判断，为 `true` 返回值 1，`false` 返回值 2

例如：

```js
// ??
undefined ?? 2; // 2
null ?? 2; // 2
0 ?? 2; // 0
'' ?? 2; // ""
true ?? 2; // true
false ?? 2; // false

// ||
undefined || 2; // 2
null || 2; // 2
0 || 2; // 2
'' || 2; // 2
true || 2; // true
false || 2; // 2
```

:::

### `NaN` 和 `number` 区别

### JS 设计模式

- 工厂模式

  定义一个用于创建对象的接口，这个接口由子类决定实例化哪一个类。该模式使一个类的实例化延迟到了子类。而子类可以重写接口方法以便创建的时候指定自己的对象类型。

::: details 点击展开详解

```js
class Product {
  constructor(name) {
    this.name = name;
  }
  init() {
    console.log('init');
  }
  fun() {
    console.log('fun');
  }
}

class Factory {
  create(name) {
    return new Product(name);
  }
}

// use
let factory = new Factory();
let p = factory.create('p1');
p.init();
p.fun();
```

:::

- 单例模式
- 原型模式

## 爱范儿面试

### 浏览器原理

浏览器获取到 html 文件后，会对文件进行解析，形成 DOM 树，紧接着解析 CSS，生成 Style Rules。接着对 DOM 树和 Style Rules 合成 Render 树。接着进入 Layout 阶段，也就是为每个节点分配一个应出现在屏幕上的坐标。随后调用 GPU 进行绘制，遍历 Render 树的节点，并将元素呈现出来。

### 原型继承

- 原型链继承：一个引用类型继承另一个引用类型的属性和方法，使所有需要继承的属性都被定义在实例对象上

### 讲讲装饰器

装饰器是一种与类相关的语法，用来修改类和类方法，可以看作是一种语法糖

### 讲讲跨域

跨域是由于浏览器的安全策略，在不同协议 不同域名 不同端口下都会造成跨域问题。解决方案：

- 后端 cors
- jsonp 缺点：只支持 get 请求，不支持其它 http 请求

::: tip
都需要后端配合
:::

### ES6 常用的有哪些

- `let` `const`
- 箭头函数
- 扩展运算符
- 模版字符串
- Promise
- async await
- 解构赋值
- 数组的 includes() keys() values()方法

### Promise 是宏观还是微观，并且说下 Promise 的作用

### 扩展运算符是浅拷贝还是深拷贝，并且说说深拷贝有哪些方法

[参考链接](https://juejin.cn/post/6844904042322198541)

- `扩展运算符`是浅拷贝
- 深拷贝方法：
  - JSON.parse(JSON.stringify()) <strong style="color: red">有弊端 复杂的数据类型会有问题 对象里面如果形成闭环 会报错</strong>
  - Object.assign() <strong style="color: red">部分深拷贝 或者说就是浅拷贝</strong>
  - 迭代递归方法

::: details 点击展开详解
JSON.parse(JSON.stringify())

```js
// 测试数据
var test = { name: 'test' };
var data = {
  a: '123',
  b: 123,
  c: true,
  d: [43, 2],
  e: undefined,
  f: null,
  g: function () {
    console.log('g');
  },
  h: new Set([3, 2, null]),
  i: Symbol('fsd'),
  j: test,
  k: new Map([
    ['name', '张三'],
    ['title', 'Author'],
  ]),
};

JSON.stringify(data);

// data这个对象的属性里基本上包含了所有的数据类型，但通过JSON字符串化后，返回的值却有缺失，原因是JSON在执行字符串化的这个过程时，会先进行一个JSON格式化，获得安全的JSON值，因此如果是非安全的JSON值，就会被丢弃掉。其中undefined、function、symbol这三种类型的值就是非安全的（包括该对象的属性循环赋值该对象），所以格式化后，就被过滤掉了，而set、map这种数据格式的对象，也并没有被正确处理，而是处理成了一个空对象。

// 再看一个极端的例子
// 测试数据
let data = {
  name: 'foo',
  child: null,
};
data.child = data;
// 将这种对象的属性进行循环引用，就形成了一个闭环，执行一下序列化，看看结果
```

![](https://tva3.sinaimg.cn/large/84295ee1gy1h24et2r5b0j21120j0th2.jpg)

```js
// 迭代递归解决闭环问题
function deepCopy(data, hash = new WeakMap()) {
  if (typeof data !== 'object' || data === null) {
    throw new TypeError('传入参数不是对象');
  }
  // 判断传入的待拷贝对象的引用是否存在于hash中
  if (hash.has(data)) {
    return hash.get(data);
  }
  let newData = {};
  const dataKeys = Object.keys(data);
  dataKeys.forEach((value) => {
    const currentDataValue = data[value];
    // 基本数据类型的值和函数直接赋值拷贝
    if (typeof currentDataValue !== 'object' || currentDataValue === null) {
      newData[value] = currentDataValue;
    } else if (Array.isArray(currentDataValue)) {
      // 实现数组的深拷贝
      newData[value] = [...currentDataValue];
    } else if (currentDataValue instanceof Set) {
      // 实现set数据的深拷贝
      newData[value] = new Set([...currentDataValue]);
    } else if (currentDataValue instanceof Map) {
      // 实现map数据的深拷贝
      newData[value] = new Map([...currentDataValue]);
    } else {
      // 将这个待拷贝对象的引用存于hash中
      hash.set(data, data);
      // 普通对象则递归赋值
      newData[value] = deepCopy(currentDataValue, hash);
    }
  });
  return newData;
}
```

:::

### JS 为什么要设计成单线程

- 因为当时的 JS 主要用来与页面做交互，使用场景单一，没有那么大的复杂场景，所以才设计成单线程。

### 数组的 forEach 和 map 区别，map 和 every 区别

- forEach 会修改原来的数组，而 map 会得到一个新的数组并返回，执行速度上 map 更快
- some 用来判断数组中的元素是否都满足条件，如果满足则返回 true，不会继续迭代

```js
let arr = [1, 10, 18, 30];
arr.some((item) => item > 18); // true
```

- every 用来判断数组中的元素是否都满足条件，如果有一个不满足，则返回 false，不会继续迭代

```js
let arr = [1, 10, 18, 30];
arr.every((item) => item > 11); // false
```

::: tip
some 和 every 相反
:::

### 框架的 router 和 html5 history 有什么区别

#### 延伸的问题，哈希 router 有什么优缺点

### const 为什么能改变对象的属性值

```js
const obj = { a: 1 };
obj.a = 2;
console.log(obj); // {a: 2} 讲讲为什么
```

### 讲讲堆 栈

### 小程序的 Component 组件能不能单独成为一个页面

### 小程序云函数

### 打包工具用过哪些（延伸出来的问题：webpack 3 4 5 区别）

### React 用过哪个版本（延伸出来的问题：`React16`之后为什么推荐用函数式）

因为钩子更简洁，代码量少，用起来比较"轻"，而类比较"重"。而且，钩子是函数，更符合 React 函数式的本质。

<!-- 函数式组件的最大的作用就是可以让你在不编写class的情况下使用state以及其他的 React 特性。 -->

### html5 中的 video 标签有什么限制，如果用来做直播的话有什么不同

### 讲讲作用域

### Taro 打包后的源码有没有看过

### 商品详情页怎样优化到 1 秒内展示首屏内容（假设接口已经优化到 0.2 毫秒，不考虑 loading、骨架屏等）

### 说下常见的 http 请求头

- host
- User-Agent
- Connection
- Accept
- Cookie
- content-type

### 讲讲状态码

- 1xx
- 2xx
- 3xx
- 4xx
- 5xx

### 框架里面如何做数据状态管理，父子组件 爷孙组件传递的数据如何管理

### 缓存

前端缓存主要分为 http 缓存和浏览器缓存

#### http 缓存

- `expires`：服务器使用`expires`头来告诉浏览器它使用当前副本，直到指定的时间为止。
- `cache-control`：它使用 max-age 指定资源被缓存多久，主要是解决了 Expires 一个重大的缺陷，就是它设置的是一个固定的时间点，客户端时间和服务端时间可能有误差。所以一般会把两个头都带上，这种缓存称为强缓存
- `Last-Modified / If-Modified-Since`：Last-Modified 是服务器告诉浏览器该资源的最后修改时间，If-Modified-Since 是请求头带上的，上次服务器给自己的该资源的最后修改时间。然后服务器拿去对比。若资源的最后修改时间大于 If-Modified-Since，说明资源又被改动过，则响应整片资源内容，返回状态码 200；若资源的最后修改时间小于或等于 If-Modified-Since，说明资源无新修改，则响应 HTTP 304，告知浏览器继续使用当前版本。

## TypeScript

- `types` 和 `interface` 有什么区别？

::: details 点击展开详解

#### type 可以而 interface 不行

- type 可以声明基本类型别名，联合类型，元组等类型

```ts
// 基本类型别名
type Name = string;

// 联合类型
interface Dog {
  wong();
}
interface Cat {
  miao();
}

type Pet = Dog | Cat;

// 具体定义数组每个位置的类型
type PetList = [Dog, Pet];
```

- type 语句中还可以使用 typeof 获取实例的 类型进行赋值

```ts
// 当你想获取一个变量的类型时，使用 typeof
let div = document.createElement('div');
type B = typeof div;
```

#### interface 可以而 type 不行

- interface 能够声明合并

```ts
interface User {
  name: string;
  age: number;
}

interface User {
  sex: string;
}

/*
User 接口为 {
  name: string
  age: number
  sex: string 
}
*/
```

#### 总结

一般来说，如果不清楚什么时候用 interface/type，能用 interface 实现，就用 interface, 如果不能就用 type
:::

## Vue

- vue.sync()这个方法是干嘛用的？

::: details 点击展开详解

实现父子组件数据的双向绑定，简化功能逻辑代码

:::

- Vue.$mount 的原理

- Vue 组件之间数据传递（父子组件 兄弟组件 爷孙组件如何传递）

::: details 点击展开详解

父传子：
父组件引用子组件（例如子组件叫 upload），定义一个属性的方式（参数 autoUpload） 传给子组件（属性=值）

```js
<upload
	:autoUpload='false'
>
</upload>
```

子组件在 props 声明一个变量，用来接收父组件的参数（可给默认值）

```js
props: ['autoUpload']
或者
props: {
	autoUpload: {
    type: Boolean,
    default: true,
  }
}
```

此时 upload 子组件的 autoUpload 就变成 false 了

子传父：

子组件的 methods 写一个函数，假设它有 index 属性值，需要传给父组件（发布订阅模式，发布一个事件）

```js
<li @click='handleClick'></li>
methods: {
	handleClick() {
		this.$emit(‘delete’, this.index)
	}
}

父组件去监听子组件的事件（delete 事件），如果父组件监听到了子组件向上触发的delete事件的时候，去执行一个函数（比如叫 handleDelete）

<upload
	@delete=“handleDelete”
>
</upload>

methods: {
	handleDelete(index) {
		console.log(‘delete’, index)
	}
}
```

:::

- 对 MVVM 开发模式的理解

::: details 点击展开详解

MVVM 分为 Model、View、ViewModel 三者。

- Model：代表数据模型，数据和业务逻辑都在 Model 层中定义；
- View：代表 UI 视图，负责数据的展示；
- ViewModel：负责监听 Model 中数据的改变并且控制视图的更新，处理用户交互操作；
  Model 和 View 并无直接关联，而是通过 ViewModel 来进行联系的，Model 和 ViewModel 之间有着双向数据绑定的联系。因此当 Model 中的数据改变时会触发 View 层的刷新，View 中由于用户交互操作而改变的数据也会在 Model 中同步。
  这种模式实现了 Model 和 View 的数据自动同步，因此开发者只需要专注对数据的维护操作即可，而不需要自己操作 dom。

:::

- Vue 有哪些指令？

  - v-if、v-for、v-show、v-html、v-text、v-slot、v-on、v-bind 等

- v-if 和 v-show 区别？

  - v-show 仅仅控制元素的显示方式，将 display 属性在 block 和 none 来回切换；而 v-if 会控制这个 DOM 节点的存在与否。当我们需要经常切换某个元素的显示/隐藏时，使用 v-show 会更加节省性能上的开销；当只需要一次显示或隐藏时，使用 v-if 更加合理

- 简述 Vue 的响应式原理
  - 当一个 Vue 实例创建时，vue 会遍历 data 选项的属性，用 Object.defineProperty 将它们转为 getter/setter 并且在内部追踪相关依赖，在属性被访问和修改时通知变化。 每个组件实例都有相应的 watcher 程序实例，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的 setter 被调用时，会通知 watcher 重新计算，从而致使它关联的组件得以更新。

## React

- React 生命周期

  - 挂载卸载过程
    - constructor()
    - componentWillMount()
    - componentDidMount()
    - componentWillUnmount()
  - 更新过程
    - componentWillReceiveProps(nextProps)
    - shouldComponentUpdate(nextProps, nextState)
    - componentWillUpdate(nextProps, nextState)
    - componentDidUpdate(prevProps, prevState)
    - render()

- React 的 hooks 有了解么，请说下 useState, useCallback 的作用

  - Hooks 的最大的作用就是可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。
  - useState 的功能就是让你在函数式组件中使用 state
  - useEffect()的作用就是指定一个副效应函数，组件每渲染一次，该函数就自动执行一次。组件首次在网页 DOM 加载后，副效应函数也会执行。
  - useContext() 共享状态钩子，如果需要在组件之间共享状态，可以使用 useContext()

- 一个页面有多个 state，太混乱，你要怎么整合

- Vue 的计算属性怎么在 React 中实现

- React 的 memo 的用法

- 一个仓库有个多端的项目，你要怎么进行区分编译
