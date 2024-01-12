- [JavaScript 数学函数](#javascript-数学函数)
  - [Math.atan2](#mathatan2)
    - [计算两点之间连线的倾斜角](#计算两点之间连线的倾斜角)
  - [Math.hypot](#mathhypot)
    - [获取两点之间的距离](#获取两点之间的距离)
  - [Math.sqrt 和 Math.pow](#mathsqrt-和-mathpow)
    - [圆形检测碰撞](#圆形检测碰撞)
    - [矩形检测碰撞](#矩形检测碰撞)
  - [极坐标系和单位圆](#极坐标系和单位圆)
  - [三角函数](#三角函数)
  - [综合例子](#综合例子)
    - [单指移动，双指中心放大图片](#单指移动双指中心放大图片)

## JavaScript 数学函数

### Math.atan2

[Math.atan2()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2)返回从原点 (0,0) 到 (x,y) 点的线段与 x 轴正方向之间的平面角度 (弧度值)

函数接受的参数：先传递 y 坐标，然后是 x 坐标

> 度 = Math.PI / 180 \* 弧

示例

```js
(Math.atan2(45, 0) * 180) / Math.PI; //90
(Math.atan2(0, 0) * 180) / Math.PI; // 0
```

#### 计算两点之间连线的倾斜角

只需要将两点 x,y 坐标分别相减得到一个新的点(x2-x1,y2-y1).然后利用这个新点与原点坐标的连线求出角度就可以了

```js
(Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
```

### Math.hypot

[Math.hypot()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot) 函数返回所有参数的平方和的平方根

```js
console.log(Math.hypot(3, 4)); // 5
```

#### 获取两点之间的距离

```js
const getDistance = (p1, p2) => {
  return Math.hypot(p2.x - p1.x, p2.y - p1.y);
};
```

### Math.sqrt 和 Math.pow

[Math.sqrt](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt) 函数返回一个数的平方根

[Math.pow](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/pow) 函数返回基数的指数次幂

#### 圆形检测碰撞

```js
const d = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
if (d <= r + R) {
  // 碰撞
} else {
  // 未碰撞
}
```

#### 矩形检测碰撞

```js
// 矩形之间的碰撞检测

C.rectDuang = function (rect1, rect2) {
  return (
    rect1.x + rect1.w >= rect2.x &&
    rect1.x <= rect2.x + rect2.w &&
    rect1.y + rect1.h >= rect2.y &&
    rect1.y <= rect2.y + rect2.h
  );
};
```

### 极坐标系和单位圆

```javascript
const r = Math.sqrt(x ** 2 + y ** 2);
const θ = Math.atan2(y, x);
```

![极坐标](https://www.w3cplus.com/sites/default/files/blogs/2018/1808/trgonometry-3.gif)

### 三角函数

![](https://www.w3cplus.com/sites/default/files/blogs/2018/1808/trgonometry-2.png)

```
sinθ = a / h
cosθ = b / h
tanθ = a / b
```

```javascript
const pre = 180 / 4;
for (let i = 1; i < 6; i++) {
  // + 180 转换为正方向 度数转弧度
  const angle = ((pre * (i - 1) + 180) * Math.PI) / 180;
  const x = Math.floor(Math.cos(angle) * 10);
  const y = Math.floor(Math.sin(angle) * 10);
}
```

### 综合例子

#### 单指移动，双指中心放大图片

```js
const formatPoint = touch => {
  return { x: touch.pageX, y: touch.pageY };
};

const getCenter = (p1, p2) => {
  return {
    x: (p1.x + p2.x) / 2,
    y: (p1.y + p2.y) / 2,
  };
};

const getDistance = (p1, p2) => {
  return Math.hypot(p2.x - p1.x, p2.y - p1.y);
};

export default class Gesture {
  guards;
  // @type { HTMLElement }
  trigger;
  transform = { k: 1, x: 0, y: 0 };
  startTransform;

  pointersStart;

  /**
   * @param {HTMLElement} trigger
   * @param {*} guards
   */
  constructor(trigger, content, guards) {
    this.trigger = trigger;
    this.content = content;
    this.guards = guards;

    this.content.style.transformOrigin = '0 0';

    this.update();
    this.bindEventListener();
  }

  initPosition(content, bound) {
    const k = bound.width / content.width;
    const x = (bound.width - content.width * k) * 0.5;
    const y = (bound.height - content.height * k) * 0.5;

    this.transform.x = x;
    this.transform.y = y;
    this.transform.k = k;

    this.update();
  }

  touchstart(evt) {
    evt.preventDefault();

    this.pointersStart = evt.touches;
    this.startTransform = { ...this.transform };
  }

  touchmove(evt) {
    evt.preventDefault();

    const { touches } = evt;
    const { pointersStart, startTransform, transform } = this;

    const touchePoint1 = formatPoint(touches[0]);
    const pointerStart1 = formatPoint(pointersStart[0]);
    if (touches.length === 2 && pointersStart.length === 2) {
      const touchePoint2 = formatPoint(touches[1]);
      const pointerStart2 = formatPoint(pointersStart[1]);

      // 前后两指之间的距离比 这就是放大的倍数
      const scale =
        getDistance(touchePoint1, touchePoint2) /
        getDistance(pointerStart1, pointerStart2);

      /**
       * 例如 上面我们放大了 3 倍，原本倍数是 1 那么当前缩放比例就是 3 * 1
       * 放大缩小都是在原比例的基础上操作
       */
      const zoom = scale * startTransform.k;

      // 求当前中心点和最中心点
      const toucheCenter = getCenter(touchePoint1, touchePoint2);
      const pointerStartCenter = getCenter(pointerStart1, pointerStart2);

      /**
       * 计算水平偏移多少
       * (1 - scale) 例如 scale 3 倍，实际大的只有 2 个原始宽度一半
       * 原始宽度一半 = 原始中心点 - 原始起点
       * 最后还要加上前后中心点的距离
       * 这就算出了需要移动的距离
       */
      const ox =
        (pointerStartCenter.x - startTransform.x) * (1 - scale) +
        (toucheCenter.x - pointerStartCenter.x);

      const oy =
        (pointerStartCenter.y - startTransform.y) * (1 - scale) +
        (toucheCenter.y - pointerStartCenter.y);

      const x = startTransform.x + ox;
      const y = startTransform.y + oy;
      transform.x = x;
      transform.y = y;
      transform.k = zoom;
      this.update();
    } else if (touches.length === 1 && pointersStart.length === 1) {
      const delta = {
        x: touchePoint1.x - pointerStart1.x,
        y: touchePoint1.y - pointerStart1.y,
      };

      const x = startTransform.x + delta.x;
      const y = startTransform.y + delta.y;

      transform.x = x;
      transform.y = y;
      this.update();
    }
  }

  touchend(evt) {
    evt.preventDefault();
  }

  update() {
    const { x, y, k } = this.transform;

    this.content.style.transform = `translate(${x}px, ${y}px) scale(${k})`;
  }

  bindEventListener() {
    this.trigger.addEventListener('touchstart', this.touchstart.bind(this));
    this.trigger.addEventListener('touchmove', this.touchmove.bind(this));
    this.trigger.addEventListener('touchend', this.touchend.bind(this));
  }
}
```

![缩放](https://gcore.jsdelivr.net/gh/zaixiadingdangmao/imageStore/缩放-2023-10-09-10-35.png)
