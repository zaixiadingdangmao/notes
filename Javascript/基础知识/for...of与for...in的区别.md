# for...of 与 for...in 的区别

- [for...of 与 for...in 的区别](#forof-与-forin-的区别)
  - [for of](#for-of)
  - [for in](#for-in)

---

## for of

用于遍历**可迭代对象**定义要迭代的数据，遍历出来的是 Value

包括（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）

```js
let arr = [1, 2, 3];
let string = '123';
// 可迭代对象 (Symbol.iterator)
for (const v of string) {
  console.log(v);
}
```

## for in

以**任意顺序**迭代对象的**可枚举属性**，包括原型上的属性，遍历出来的是 key

> **提示：**`for...in`不应该用于迭代一个关注索引顺序的 [`Array`]
> 如果只考虑本身的属性可以使用`hasOwnProperty()` 或者 ` getOwnPropertyNames()`

```js
let obj = { name: 'zxl', age: 18 };
for (const key in obj) {
  if (Object.hasOwnProperty.call(obj, key)) {
    console.log(key); // name age
  }
}
```

可修改属性描述 `enumerable` 属性来判断是否枚举

```js
let obj = { name: 'zxl', age: 18 };
Object.defineProperty(obj, 'sex', {
  value: '男',
  enumerable: true, // 是否枚举
});
for (const key in obj) {
  console.log(key); // name age sex
}
```
