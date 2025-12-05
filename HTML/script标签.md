# script 标签

浏览器在解析 HTML 的时候，如果遇到一个没有任何属性的 script 标签，就会暂停解析，先发送网络请求获取该 JS 脚本的代码内容，然后让 JS 引擎执行该代码，当代码执行完毕后恢复解析

```html
<script
	src="javascript.js"
	async|defer
></script>
```

## 属性

- `async` 异步加载
- `defer` 延迟加载

## `async` 和 `defer` 的区别

### **async**

当浏览器遇到带有 async 属性的 script 标签时，请求该脚本的网络请求是异步的，不会阻塞浏览器解析 HTML，一旦网络请求回来之后，如果此时 HTML 还没有解析完，浏览器会暂停解析，先让 JS 引擎执行代码，执行完毕后再进行解析，图示如下：
![async](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/021b5dbeddb64db0a7099dc0a4dd076d~tplv-k3u1fbpfcp-watermark.awebp)
所以 async 是不可控的，如果在异步 JS 脚本中获取 DOM，有可能获取的到也有可能获取不到

### **defer**

当浏览器遇到带有 defer 属性的 script 时，获取该脚本的网络请求也是异步的，不会阻塞浏览器解析 HTML，一旦网络请求回来之后，如果此时 HTML 还没有解析完，浏览器不会暂停解析并执行 JS 代码，而是等待 HTML 解析完毕再执行 JS 代码，图示如下：
![defer](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b8313e4787f04c79838fec9961bda0fb~tplv-k3u1fbpfcp-watermark.awebp)

## 执行顺序

多 `script` 标签执行的情况下，可以把 `script` 标签做宏任务，当上一个 `script` 标签中的微任务被执行完毕后，开始解析执行下一个 `script`
