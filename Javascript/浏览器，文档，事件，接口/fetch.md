# fetch

## 基本使用方法

```JavaScript
let promise = fetch(url, {
  method: "GET", // POST，PUT，DELETE，等。
  headers: {
    // 内容类型 header 值通常是自动设置的
    // 取决于 request body
    "Content-Type": "text/plain;charset=UTF-8"
  },
  body: undefined // string，FormData，Blob，BufferSource，或 URLSearchParams
  referrer: "about:client", // 或 "" 以不发送 Referer header，
  // 或者是当前源的 url
  referrerPolicy: "no-referrer-when-downgrade", // no-referrer，origin，same-origin...
  mode: "cors", // same-origin，no-cors
  credentials: "same-origin", // omit，include
  cache: "default", // no-store，reload，no-cache，force-cache，或 only-if-cached
  redirect: "follow", // manual，error
  integrity: "", // 一个 hash，像 "sha256-abcdef1234567890"
  keepalive: false, // true
  signal: undefined, // AbortController 来中止请求
  window: window // null
});
```

```JavaScript
fetch('/article/promise-chaining/user.json')
  // 当远程服务器响应时，下面的 .then 开始执行
  .then(function(response) {
    // 当 user.json 加载完成时，response.text() 会返回一个新的 promise
    // 该 promise 以加载的 user.json 为 result 进行 resolve
    return response.text();
  })
  .then(function(text) {
    // ...这是远程文件的内容
    alert(text); // {"name": "iliakan", "isAdmin": true}
  });
```

```JavaScript
// 同上，但是使用 response.json() 将远程内容解析为 JSON
fetch('/article/promise-chaining/user.json')
  .then(response => response.json())
  .then(user => alert(user.name)); // iliakan, got user name
```

## 取消网络请求

`AbortController` 控制器对象，可以根据需求终止一个或者多个 web 请求

```js
let controller = new AbortController();
```

### 属性

- **signal** 它可以用来 with/abort 一个 Web(网络)请求

### 方法

- **abort** 中止一个尚未完成的 Web(网络)请求

```js
let controller = new AbortController();
let { signal } = controller;

function send() {
  fetch('https://mdn.github.io/dom-examples/abort-api/sintel.mp4', {
    signal,
  })
    .then((res) => res.blob())
    .then((res) => {
      console.log(res);
    });
}

function abort() {
  controller.abort();
}
```
