# Vue 和 React 的区别

## 设计理念不同

`React` 本质就是 `JavaScript`, 组件就是函数，编写组件的语法是 `JSX`

`Vue` 基于标准的 HTML，CSS，JavaScript 构建，提供了一套**声明式**、**组件化**的编程模型

## 组件存在的形式

`React` 中一个组件就是一个函数，一个文件里面可以定义过个函数

`Vue` 中一个 `.vue` 文件就是一个 Vue 组件，而且不能在一个 `.vue` 文件中定义多个组件。他需要通过编译器来把 `.vue` 文件编译成一个组件对象来使用（包含 name、render、setup 等等）

## 响应式系统

`Vue` 基于 `Object.defineProperty` 和 `proxy` 来自动收集和自动更新

`React` 基于 `状态快照`, 他没有专门的响应式对象的概念，需要使用 `useState`每次更新数据需要使用 `set` 函数创建一个新的快照然后重新运行组件函数

## diff 优化

`Vue` 的 diff 颗粒度要比 `React` 更细，Vue 采用 `靶向更新`，只有当被依赖的数据发生变化时，才会通知相应的组件重新渲染进行 diff。（靶向更新：编译阶段找出动态节点打上标记，执行 render 函数阶段找出标记的动态节点，添加到 block 节点的 dynamicChildren 数组中。更新时再从 block 节点的 dynamicChildren 中取出然后进行靶向更新）

`React` 组件中的 `state` 或者 `props` 发生变化时，**整个组件**都会被标记为需要重新渲染(可以用 memo 等方式手动阻止不必要更新)
