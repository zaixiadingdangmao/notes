# HTML DOM API

## History

**`History`** 接口允许操作浏览器的曾经在标签页或者框架里访问的会话历史记录

### History.pushState()

方法向当前浏览器会话的历史堆栈中添加一个状态

```js
history.pushState(state, title[, url])
```

H5 防安卓原生滑动，不退回上一个路由记录，入栈一个当前路径，然后滑动退出的时候还是当前页面从而实现对应的效果

```
// 监听当活动历史记录条目更改
window.addEventListener('popstate', ev => {
  ev.preventDefault();
  alert('返回上一级');
});

// 入栈一个当前路径
window.history.pushState(null, null, location.href)
```

### History.replaceState()

修改当前历史记录实体，如果你想更新当前的 state 对象或者当前历史实体的 URL 来响应用户的的动作的话这个方法将会非常有用
