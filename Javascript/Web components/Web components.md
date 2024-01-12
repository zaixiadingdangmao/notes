# Web components

我们划分组件一般有：

- 自己的 JavaScript 类。
- DOM 结构，并且只由自己的类管理，无法被外部代码操作。（「封装」原则）。
- CSS 样式，作用在这个组件上。
- API：事件，类方法等等，让组件可以与其他组件交互。

而现在浏览器已经原生支持了 Web components，我们就不需要自己去模拟组件化的结构了

- `Custom elements` —— 用于自定义 HTML 元素.
- `Shadow DOM` —— 为组件创建内部 DOM，它对外部是不可见的。
- `CSS Scoping` —— 申明仅应用于组件的 Shadow DOM 内的样式。
- `Event retargeting` 以及更多的小东西，让自定义组件更适用于开发工作。
