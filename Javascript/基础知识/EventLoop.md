# 事件循环

**事件循环** 的概念非常简单。它是一个在 JavaScript 引擎等待任务，执行任务和进入休眠状态等待更多任务这几个状态之间转换的无限循环

引擎的一般算法：

1. 当有任务时：
   - 从最先进入的任务开始执行
2. 休眠直到出现任务，然后转到第 1 步

当我们浏览一个网页时就是上述这种形式。JavaScript 引擎大多数时候不执行任何操作，它仅在脚本/处理程序/事件激活时执行

任务示例：

- 当外部脚本 `<script src="...">` 加载完成时，任务就是执行它
- 当用户移动鼠标时，任务就是派生出 `mousemove` 事件和执行处理程序
- 当安排的（scheduled）`setTimeout` 时间到达时，任务就是执行其回调

## 宏任务和微任务

Promise 的处理程序（handlers）`.then`、`.catch` 和 `.finally` 都是异步的
即便一个 promise 立即被 resolve，`.then`、`.catch` 和 `.finally` **下面** 的代码也会在这些处理程序（handler）之前被执行

```js
setTimeout(() => alert('timeout'));

Promise.resolve().then(() => alert('promise'));

alert('code');
```

1. `code` 首先显示，因为它是常规的同步调用
2. `promise` 第二个出现，因为 `then` 会通过微任务队列，并在当前代码之后执行
3. `timeout` 最后显示，因为它是一个宏任务

![image-20220128150036603](https://gcore.jsdelivr.net/gh/zaixiadingdangmao/imageStore/image-20220128150036603.png)
