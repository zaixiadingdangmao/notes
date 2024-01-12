- [Shadow DOM 插槽，组成](#shadow-dom-插槽组成)
  - [具名插槽](#具名插槽)
  - [默认插槽：第一个不具名的插槽](#默认插槽第一个不具名的插槽)
  - [Menu example](#menu-example)

## Shadow DOM 插槽，组成

就像浏览器内建的 `<select>` 需要 `<option>` 子项，我们的 `<custom-tabs>` 可能需要实际的标签内容来起作用。并且一个 `<custom-menu>` 可能需要菜单子项。

```
<custom-menu>
  <title>Candy menu</title>
  <item>Lollipop</item>
  <item>Fruit Toast</item>
  <item>Cup Cake</item>
</custom-menu>
```

### 具名插槽

```html
<script>
  customElements.define(
    'user-card',
    class extends HTMLElement {
      connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
      <div>Name:
        <slot name="username"></slot>
      </div>
      <div>Birthday:
        <slot name="birthday"></slot>
      </div>
    `;
      }
    }
  );
</script>

<user-card>
  <span slot="username">John Smith</span>
  <span slot="birthday">01.01.2001</span>
</user-card>
```

### 默认插槽：第一个不具名的插槽

shadow DOM 中第一个没有名字的 <slot> 是一个默认插槽。它从 light DOM 中获取没有放置在其他位置的所有节点。

例如，让我们把默认插槽添加到 <user-card>，该位置可以收集有关用户的所有未开槽（unslotted）的信息：

```html
<script>
  customElements.define(
    'user-card',
    class extends HTMLElement {
      connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
    <div>Name:
      <slot name="username"></slot>
    </div>
    <div>Birthday:
      <slot name="birthday"></slot>
    </div>
    <fieldset>
      <legend>Other information</legend>
      <slot></slot>
    </fieldset>
    `;
      }
    }
  );
</script>

<user-card>
  <div>I like to swim.</div>
  <span slot="username">John Smith</span>
  <span slot="birthday">01.01.2001</span>
  <div>...And play volleyball too!</div>
</user-card>
```

### Menu example

```html
<!DOCTYPE html>
<template id="tmpl">
  <style>
    ul {
      margin: 0;
      list-style: none;
      padding-left: 20px;
    }

    /* ::slotted 伪类选择器 选择模板中的属性 */

    ::slotted([slot='title']) {
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
    }

    ::slotted([slot='title'])::before {
      content: '📂';
      font-size: 14px;
    }

    .closed ::slotted([slot='title'])::before {
      content: '📁';
    }

    .closed ul {
      display: none;
    }
  </style>

  <div class="menu">
    <slot name="title"></slot>
    <ul>
      <slot name="item"></slot>
    </ul>
  </div>
</template>

<script>
  customElements.define(
    'custom-menu',
    class extends HTMLElement {
      connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.append(tmpl.content.cloneNode(true));

        this.shadowRoot.querySelector('slot[name="title"]').onclick = () => {
          this.shadowRoot.querySelector('.menu').classList.toggle('closed');
        };
      }
    }
  );
</script>

<custom-menu>
  <span slot="title">Candy menu</span>
  <li slot="item">Lollipop</li>
  <li slot="item">Fruit Toast</li>
  <li slot="item">Cup Cake</li>
</custom-menu>
```
