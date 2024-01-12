# Web Worker 多线程

- [Web Worker 多线程](#web-worker-多线程)
  - [一、使用](#一使用)
    - [1.1 主线程](#11-主线程)
    - [1.2 Worker](#12-worker)
    - [1.3 Worker 加载脚本](#13-worker-加载脚本)
    - [1.4 错误处理](#14-错误处理)
    - [1.5 关闭 Worker](#15-关闭-worker)
  - [二、同页面的 Web Worker](#二同页面的-web-worker)

---

[http://www.ruanyifeng.com/blog/2018/07/web-worker.html](http://www.ruanyifeng.com/blog/2018/07/web-worker.html)

## 一、使用

### 1.1 主线程

主线程采用`new`命令，调用`Worker()`构造函数，可以接受两个参数。第一个参数是脚本的网址（必须遵守同源政策），该参数是必需的，且只能加载 JS 脚本，否则会报错。第二个参数是配置对象，该对象可选。它的一个作用就是指定 Worker 的名称，用来区分多个 Worker 线程。

```JavaScript
const url = './js/worker-js01.js';
const worker = new Worker(url,{ name : 'myWorker' }-);
```

`Worker()` 构造函数的参数是一个脚本文件，该文件就是 Worker 线程所要执行的任务。由于 Worker 不能读取本地文件，所以这个脚本必须来自网络，或者通过字符串转换地址

```JavaScript
const data = `
    // worker线程加载脚本 TODO: Worker 线程无法读取本地文件,加载的脚本必须来自网络
    // importScripts('hello1.js', 'http~.js');

    // 监听主线程传过来的信息
    self.onmessage = e => {
      console.log('主线程传来的信息：', e.data);
      // do something
    };

    // 发送信息给主线程
    self.postMessage('来自worker线程');

    // 关闭worker线程
    function closeSon() {
      return self.close();
    }`;
const blob = new Blob(data);
const url = window.URL.createObjectURL(blob);
const worker = new Worker(url);

```

主线程调用`worker.postMessage()`方法，向 Worker 发消息

`postMessage(aMessage, transferList)`

`aMessage` 需要发送的消息

`transferList` 可选对象的数组，用于传递所有权，如果一个对象所有权被转移，在发送它的上下文将变为不可用，并且只有在它被发送到的 worker 中可用

```JavaScript
// 主线程发送消息
let arr = [];
let i = 1;
while (i <= 1000000) {
  arr.push(i);
  i++;
}
worker.postMessage(arr);
```

主线程通过`worker.onmessage`指定监听函数，接收子线程发回来的消息

```JavaScript
// 主线程接受子线程发回来的消息

// worker.onmessage = ev => {
//   let { data } = ev;
//   console.log('主线监听消息', data);
// };

worker.addEventListener('message', ev => {
  let { data } = ev;
  console.log('主线监听消息', data);
});
```

Worker 完成任务以后，主线程就可以把它关掉

```JavaScript
// 关闭子线程
worker.terminate();
```

### 1.2 Worker

Worker 线程内部需要有一个监听函数，监听`message`事件

```JavaScript
this.addEventListener('message', onMessageFun);

function onMessageFun(e) {
  console.log('e.data', e.data);
  let sum = e.data.reduce((t, v) => {
    return t + v;
  });
}
```

> `this`同`self`代表子线程自身，即子线程的全局对象
> 除了使用`self.addEventListener()`指定监听函数，也可以使用`self.onmessage`指定。监听函数的参数是一个事件对象，它的`data`属性包含主线程发来的数据

`self.postMessage()`方法用来向主线程发送消息

```JavaScript
this.postMessage(sum);

```

### 1.3 Worker 加载脚本

Worker 内部如果要加载其他脚本，有一个专门的方法`importScripts()`

```JavaScript
// 加载其他脚本
importScripts('../js/worker-js02.js',...);

```

### 1.4 错误处理

```JavaScript
// 监听线程错误
worker.onerror = e => {
  // ...
};

// 或者
worker.addEventListener('error', event => {
  // ...
});

```

### 1.5 关闭 Worker

使用完毕，为了节省系统资源，必须关闭 Worker

```JavaScript
// 主线程
worker.terminate();

// Worker 线程
self.close();

```

## 二、同页面的 Web Worker

通常情况下，Worker 载入的是一个单独的 JavaScript 脚本文件，但是也可以载入与主线程在同一个网页的代码

```HTML
<!DOCTYPE html>
  <body>
    <script id="worker" type="app/worker">
      addEventListener('message', function () {
        postMessage('some message');
      }, false);
    </script>
  </body>
</html>
```

上面是一段嵌入网页的脚本，注意必须指定`<script>`标签的`type`属性是一个浏览器不认识的值，上例是`app/worker`然后，读取这一段嵌入页面的脚本，用 Worker 来处理

```JavaScript
var blob = new Blob([document.querySelector('#worker').textContent]);
var url = window.URL.createObjectURL(blob);
var worker = new Worker(url);

worker.onmessage = function (e) {
  // e.data === 'some message'
};
```
