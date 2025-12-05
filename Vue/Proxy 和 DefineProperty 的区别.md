# Proxy 和 DefineProperty 的区别

简单概括为：`defineProperty` 是劫持对象的属性，而 `proxy` 是代理整个对象

## Proxy

`Proxy` 本质上是创建一个代理对象，从而实现基本操作的拦截和自定义，比如查找、赋值、函数调用等等操作，包括 `defineProperty`。`proxy` 代理对象，基础数据类型代理不了，所有才有了 Vue3 中的 `ref` 基础数据类型需要 `.value`, 同时也存在解构后丢失响应，也不能整体替换对象这些问题。

## DefineProperty

`defineProperty` 允许你在一个对象上定义一个新属性，或者修改现有属性。可以精准控制对象的属性，比如是否可写，可枚举，可配置等等。主要是正对对象属性的控制，所以在 Vue2 中直接通过下标或者 `length` 修改数组是无法触发响应的，所以需要重写数组的方法。
