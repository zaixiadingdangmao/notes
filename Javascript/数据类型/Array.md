# Array 数组扩展

- [Array 数组扩展](#array-数组扩展)
  - [sort 排序](#sort-排序)
  - [reduce](#reduce)
    - [猎奇用法](#猎奇用法)
    - [配合 async/await 的方法](#配合-asyncawait-的方法)
  - [some、every](#someevery)
  - [forEach](#foreach)

---

## sort 排序

> `sort()` 方法没有参数时，按照 ascii 码进行排序

```js
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
// ['Dec', 'Feb', 'Jan', 'March'];

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
// [1, 100000, 21, 30, 4];
```

通过给`sort()`的参数返回一个负值可以实现数组`reverse()`效果，排序后结果如下

- `< 0` a 在 b 前，如 [a, b]
- `0` 位置不变返回
- `> 0` a 在 b 后，如 [b, a]

## reduce

对数组中的每个元素执行一个由您提供的 reducer 函数(升序执行)，将其结果汇总为单个返回值

```js
arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
```

- `Accumulator (acc)` (累计器) 累计器累计回调的返回值; 它是上一次调用回调时返回的累积值,或 initialValue
- `Current Value (cur)`(当前值) 数组中正在处理的元素
- `Current Index (idx)`(当前索引) 可选 数组中正在处理的当前元素的索引。 如果提供了 initialValue，则起始索引号为 0，否则从索引 1 起始。
- `Source Array (src)`(源数组) 可选 调用 reduce()的数组
- `initialValue`作为第一次调用 callback 函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce 将报错

```js
const list = [
  { name: 'left', width: 20 },
  { name: 'center', width: 70 },
  { name: 'right', width: 10 },
];

const total = list.reduce((currentTotal, item) => {
  return currentTotal + item.width;
}, 0);
// total: 100
```

### 猎奇用法

```js
function Max(arr = []) {
  return arr.reduce((t, v) => (t > v ? t : v));
}

function Min(arr = []) {
  return arr.reduce((t, v) => (t < v ? t : v));
}

// URL参数反序列化
function parseUrlSearch(url) {
  // location.search.replace(/(^\?)|(&$)/g, "")
  return url
    .split('?')[1]
    .split('&')
    .reduce((t, v) => {
      const [key, val] = v.split('=');
      t[key] = decodeURIComponent(val);
      return t;
    }, {});
}
```

### 配合 async/await 的方法

```js
function testPromise(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Processing ${time}`);
      resolve(time);
    }, time);
  });
}

let result = [3000, 2000, 1000, 4000].reduce(
  (accumulatorPromise, nextID) => {
    return accumulatorPromise.then(() => {
      return testPromise(nextID);
    });
  },
  Promise.resolve()
);

result.then((e) => {
  console.log('All Promises Resolved !!');
});
```

## some、every

```JavaScript
const list = [
  { name: '头部导航', backward: false },
  { name: '轮播', backward: true },
  { name: '页脚', backward: false },
];

// some 若某一元素满足条件，返回 true，循环中断；所有元素不满足条件，返回 false
const someBackward = list.some(item => item.backward);// someBackward: true

// every 与 some 相反，若有一元素不满足条件，返回 false，循环中断；所有元素满足条件，返回 true
const everyNewest = list.every(item => !item.backward);// everyNewest: false
```

## forEach

`forEach()` 方法对数组每一个元素执行一次给定的函数

```js
arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
```

- **callback** 为数组中每一个元素执行的函数，三个参数值
  - **currentValue** 数组中正在处理的当前元素
  - **index** 数组中正在处理的当前元素的索引
  - **array** 正在操作的数组
- **thisArg** 当执行回调函数 callback 时，用作 this 的值

> - 遍历范围在第一次调用 callback 前就会确定
> - 如果已存在的值改变了，则传递给 callback 的值是遍历到他那一刻的值
> - `forEach` 为每个数组元素执行一次 callback 函数
> - 不会对未初始化的值进行操作
> - 除了抛出异常外，没有办法终止循环
