# webSocket

[文档](http://www.ruanyifeng.com/blog/2017/05/websocket.html)

```JavaScript
let ws = new WebSocket("ws://192.168.0.157:1080/DGE-BIM/message/websocket");

// 连接成功后的回调函数
ws.onopen = () => {
  ws.send("Hello Server!");
  console.log("成功！");
};

// 指定报错时的回调函数
ws.onerror = () => {
  // handle error event
  console.log("错误");
};

// 连接关闭后的回调函数
ws.onclose = () => {
  console.log("错误");
};

// 指定接收后台返回数据
ws.onmessage = event => {
  // var data = event.data;
  console.log(event);
  // 处理数据
};
```
