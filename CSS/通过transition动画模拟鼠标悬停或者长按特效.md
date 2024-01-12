# 通过 transition 动画模拟鼠标悬停或者长按特效

添加 `transition` 动画持续时间，然后通过 `transitionend` 事件监听动画是否完成，完成以后触发我们的函数

```html
<div
  class="element"
  @mouseenter="handlereenter"
  @mouseleave="handlereleave"
  @transitionend="transitionend">
</div>
```

```js
transitionend() {
  // ...
},

handlereenter(evt) {
  const { target } = evt;
  target.classList.add('element__active');
},

handlereleave(evt) {
  const { target } = evt;
  target.classList.remove('element__active');
},
```

```scss
.element {
  cursor: pointer;
  opacity: 0.99;

  &__active {
    opacity: 0.999;
    /* 一秒结束以后触发 transitionend 函数*/
    transition: opacity 1s;
  }
}
```
