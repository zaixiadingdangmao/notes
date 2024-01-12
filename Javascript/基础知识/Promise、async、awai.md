# Promise、async、await

- [Promise、async、await](#promiseasyncawait)
  - [Promise](#promise)
    - [all](#all)
    - [race](#race)
    - [any](#any)
  - [async 、await](#async-await)

---

## Promise

promise 异步问题同步化解决方案

> new Promise 时 会立即执行，.then 才是异步 微任务

```JavaScript
const promise = new Promise((resolve, reject) => {
  // 模拟获取异步请求
  setTimeout(() => {
    let data = "获取到用户id";
    console.log("id");
    resolve(data);
  }, 1000);
});

promise
  .then((result) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let data = "获取到用户名称";
        resolve([result, data]);
        console.log("名称");
      }, 1000);
    });
  })
  .then((result) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let data = "获取到用户电话";
        console.log("电话");
        resolve([...result, data]);
      }, 1000);
    });
  })
  .then((result) => {
    console.log(result.join("=>"));
  });
```

### all

```JavaScript
// 并行执行多个 promise，并等待所有 promise 都准备就绪。
Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
  new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(alert); // 1,2,3 当上面这些 promise 准备好时：每个 promise 都贡献了数组中的一个元素


let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

// 将每个 url 映射（map）到 fetch 的 promise 中
let requests = urls.map(url => fetch(url));

// Promise.all 等待所有任务都 resolved
Promise.all(requests)
  .then(responses => responses.forEach(
    response => alert(`${response.url}: ${response.status}`)
  ));
```

### race

```JavaScript
// 与 Promise.all 类似，但只等待第一个 settled 的 promise 并获取其结果（或 error）

Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1
```

### any

```JavaScript
// 这次 Promise 出了一个新方法 Promise.any ，跟 Promise.all 正好相反
// 只要有一个是 promise 是 fulfilled 时，则直接返回该结果，如果都是 rejected ，则报错

Promise
  .any([
    Promise.reject('rejected'),
    Promise.resolve('fulfilled')
 ])
 .then(res => console.log(res))
 .catch(err => console.error(err));
// fulfilled

Promise
  .any([
    Promise.reject('rejected1'),
    Promise.reject('rejected2')
 ])
 .then(res => console.log(res))
 .catch(err => console.error(err));
// AggregateError: All promises were rejected

Promise
  .any([
    Promise.resolve('resolve1'),
    Promise.resolve('resolve1')
 ])
 .then(res => console.log(res))
 .catch(err => console.error(err));
// resolve1
```

## async 、await

async、和 await 才是解决回调地狱的最终解决方法
async / await 实际上是对 promise 的一种语法糖 async 声明一个异步函数然后返回一个 promise，当遇到 await 的时候会等待 await 修饰的函数执行完毕，然后返回结果这样就达到了串行异步的操作

```JavaScript
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // 等待，直到 promise resolve (*)

  alert(result); // "done!"
}

f();


// 但我们可以将其包裹在一个匿名 async 函数中
(async () => {
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();
  ...
})();
```

> async 函数的返回值如果不是 Promise 那么就会用 Promise 裹起来

```js
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject('done!'), 1000);
  });

  let result = await promise;

  // 没有返回值：Promise.resolve(undefined)
  // 有返回值：Promise.resolve(value)
}

f()
  .then((res) => {
    console.log('🚀  -> file: index.html:38 -> res:', res);
  })
  .catch((err) => {
    console.log('🚀  -> file: index.html:39 -> err:', err);
  });
```
