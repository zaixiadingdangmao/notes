# scroll-view

使用 scroll-view 时，导致 fixed 定位的元素出现层级问题 (和 css 中使用 transform 导致错误很像)

```css
.wx-scroll-view {
  -webkit-overflow-scrolling: auto;
}
```

不固定高度使用、基本同 flex overflow-auto, 必须使用 scroll-view 不然 ios 不能滚动

```css
.wx-scroll-view {
  flex: 1 0 auto;
  overflow: auto
}
```
