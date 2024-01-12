# Proxy 数据劫持

- [Proxy 数据劫持](#proxy-数据劫持)
  - [带有“get”捕捉器的默认值](#带有get捕捉器的默认值)
  - [使用“set”捕捉器进行验证](#使用set捕捉器进行验证)
  - [使用“ownKeys”和“getOwnPropertyDescriptor”进行迭代](#使用ownkeys和getownpropertydescriptor进行迭代)
    - [ownKeys](#ownkeys)
    - [getOwnPropertyDescriptor](#getownpropertydescriptor)
  - [带有 “has” 捕捉器 的 “in range”](#带有-has-捕捉器-的-in-range)
  - [面试题](#面试题)

---

[文档](https://zh.javascript.info/proxy)

## 带有“get”捕捉器的默认值

`get(target, property, receiver)`

- `target` 是目标对象，该对象被作为第一个参数传递给 `new Proxy`，
- `property` 目标属性名，
- `receiver` 如果目标属性是一个 getter 访问器属性，则 `receiver` 就是本次读取属性所在的 `this` 对象。通常，这就是 `proxy` 对象本身（或者，如果我们从 proxy 继承，则是从该 proxy 继承的对象）。现在我们不需要此参数，因此稍后我们将对其进行详细介绍。

```JavaScript
let dictionary = {
  'Hello': 'Hola',
  'Bye': 'Adiós'
};

dictionary = new Proxy(dictionary, {
  get(target, phrase) { // 拦截读取属性操作
    if (phrase in target) { //如果词典中有该短语
      return target[phrase]; // 返回其翻译
    } else {
      // 否则返回未翻译的短语
      return phrase;
    }
  }
});

// 在词典中查找任意短语！
// 最坏的情况也只是它们没有被翻译。
alert( dictionary['Hello'] ); // Hola
alert( dictionary['Welcome to Proxy']); // Welcome to Proxy（没有被翻译）
```

## 使用“set”捕捉器进行验证

`set(target, property, value, receiver)`

- `target` 是目标对象，该对象被作为第一个参数传递给 `new Proxy`，
- `property` 目标属性名称，
- `value` 目标属性的值，
- `receiver` 与 `get` 捕捉器类似，仅与 setter 访问器属性相关。

```JavaScript
let arr = [];

const newArr = new Proxy(arr, {
  get(target, key, receiver) {
    return Reflect.get(target, key, receiver);
  },
  set(target, key, value, receiver) {
    if (typeof value == 'number') {
      return Reflect.set(target, key, value, receiver);
    } else {
      return Reflect.set(target, key, +value.match(/\d+/g)[0], receiver);
    }
  }
});

newArr.push(1);
newArr.push('2');
newArr.push('3A');
newArr.push('A4');
console.log(newArr.length);
newArr.length = 0;
console.log('arr', arr);
console.log('newArr', newArr);
```

## 使用“ownKeys”和“getOwnPropertyDescriptor”进行迭代

### ownKeys

```JavaScript
let user = {
  name: "John",
  age: 30,
  _password: "***"
};

user = new Proxy(user, {
  ownKeys(target) {
    return Object.keys(target).filter(key => !key.startsWith('_'));
  }
});

// "ownKeys" 过滤掉了 _password
for(let key in user) alert(key); // name，然后是 age

// 对这些方法的效果相同：
alert( Object.keys(user) ); // name,age
alert( Object.values(user) ); // John,30
```

`Object.keys` 仅返回带有 `enumerable` 标志的属性

### getOwnPropertyDescriptor

```JavaScript
let user = { };

user = new Proxy(user, {
  ownKeys(target) { // 一旦要获取属性列表就会被调用
    return ['a', 'b', 'c'];
  },

  getOwnPropertyDescriptor(target, prop) { // 被每个属性调用
    return {
      enumerable: true,
      configurable: true
      /* ...其他标志，可能是 "value:..." */
    };
  }

});

alert( Object.keys(user) ); // a, b, c
```

## 带有 “has” 捕捉器 的 “in range”

```JavaScript
let range = {
  start: 1,
  end: 10
};

range = new Proxy(range, {
  has(target, prop) {
    return prop >= target.start && prop <= target.end;
  }
});

alert(5 in range); // true
alert(50 in range); // false
```

## 面试题

```js
<script>
  const arr = new Proxy(
    { sum: 0 },
    {
      get(tar, key, receiver) {
        if (key === Symbol.toPrimitive) {
          const { sum } = tar;
          tar.sum = 0;
          return () => sum;
        }

        tar.sum += Number(key);
        return receiver;
      }
    }
  );

  console.log(arr[1][2][3] + 4); // 10
  console.log(arr[10][20][30] + 40); // 100
  console.log(arr[100][200][300] + 400); // 1000
</script>
```
