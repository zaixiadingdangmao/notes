# this 指向问题

- [this 指向问题](#this-指向问题)
  - [全局作用域](#全局作用域)
  - [构造函数](#构造函数)
  - [类](#类)
  - [bind、call、aplly 修改 this 的指向](#bindcallaplly-修改-this-的指向)
  - [箭头函数](#箭头函数)
  - [事件处理函数](#事件处理函数)

---

this 的 基本原则：**谁调用 this 的宿主，this 就指向谁**

## 全局作用域

在全局作用域下 window === this

以下代码都等于 window

```js
console.log(this);
console.log(self);
console.log(window);
console.log(frames);
console.log(globalThis);
```

## 构造函数

this 指向这个构造函数的实例

```js
function People(nmae, age) {
  this.nmae = nmae;
  this.nmae = age;

  // return {
  //   name: '小张',
  //   age: 22
  // };
}

let zxl = new People('zxl', 18);
console.log(zxl);
```

new 一个构造函数的过程

1. 创建一个空对象
2. 把属性和方法设置添加到对象上
3. 把 this 的指向指向对象
4. 将对象的`__proto__` 跟函数的 `Prototype` 做对应

## 类

this 指向这个构造函数的实例。
在继承类中调用 this 前必须调用 `super()`
对象方法内部的 this 指向最近的引用

```js
class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  say() {
    console.log(`你好，我是${this.name}，今年${this.age}`);
  }
}

class Zxl extends People {
  constructor(action) {
    // 相当于 new People('zxl', 18)
    super('zxl', 18);
    this.action = action;
  }
  behavior() {
    console.log(`${this.name}正在${this.action}`);
  }
}

let zxl = new Zxl('吃饭');
```

## bind、call、aplly 修改 this 的指向

```js
var obj = {
  a: 1,
};
var obj2 = {
  a: 100,
};

var a = 2;

function fun(b, c) {
  console.log(this.a, b, c);
}

// bind 只会执行一次
let fun1 = fun.bind(obj, 2, 3);
fun1(); // 1 2 3

let fun2 = fun1.bind(obj2, 2, 3);
fun2(); // 1 2 3

fun.call(obj, 2, 3); // 1 2 3
fun.apply(obj, [2, 3]); // 1 2 3
```

**重写**

```js
// call
Function.prototype.myCall = function (context) {
  if (typeof this !== 'function') {
    throw new Error('Type error');
  }

  let args = [...arguments].splice(1);
  let result = null;

  context = context || window;

  const funSymbol = Symbol();
  context[funSymbol] = this;

  result = context[funSymbol](...args);

  delete context[funSymbol];

  return result;
};

// apply
Function.prototype.myApply = function (context) {
  if (typeof this !== 'function') {
    throw new Error('Type error');
  }

  let result = null;
  context = context || window;

  const funSymbol = Symbol();
  context[funSymbol] = this;

  if (arguments[1]) {
    result = context[funSymbol](...arguments[1]);
  } else {
    result = context[funSymbol]();
  }

  delete context[funSymbol];

  return result;
};
```

## 箭头函数

箭头函数是忽略任何形式的 this 指向的改变

静态函数一定不是一个构造器

箭头函数内部的 this 指向 外层非箭头函数的作用域的 this 指向

## 事件处理函数

this 总是指向被绑定的 DOM 元素
