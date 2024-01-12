- [面向对象的 JavaScript](#面向对象的-javascript)
  - [1. JavaScript 中的原型继承](#1-javascript-中的原型继承)

## 面向对象的 JavaScript

### 1. JavaScript 中的原型继承

在原型继承方面，JavaScript 的实现原理和 Io 语言非常相似，JavaScript 也同样遵守这些原型编程的基本规则

- 所有的数据都是对象。
- 要得到一个对象，不是通过实例化类，而是找到一个对象作为原型并克隆它。
- 对象会记住它的原型。
- 如果对象无法响应某个请求，它会把这个请求委托给它自己的原型。

2. 要得到一个对象，不是通过实例化类，而是找到一个对象作为原型并克
   在 Chrome 和 Firefox 等向外暴露了对象**proto**属性的浏览器下，我们可以通过下面这段代码来理解 new 运算的过程：

```js
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

var objectFactory = function () {
  var obj = new Object(), // 从Object.prototype 上克隆一个空的对象
    Constructor = [].shift.call(arguments); // 取得外部传入的构造器，此例是Person

  obj.__proto__ = Constructor.prototype; // 指向正确的原型
  var ret = Constructor.apply(obj, arguments); // 借用外部传入的构造器给obj 设置属性

  return typeof ret === 'object' ? ret : obj; // 确保构造器总是会返回一个对象
};

var a = objectFactory(Person, 'sven');

console.log(a.name); // 输出：sven
console.log(a.getName()); // 输出：sven
console.log(Object.getPrototypeOf(a) === Person.prototype); // 输出：true
```
