# Document

## `createDocumentFragment` 文档碎片

```JavaScript
let ul = document.getElementById('ul');
// 创建一个文档碎片
let box = document.createDocumentFragment();

for (let i = 0; i <= 1000; i++) {
  let li = document.createElement('li');
  li.innerText = i;
  li.classList.add('item');
  li.setAttribute('data-item', `${i}_item`);
  box.appendChild(li);
}

// 统一添加到ul中
ul.appendChild(box);

// 统一添加事件
ul.addEventListener('click', ev => {
  let target = ev.target;
  // matches 匹配对应的css选择器
  if (target.matches('LI')) {
    let value = target.getAttribute('data-item');
    console.log('value', value);
  }
});
```

## `getBoundingClientRect` 矩形信息

返回的结果是包含完整元素的最小矩形，并且拥有`left`, `top`, `right`, `bottom`, `x`, `y`, `width`, 和 `height`这几个以像素为单位的只读属性用于描述整个边框。除了`width` 和 `height` 以外的属性是相对于视图窗口的左上角来计算的

![DOMRect 示例图](https://mdn.mozillademos.org/files/15087/rect.png)

```js
let elem = document.querySelector('div');
let rect = elem.getBoundingClientRect();
```

## `insertAdjacentElement` 插入元素

[insertAdjacentElement](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/insertAdjacentElement) 在指定元素 指定位置 插入元素

```js
currElement.insertAdjacentElement(position, element);
```

**position** 表示相对于该元素的位置，只能是下面四个值

- `'beforebegin'`: 在该元素本身的前面.
- `'afterbegin'`:只在该元素当中, 在该元素第一个子孩子前面.
- `'beforeend'`:只在该元素当中, 在该元素最后一个子孩子后面.
- `'afterend'`: 在该元素本身的后面.

**示意位置**

```
<!-- beforebegin -->
<p>
<!-- afterbegin -->
foo
<!-- beforeend -->
</p>
<!-- afterend -->
```

### 示例一

```js
const wrapper = document.querySelector('.wrapper-box');
const [first, last] = wrapper.children;
// 创建一个临时元素
const tempP = document.createElement('p');
tempP.innerText = '2. JavaSript';
// 在第一个元素 afterend 插入 临时元素
first.insertAdjacentElement('afterend', tempP);
```

## IntersectionObserver 监听 DOM

[阮叔叔的 api 说明](https://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html)

### 滚动加载示例

```js
import { onMounted, reactive, ref } from 'vue';

const pushItem = () => {
  return new Array(10)
    .fill(Math.floor())
    .map((e) => Math.floor(Math.random() * 10));
};

const list = reactive(pushItem());

const load = ref('');
// 创建监听
const observer = new IntersectionObserver((entries) => {
  const entire = entries[0];
  if (entire.intersectionRatio === 1) {
    list.push(...pushItem());
  }
});

onMounted(() => {
  const dom = load.value;
  // 添加监听
  observer.observe(dom);
});
```
