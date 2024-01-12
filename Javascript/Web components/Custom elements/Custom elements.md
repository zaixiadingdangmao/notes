- [Custom elements](#custom-elements)
  - [例子: “time-formatted”](#例子-time-formatted)
  - [监视属性](#监视属性)
  - [Customized built-in elements](#customized-built-in-elements)
- [总结](#总结)

## Custom elements

在 custom elements （自定义标签）定义完成之后，我们可以将其和 HTML 的内建标签一同使用。
Custom elements 有两种：

- Autonomous custom elements （自主自定义标签） —— “全新的” 元素, 继承自 HTMLElement 抽象类
- Customized built-in elements （自定义内建元素） —— 继承内建的 HTML 元素，比如自定义 HTMLButtonElement 等

```js
class MyElement extends HTMLElement {
  constructor() {
    super();
    // 元素在这里创建
  }

  connectedCallback() {
    // 在元素被添加到文档之后，浏览器会调用这个方法
    //（如果一个元素被反复添加到文档／移除文档，那么这个方法会被多次调用）
  }

  disconnectedCallback() {
    // 在元素从文档移除的时候，浏览器会调用这个方法
    // （如果一个元素被反复添加到文档／移除文档，那么这个方法会被多次调用）
  }

  static get observedAttributes() {
    return [
      /* 属性数组，这些属性的变化会被监视 */
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // 当上面数组中的属性发生变化的时候，这个方法会被调用
  }

  adoptedCallback() {
    // 在元素被移动到新的文档的时候，这个方法会被调用
    // （document.adoptNode 会用到, 非常少见）
  }

  // 还可以添加更多的元素方法和属性
}
```

### 例子: “time-formatted”

```html
<script>
  class TimeFormatted extends HTMLElement {
    // (1)

    connectedCallback() {
      let date = new Date(this.getAttribute('datetime') || Date.now());

      this.innerHTML = new Intl.DateTimeFormat('default', {
        year: this.getAttribute('year') || undefined,
        month: this.getAttribute('month') || undefined,
        day: this.getAttribute('day') || undefined,
        hour: this.getAttribute('hour') || undefined,
        minute: this.getAttribute('minute') || undefined,
        second: this.getAttribute('second') || undefined,
        timeZoneName: this.getAttribute('time-zone-name') || undefined
      }).format(date);
    }
  }

  customElements.define('time-formatted', TimeFormatted); // (2)
</script>

<!-- (3) -->
<time-formatted
  datetime="2019-12-01"
  year="numeric"
  month="long"
  day="numeric"
  hour="numeric"
  minute="numeric"
  second="numeric"
  time-zone-name="short"
></time-formatted>
```

> 建议在 connectedCallback 中渲染，而不是在 constructor 中
> 在 constructor 被调用的时候，还为时过早。虽然这个元素实例已经被创建了，但还没有插入页面。在这个阶段，浏览器还没有处理／创建元素属性：调用 getAttribute 将会得到 null。所以我们并不能在那里渲染元素。

### 监视属性

```html
<script>
  class TimeFormatted extends HTMLElement {
    render() {
      // (1)
      let date = new Date(this.getAttribute('datetime') || Date.now());

      this.innerHTML = new Intl.DateTimeFormat('default', {
        year: this.getAttribute('year') || undefined,
        month: this.getAttribute('month') || undefined,
        day: this.getAttribute('day') || undefined,
        hour: this.getAttribute('hour') || undefined,
        minute: this.getAttribute('minute') || undefined,
        second: this.getAttribute('second') || undefined,
        timeZoneName: this.getAttribute('time-zone-name') || undefined
      }).format(date);
    }

    connectedCallback() {
      // (2)
      if (!this.rendered) {
        this.render();
        this.rendered = true;
      }
    }

    static get observedAttributes() {
      // (3)
      return [
        'datetime',
        'year',
        'month',
        'day',
        'hour',
        'minute',
        'second',
        'time-zone-name'
      ];
    }

    attributeChangedCallback(name, oldValue, newValue) {
      // (4)
      this.render();
    }
  }

  customElements.define('time-formatted', TimeFormatted);
</script>

<time-formatted
  id="elem"
  hour="numeric"
  minute="numeric"
  second="numeric"
></time-formatted>

<script>
  setInterval(() => elem.setAttribute('datetime', new Date()), 1000); // (5)
</script>
```

###　渲染顺序
在 HTML 解析器构建 DOM 的时候，会按照先后顺序处理元素，先处理父级元素再处理子元素。例如，如果我们有 `<outer><inner></inner></outer>`，那么 `<outer>` 元素会首先被创建并接入到 DOM，然后才是 `<inner>`。

```html
<script>
  customElements.define(
    'user-info',
    class extends HTMLElement {
      connectedCallback() {
        alert(`${this.id} 已连接。`);
        setTimeout(() => alert(`${this.id} 初始化完成。`));
      }
    }
  );
</script>

<user-info id="outer">
  <user-info id="inner"></user-info>
</user-info>
```

输出顺序：

1. outer 已连接。
2. inner 已连接。
3. outer 初始化完成。
4. inner 初始化完成。

### Customized built-in elements

```html
<script>
  // 这个按钮在被点击的时候说 "hello"
  class HelloButton extends HTMLButtonElement {
    constructor() {
      super();
      this.addEventListener('click', () => alert('Hello!'));
    }
  }

  customElements.define('hello-button', HelloButton, { extends: 'button' });
</script>

<button is="hello-button">Click me</button>

<button is="hello-button" disabled>Disabled</button>
```

我们新定义的按钮继承了内建按钮，所以它拥有和内建按钮相同的样式和标准特性，比如 disabled 属性。

## 总结

有两种 custom element：

1. “Autonomous” —— 全新的标签，继承 HTMLElement。

```js
class MyElement extends HTMLElement {
  constructor() {
    super(); /* ... */
  }
  connectedCallback() {
    /* ... */
  }
  disconnectedCallback() {
    /* ... */
  }
  static get observedAttributes() {
    return [
      /* ... */
    ];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    /* ... */
  }
  adoptedCallback() {
    /* ... */
  }
}
customElements.define('my-element', MyElement);
/* <my-element> */
```

2. “Customized built-in elements” —— 已有元素的扩展。

```js
class MyButton extends HTMLButtonElement {
  /*...*/
}
customElements.define('my-button', MyElement, { extends: 'button' });
/* <button is="my-button"> */
```
