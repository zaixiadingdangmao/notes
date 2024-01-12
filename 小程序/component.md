# component

## 样式隔阂

小程序 component 作为组件时，全局样式不生效

## 虚拟节点

这个地方很烦人，小组件会默认给你多套一层，如果要去掉可以增加：

```js
const component = {
  options: {
    virtualHost: true,
  },
};
```

## 和其他组件通信

当嵌套 `slot` 的时候，组件之间通信可以使用：

```js
// 父组件
const parentComponent = {
  relations: {
    // 需要通信的组件
    '../scroll-options-panel/scroll-options-panel': {
      type: 'child',
      linked(target) {
        this.children.push(target);
        target.index = this.children.length - 1;
        this.updateItems();
      },
      unlinked(target) {
        this.children = this.children.filter(
          (item) => item.index !== target.index
        );
        this.updateItems();
      },
    },
  },
};
// 子组件
const childComponent = {
  relations: {
    '../scroll-options/scroll-options': {
      type: 'parent',
    },
  },
};
```

两个组件都需要接通
