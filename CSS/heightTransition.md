# heightAutoTransition 高度自适应过度

一般都是用 `max-height` 来实现，其实可以使用 `grid` 来实现

```css
.wrapper {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.5s ease-out;
}

.wrapper.is-open {
  grid-template-rows: 1fr;
}

.inner {
  overflow: hidden;
}
```
