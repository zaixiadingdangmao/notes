- [this、call 和 apply](#thiscall-和-apply)
  - [1. this](#1-this)
    - [1.1 this 的指向](#11-this-的指向)
      - [1. 作为对象的方法调用](#1-作为对象的方法调用)
      - [2. 作为普通函数调用](#2-作为普通函数调用)
      - [3. 构造器调用](#3-构造器调用)
      - [4. Function.prototype.call 或 Function.prototype.apply 调用](#4-functionprototypecall-或-functionprototypeapply-调用)
    - [1.2 丢失的 this](#12-丢失的-this)
  - [2. call 和 apply](#2-call-和-apply)
    - [2.1 call 和 apply 的区别](#21-call-和-apply-的区别)
    - [2.2 call 和 apply 的用途](#22-call-和-apply-的用途)
      - [1. 改变 this 指向](#1-改变-this-指向)
    - [2. 借用其他对象的方法](#2-借用其他对象的方法)

## this、call 和 apply

### 1. this

跟别的语言大相径庭的是，JavaScript 的 this 总是指向一个对象，而具体指向哪个对象是在运行时基于函数的执行环境动态绑定的，而非函数被声明时的环境。

#### 1.1 this 的指向

除去不常用的 with 和 eval 的情况，具体到实际应用中，this 的指向大致可以分为以下 4 种

- 作为对象的方法调用。
- 作为普通函数调用。
- 构造器调用。
- `Function.prototype.call` 或 `Function.prototype.apply` 调用。

##### 1. 作为对象的方法调用

当函数作为对象的方法被调用时，this 指向该对象：

```js
var obj = {
  a: 1,
  getA: function () {
    alert(this === obj); // 输出：true
    alert(this.a); // 输出: 1
  }
};
obj.getA();
```

##### 2. 作为普通函数调用

当函数不作为对象的属性被调用时，也就是我们常说的普通函数方式，此时的 this 总是指向全局对象。在浏览器的 JavaScript 里，这个全局对象是 window 对象:

```js
window.name = 'globalName';
var getName = function () {
  return this.name;
};

console.log(getName()); // 输出：globalName

// 或者：

window.name = 'globalName';
var myObject = {
  name: 'sven',
  getName: function () {
    return this.name;
  }
};
var getName = myObject.getName;
console.log(getName()); // globalName
```

> 严格模式下，这种情况 this 指向 undfint

##### 3. 构造器调用

当用 new 运算符调用函数时，该函数总会返回一个对象，通常情况下，构造器里的 this 就指向返回的这个对象，见如下代码：

```js
var MyClass = function () {
  this.name = 'sven';
};
var obj = new MyClass();
alert(obj.name); // 输出：sven
```

但用 new 调用构造器时，如果构造器显式地返回了一个 object 类型的对象，那么此次运算结果最终会返回这个对象，而不是我们之前期待的 this：

```js
var MyClass = function () {
  this.name = 'sven';
  return {
    // 显式地返回一个对象
    name: 'anne'
  };
};
var obj = new MyClass();
alert(obj.name); // 输出：anne
```

如果构造器不显式地返回任何数据，或者是返回一个非对象类型的数据，就不会造成上述问题：

```js
var MyClass = function () {
  this.name = 'sven';
  return 'anne'; // 返回 string 类型
};
var obj = new MyClass();
alert(obj.name); // 输出：sven
```

##### 4. Function.prototype.call 或 Function.prototype.apply 调用

跟普通的函数调用相比，用 Function.prototype.call 或 Function.prototype.apply 可以动态地改变传入函数的 this：

```js
var obj1 = {
  name: 'sven',
  getName: function () {
    return this.name;
  }
};
var obj2 = {
  name: 'anne'
};
console.log(obj1.getName()); // 输出: sven
console.log(obj1.getName.call(obj2)); // 输出：anne
```

#### 1.2 丢失的 this

```js
var obj = {
  myName: 'sven',
  getName: function () {
    return this.myName;
  }
};
console.log(obj.getName()); // 输出：'sven'
var getName2 = obj.getName;
console.log(getName2()); // 输出：undefined
```

再看另一个例子，document.getElementById 这个方法名实在有点过长，我们大概尝试过用一个短的函数来代替它，如同 prototype.js 等一些框架所做过的事情：

```js
var getId = function (id) {
  return document.getElementById(id);
};
getId('div1');
```

我们也许思考过为什么不能用下面这种更简单的方式：

```js
var getId = document.getElementById;
getId('div1');
```

在 Chrome、Firefox、IE10 中执行过后就会发现，这段代码抛出了一个异常。这是因为许多
引擎的 document.getElementById 方法的内部实现中需要用到 this。这个 this 本来被期望指向 document，当 getElementById 方法作为 document 对象的属性被调用时，方法内部的 this 确实是指向 document 的。
但当用 getId 来引用 document.getElementById 之后，再调用 getId，此时就成了普通函数调用，函数内部的 this 指向了 window，而不是原来的 document。

我们可以尝试利用 apply 把 document 当作 this 传入 getId 函数，帮助“修正”this：

```js
document.getElementById = (function (func) {
  return function () {
    return func.apply(document, arguments);
  };
})(document.getElementById);
var getId = document.getElementById;
var div = getId('div1');
```

### 2. call 和 apply

#### 2.1 call 和 apply 的区别

Function.prototype.call 和 Function.prototype.apply 都是非常常用的方法。它们的作用一模一样，区别仅在于传入参数形式的不同

```js
// call 不限制参数
var func = function (a, b, c) {
  alert([a, b, c]); // 输出 [ 1, 2, 3 ]
};
func.call(null, 1, 2, 3);

// apply 两个参数 第二个为数组（带下标的集合）
var func = function (a, b, c) {
  alert([a, b, c]); // 输出 [ 1, 2, 3 ]
};
func.apply(null, [1, 2, 3]);
```

#### 2.2 call 和 apply 的用途

##### 1. 改变 this 指向

call 和 apply 最常见的用途是改变函数内部的 this 指向

#### 2. 借用其他对象的方法

```js
var A = function (name) {
  this.name = name;
};
var B = function () {
  A.apply(this, arguments);
};
B.prototype.getName = function () {
  return this.name;
};
var b = new B('sven');
console.log(b.getName()); // 输出： 'sven'
```

```js
(function () {
  Array.prototype.push.call(arguments, 3);
  console.log(arguments); // 输出[1,2,3]
})(1, 2);
```
