# 通过 border 实现点九图

主要使用到 `border-image` 属性

代码如下：

```css
.box {
  border-image: url('./bg.png') 27 27 27 27 fill / 27px 27px 27px 27px /
    0px repeat;
}
```

上面 `border-image` 的属性依次是 source，slice，width，outset，repeat。

## `border-image-slice`

![border-image-slice](https://img.php.cn/upload/article/000/000/024/9542d314945f6069ad111e8dec632117-0.png)

100% 将图片分个为 9 个区域

- 1-4 为角区域 每一个都用一次来形成最终边界图像的角点
- 5-8 边区域 在最终的边框图像中重复，缩放或修改它们以匹配元素的尺寸
- 9 中心区域 它在默认情况下会被丢弃，但如果设置了关键字 fill，则会将其用作背景图像

## `border-image-repeat`

图片如何填充边框

- stretch 拉伸
- repeat 平铺图片以填充边框
- round 平铺图像，当不能整数次平铺时，根据情况放大或缩小图像
- space 平铺图像，当不能整数次平铺时，会用空白间隙填充在图像周围（不会放大或缩小图像）
- inherit 继承父级元素的计算值
