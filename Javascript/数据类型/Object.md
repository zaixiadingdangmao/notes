# Object 对象扩展

- [Object 对象扩展](#object-对象扩展)
  - [values、keys、entries](#valueskeysentries)
  - [hasOwnProperty 与 in](#hasownproperty-与-in)
  - [克隆与合并，Object.assign](#克隆与合并objectassign)
  - [defineProperty](#defineproperty)

---

## values、keys、entries

```JavaScript
let obj = {id:1,name:2}
Object.values(obj)  // [1,2]

let obj = {id:1,name:2}
Object.keys(obj)  // ['id','name']

let obj = {id:1,name:2}
Object.entries(obj) // [['id',1],['name',2]]

```

## hasOwnProperty 与 in

`hasOwnProperty`: 自身属性检测

`in`：`__proto__` 链上的属性也会检测

```js
function Test() {
  this.a = 1;
}

Test.prototype.b = 2;
Object.prototype.c = 3;

let test = new Test();

console.log('Test -> test.a', test.a); // 1
console.log('Test -> test.b', test.b); // 2
console.log('Test -> test.c', test.c); // 3
console.log(test.hasOwnProperty('a')); // true
console.log(test.hasOwnProperty('b')); // false
console.log(test.hasOwnProperty('c')); // false
console.log('a' in test); // true
console.log('b' in test); // true
console.log('c' in test); // true
```

## 克隆与合并，Object.assign

例如，我们可以用它来合并多个对象

```JavaScript
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// 将 permissions1 和 permissions2 中的所有属性都拷贝到 user 中
Object.assign(user, permissions1, permissions2);

// 现在 user = { name: "John", canView: true, canEdit: true }

```

如果被拷贝的属性的属性名已经存在，那么它会被覆盖（第二个对象，覆盖第一个）

```JavaScript
let user = { name: "John" };

Object.assign(user, { name: "Pete" });

alert(user.name); // 现在 user = { name: "Pete" }
```

## defineProperty

```js
Object.defineProperty(obj, prop, descriptor);
```

- **obj** 要定义属性的对象
- **prop** 要定义或修改的属性的名称或 [`Symbol`]
- **descriptor** 要定义或修改的属性描述符

  - 数据描述符

    - **configurable** 属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除
    - **enumerable** 属性可枚举
    - **writable** 可修改属性的值

  - 存取描述符
    - **get** 属性被访问时调用该函数
    - **set** 属性被修改时调用该函数

```js
const personalInfoDefine = {
  name: {
    writable: false,
    enumerable: true,
    configurable: true,
  },
  age: {
    writable: false,
    enumerable: true,
    configurable: true,
  },
  job: {
    writable: true,
    enumerable: true,
    configurable: true,
  },
  publikKye: {
    writable: false,
    enumerable: false,
    configurable: true,
  },
};

const personalInfo = [
  {
    name: '张三',
    age: 20,
    job: 'IT工程师',
    publikKye: '4392104820948',
  },
  {
    name: '李四',
    age: 21,
    job: '银行员工',
    publikKye: '2109482049823',
  },
  {
    name: '王五',
    age: 28,
    job: '老师',
    publikKye: '8940238409288',
  },
];

const init = () => {
  const _personalInfoDefine = userStrictObject(
    personalInfo,
    personalInfoDefine
  );

  _personalInfoDefine[0].setConfig('name', 'writable', true);
  _personalInfoDefine[0].name = '张三三';
  console.log('init -> _personalInfoDefine', _personalInfoDefine);
};

const userStrictObject = (data, desc) => {
  if (typeof data != 'object' || data === null) {
    throw new TypeError('类型错误');
  }

  if (Array.isArray(data)) {
    return data.map((item) => {
      return defineObject(item, desc);
    });
  } else {
    return defineObject(data, desc);
  }
};

function defineObject(data, desc) {
  let _obj = new ConstructObject();

  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      Object.defineProperty(_obj, key, {
        ...desc[key],
        value: data[key],
      });
    }
  }

  return _obj;
}

function ConstructObject() {
  for (const key in ConstructObject.prototype) {
    Object.defineProperty(ConstructObject.prototype, key, {
      writable: false,
      enumerable: false,
      configurable: false,
    });
  }
}
ConstructObject.prototype.setConfig = function (prop, desc, value) {
  Object.defineProperty(this, prop, {
    [desc]: value,
  });
};

init();
```
