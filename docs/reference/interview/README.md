# 2022面试题

## JavaScript

### `??` 和 `||` 区别

::: details 点击展开详解

```js
值1 ?? 值2
值1 || 值2
```
使用 ?? 时，只有当值1为 `null` 或 `undefined` 时才返回值2；

使用 || 时，值1会转换为布尔值判断，为 `true` 返回值1，`false` 返回值2

例如：

```js
// ??
undefined ?? 2	// 2
null ?? 2		// 2
0 ?? 2			// 0
"" ?? 2			// ""
true ?? 2		// true
false ?? 2		// false

// ||
undefined || 2	// 2
null || 2		// 2
0 || 2			// 2
"" || 2			// 2
true || 2		// true
false || 2		// 2

```

:::

### `NaN` 和 `number` 区别

### JS设计模式

  * 工厂模式
    
    定义一个用于创建对象的接口，这个接口由子类决定实例化哪一个类。该模式使一个类的实例化延迟到了子类。而子类可以重写接口方法以便创建的时候指定自己的对象类型。

::: details 点击展开详解
```js
class Product {
  constructor(name) {
    this.name = name
  }
  init() {
    console.log('init')
  }
  fun() {
    console.log('fun')
  }
}

class Factory {
  create(name) {
    return new Product(name)
  }
}

// use
let factory = new Factory()
let p = factory.create('p1')
p.init()
p.fun()

```
:::

  * 单例模式
  * 原型模式

## 爱范儿面试
### 浏览器原理
浏览器获取到html文件后，会对文件进行解析，形成DOM树，紧接着解析CSS，生成Style Rules。接着对DOM树和Style Rules合成Render树。接着进入Layout阶段，也就是为每个节点分配一个应出现在屏幕上的坐标。随后调用GPU进行绘制，遍历Render树的节点，并将元素呈现出来。

### 原型继承
* 原型链继承：一个引用类型继承另一个引用类型的属性和方法，使所有需要继承的属性都被定义在实例对象上

### 讲讲装饰器

### 跨域

### ES6常用的有哪些

### Promise是宏观还是微观，并且说下Promise的作用

### 扩展运算符是浅拷贝还是深拷贝，并且说说深拷贝有哪些方法

### JS为什么要设计成单线程


### 数组的forEach和map区别，map和every区别

### 框架的router和html5 history有什么区别

#### 延伸的问题，哈希router有什么优缺点

### 讲讲堆 栈

### 小程序的Component组件能不能单独成为一个页面

### 小程序云函数

### 打包工具用过哪些（延伸出来的问题：webpack 3 4 5区别）

### React用过哪个版本（延伸出来的问题：`React16`之后为什么推荐用函数式）

### html5中的video标签有什么限制，如果用来做直播的话有什么变化

### 讲讲作用域

### Taro打包后的源码有没有看过
## TypeScript

* `types` 和 `interface` 有什么区别？

::: details 点击展开详解

#### type 可以而 interface 不行

* type 可以声明基本类型别名，联合类型，元组等类型

```ts
// 基本类型别名
type Name = string

// 联合类型
interface Dog {
    wong();
}
interface Cat {
    miao();
}

type Pet = Dog | Cat

// 具体定义数组每个位置的类型
type PetList = [Dog, Pet]

```

* type 语句中还可以使用 typeof 获取实例的 类型进行赋值

```ts
// 当你想获取一个变量的类型时，使用 typeof
let div = document.createElement('div');
type B = typeof div
```

#### interface 可以而 type 不行

* interface 能够声明合并

```ts
interface User {
  name: string
  age: number
}

interface User {
  sex: string
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
一般来说，如果不清楚什么时候用interface/type，能用 interface 实现，就用 interface, 如果不能就用 type
:::
  
## Vue

* vue.sync()这个方法是干嘛用的？

::: details 点击展开详解

实现父子组件数据的双向绑定，简化功能逻辑代码

:::

* Vue.$mount的原理