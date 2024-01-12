# flex 布局实现类似 grid-gap 效果

<img src="https://gcore.jsdelivr.net/gh/zaixiadingdangmao/imageStore/2022-05-05_11-55-10.jpeg" alt="2022-05-05_11-55-10" style="zoom:50%;" />

代码如下：

```scss
.flex {
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;

  .item {
    // 间距为 4 一行两个间距所以为 8
    width: calc((100% - 8px) / 3);
    height: 100%;
    overflow: hidden;

    // 从第 4 个开始 每一个 item 都需要 top
    &:nth-child(n + 4) {
      margin-top: 4px;
    }

    // 3n + 2 n 为周期长度 （n = 0；3n + 2 = 2；）
    &:nth-child(3n + 2) {
      margin-left: 4px;
      margin-right: 4px;
    }
  }
}
```
