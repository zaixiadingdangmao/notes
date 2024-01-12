/*
 * @Description:
 * @Author: zhangxuelong
 * @Date: 2022-07-07 14:36:22
 */

// self.onmessage = ({ data }) => {
//   const { page, limit } = data;
//   const list = [];
//   let i = page * limit;
//   while (i < page * limit + limit) {
//     list.push(i);
//     i++;
//   }

//   self.postMessage({ list, page, limit });
// };

// ------------------------------------

// function fibonacci(n) {
//   return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
// }

// self.onmessage = ({ data }) => {
//   let i = fibonacci(data);
//   self.postMessage(i);
// };

// ------------------------------------
// let messagePort = null;

// function factorial(n) {
//   let result = 1;
//   while (n) {
//     result *= n--;
//   }
//   return result;
// }
// // 在全局对象上添加消息处理程序
// self.onmessage = ({ ports }) => {
//   // 只设置一次端口
//   if (!messagePort) {
//     // 初始化消息发送端口，
//     // 给变量赋值并重置监听器
//     messagePort = ports[0];
//     self.onmessage = null;
//     // 在全局对象上设置消息处理程序
//     messagePort.onmessage = ({ data }) => {
//       // 收到消息后发送数据
//       messagePort.postMessage(`${data}! = ${factorial(data)}`);
//     };
//   }
// };

// ------------------------------------

let arr = [];
const Max = 10000000;

let i = 0;
let sum = 0;
while (i < Max) {
  sum += Math.random();
  arr.push(i);
  i++;
}

self.postMessage({ sum: sum / Max, arr });
