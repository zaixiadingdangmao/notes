- [影子 DOM（Shadow DOM）](#影子-domshadow-dom)
  - [Shadow tree](#shadow-tree)

## 影子 DOM（Shadow DOM）

hadow DOM 为封装而生。它可以让一个组件拥有自己的「影子」DOM 树，这个 DOM 树不能在主文档中被任意访问，可能拥有局部样式规则，还有其他特性。
浏览器在内部使用 DOM/CSS 来绘制它们。这个 DOM 结构一般来说对我们是隐藏的，但我们可以在开发者工具里面看见它。比如，在 Chrome 里，我们需要打开「Show user agent shadow DOM」选项。

### Shadow tree

一个 DOM 元素可以有以下两类 DOM 子树：

1. Light tree（光明树） —— 一个常规 DOM 子树，由 HTML 子元素组成。我们在之前章节看到的所有子树都是「光明的」。
2. Shadow tree（影子树） —— 一个隐藏的 DOM 子树，不在 HTML 中反映，无法被察觉。

```html
<style>
  /* 文档样式对 #elem 内的 shadow tree 无作用 (1) */
  p {
    color: red;
  }
</style>

<div id="elem"></div>

<script>
  elem.attachShadow({ mode: 'open' });
  // shadow tree 有自己的样式 (2)
  elem.shadowRoot.innerHTML = `
    <style> p { font-weight: bold; } </style>
    <p>Hello, John!</p>
  `;

  // <p> 只对 shadow tree 里面的查询可见 (3)
  alert(document.querySelectorAll('p').length); // 0
  alert(elem.shadowRoot.querySelectorAll('p').length); // 1
</script>
```

外部样式无法操作 shadow tree，但内部样式有效，可以通过 shadow tree 内部的元素，我们可以从树的内部查询
