### 自定义 TAB

#### 一、首先需要在 app.json 中配置

配置对应的基础页面

```json
  "pages": [
    "pages/login/login",

    "pages/home/home",
    "pages/task/task",
    "pages/information/information",
    "pages/individual/individual"
  ],

  "tabBar": {
    "custom": true,
    "color": "#666666",
    "selectedColor": "#FF5F15",
    "backgroundColor": "#ffffff",
    "borderStyle": "black",
    "list": [
      {
        "pagePath": "pages/home/home",
        "text": "首页"
      },
      {
        "pagePath": "pages/task/task",
        "text": "任务"
      },
      {
        "pagePath": "pages/information/information",
        "text": "消息"
      },
      {
        "pagePath": "pages/individual/individual",
        "text": "我的"
      }
    ]
  }
```

#### 二、根目录创建 custom-tab-bar

![Snipaste_2023-11-14_10-58-55](https://gcore.jsdelivr.net/gh/zaixiadingdangmao/imageStore/Snipaste_2023-11-14_10-58-55.png)

> 注意：custom-tab-bar 下文件名必须是 `index.*` 不然微信读取不到

然后就是根据不同的组件自己创建 TabBar，然后通过 `switchTab()` 跳转页面，然后就是在你定义的 tab 页面里面调用激活当前 tab 状态

```js
// custom-tab-bar -> index.js
init() {
    const page = getCurrentPages().pop();
    const route = page ? page.route.split('?')[0] : '';
    const index = this.data.list.findIndex(
    (item) =>
        (item.value.startsWith('/') ? item.value.substr(1) : item.value) ===
        `${route}`
    );

    this.setData({ value:TabMenu[index].value });
}

// pages/home/home.js
pageLifetimes: {
  show() {
    typeof this.getTabBar === 'function' && this.getTabBar().init();
  },
}
```
