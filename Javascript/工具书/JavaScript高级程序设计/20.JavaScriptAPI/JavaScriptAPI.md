- [JavaScript API](#javascript-api)
  - [File API 与 Blob API](#file-api-与-blob-api)
    - [File 类型](#file-类型)
      - [FileReader 类型](#filereader-类型)
      - [FileReaderSync 类型](#filereadersync-类型)
    - [Blob 与部分读取](#blob-与部分读取)
    - [对象 URL 与 Blob](#对象-url-与-blob)
- [小结](#小结)

## JavaScript API

### File API 与 Blob API

#### File 类型

File API 仍然以表单中的文件输入字段为基础，但是增加了直接访问文件信息的能力。HTML5 在 DOM 上为文件输入元素添加了 files 集合

##### FileReader 类型

- `readAsText(file, encoding)` 从文件中读取纯文本内容并保存在 result 属性中。第二个参数表示编码，是可选的。
- `readAsDataURL(file)` 读取文件并将内容的数据 URI 保存在 result 属性中。
- `readAsBinaryString(file)` 读取文件并将每个字符的二进制数据保存在 result 属性中
- `readAsArrayBuffer(file)` 读取文件并将文件内容以 ArrayBuffer 形式保存在 result 属性。

```js
let filesList = document.getElementById('files-list');

filesList.addEventListener('change', event => {
  let info = '',
    output = document.getElementById('output'),
    progress = document.getElementById('progress'),
    files = event.target.files,
    type = 'default',
    reader = new FileReader();

  if (/image/.test(files[0].type)) {
    reader.readAsDataURL(files[0]);
    type = 'image';
  } else {
    reader.readAsText(files[0]);
    type = 'text';
  }

  reader.onerror = function () {
    output.innerHTML = 'Could not read file, error code is ' + reader.error.code;
  };

  reader.onprogress = function (event) {
    if (event.lengthComputable) {
      progress.innerHTML = `${event.loaded}/${event.total}`;
    }
  };

  reader.onload = function () {
    let html = '';
    switch (type) {
      case 'image':
        html = `<img src="${reader.result}">`;
        break;
      case 'text':
        html = reader.result;
        break;
    }
    output.innerHTML = html;
  };
});
```

##### FileReaderSync 类型

顾名思义，FileReaderSync 类型就是 FileReader 的同步版本。这个类型拥有与 FileReader 相同的方法，只有在整个文件都加载到内存之后才会继续执行。FileReaderSync 只在工作线程中可用，因为如果读取整个文件耗时太长则会影响全局。

```js
// worker.js
self.onmessage = messageEvent => {
  const syncReader = new FileReaderSync();
  console.log(syncReader); // FileReaderSync {}
  // 读取文件时阻塞工作线程
  const result = syncReader.readAsDataURL(messageEvent.data[0]);
  // PDF 文件的示例响应
  console.log(result); // data:application/pdf;base64,JVBERi0xLjQK...
  // 把 URL 发回去
  self.postMessage(result);
};

// index.html
const worker = new Worker(
  'http://192.168.0.168:8080/JavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/20.JavaScriptAPI/worker.js'
);

let filesList = document.getElementById('files-list');

filesList.addEventListener('change', event => {
  let info = '',
    output = document.getElementById('output'),
    files = event.target.files,

  worker.postMessage(files);

  worker.onmessage = ev => {
    html = `<img src="${ev.data}">`;
    output.innerHTML = html;
  };
});
```

#### Blob 与部分读取

blob 表示二进制大对象（binary larget object），是 JavaScript 对不可修改二进制数据的封装类型。
某些情况下，可能需要读取部分文件而不是整个文件。为此，File 对象提供了一个名为 `slice()` 的方法。`slice()` 方法接收两个参数：起始字节和要读取的字节数。这个方法返回一个 Blob 的实例，而 Blob 实际上是 File 的超类。

#### 对象 URL 与 Blob

要创建对象 URL，可以使用 window.URL.createObjectURL()方法并传入 File 或 Blob 对象。这个函数返回的值是一个指向内存中地址的字符串。

```js
const url = window.URL.createObjectURL(files[0]);
```

## 小结

除了定义新标签，HTML5 还定义了一些 JavaScript API。这些 API 可以为开发者提供更便捷的 Web
接口，暴露堪比桌面应用的能力。本章主要介绍了以下 API。

- Atomics API 用于保护代码在多线程内存访问模式下不发生资源争用。
- postMessage() API 支持从不同源跨文档发送消息，同时保证安全和遵循同源策略。
- Encoding API 用于实现字符串与缓冲区之间的无缝转换（越来越常见的操作）。
- File API 提供了发送、接收和读取大型二进制对象的可靠工具。
- 媒体元素<audio>和<video>拥有自己的 API，用于操作音频和视频。并不是每个浏览器都会支
  持所有媒体格式，使用 canPlayType()方法可以检测浏览器支持情况。
- 拖放 API 支持方便地将元素标识为可拖动，并在操作系统完成放置时给出回应。可以利用它创
  建自定义可拖动元素和放置目标。
- Notifications API 提供了一种浏览器中立的方式，以此向用户展示消通知弹层。
- Streams API 支持以全新的方式读取、写入和处理数据。
- Timing API 提供了一组度量数据进出浏览器时间的可靠工具。
- Web Components API 为元素重用和封装技术向前迈进提供了有力支撑。
- Web Cryptography API 让生成随机数、加密和签名消息成为一类特性。
