/*
 * @Description:
 * @Author: zhangxuelong
 * @Date: 2022-07-07 14:36:16
 */

// console.log(location.href);
// const worker = new Worker(location.href + 'emptyWorker.js');

// let total = 10000000;
// let page = 0;
// let limit = 10000;
// let totalPage = Math.ceil(total / limit);

// let list = [];
// while (page < total) {
//   page++;
// }
// console.log(list);

// const worker = new Worker('./emptyWorker.js');

// worker.postMessage({ page, limit, dataList: [] });

// worker.onmessage = ({ data }) => {
//   const { list, page } = data;

//   if (page + 1 < totalPage) {
//     worker.postMessage({ page: page + 1, limit });
//   } else {
//     console.log(list);
//     worker.terminate();
//   }
// };

// ------------------------------------

// 正常运行
// function fibonacci(n) {
//   return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log('🚩  -> file: main.js -> line 47 -> ', fibonacci(45));

// const worker = new Worker('./emptyWorker.js');
// worker.postMessage(45);
// worker.onmessage = ({ data }) => {
//   console.log('🚀  -> file: main.js -> line 39 -> data', data);
// };

// ------------------------------------

// const channel = new MessageChannel();
// console.log('🚀  -> file: main.js -> line 53 -> channel', channel);
// const factorialWorker = new Worker('./emptyWorker.js');
// // 把`MessagePort`对象发送到工作者线程
// // 工作者线程负责处理初始化信道
// factorialWorker.postMessage(null, [channel.port1]);
// // 通过信道实际发送数据
// channel.port2.onmessage = ({ data }) => console.log(data);
// // 工作者线程通过信道响应
// channel.port2.postMessage(5);

// ------------------------------------

function handlerMain() {
  console.time('main');
  let arr = [];
  const Max = 10000000;

  let i = 0;
  let sum = 0;
  while (i < Max) {
    sum += Math.random();
    arr.push(i);
    i++;
  }

  console.log(sum / Max);
  console.log(arr);
  console.timeEnd('main');
}

function handlerWorker() {
  console.time('worker');
  const worker = new Worker('./emptyWorker.js');
  worker.onmessage = ({ data }) => {
    console.log(data);
    console.timeEnd('worker');
  };
}
