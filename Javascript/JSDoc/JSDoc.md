# JSDoc

- [JSDoc](#jsdoc)
  - [常用的标签](#常用的标签)
    - [@type 类型标签](#type-类型标签)
    - [@typedef 自定义类型](#typedef-自定义类型)
    - [@function 函数标签](#function-函数标签)
    - [@extends 继承标签](#extends-继承标签)
    - [@example 示例标签](#example-示例标签)
    - [其他文档](#其他文档)

## 常用的标签

### @type 类型标签

```js
/**
 * 类型为数字或为空
 * @type {?number}
 */
var val3;
val3 = null;

/**
 * 类型为数字或且不能为空
 * @type {!number}
 */
var val4;
val4 = null;

/** @type {number} */
let bar = 1;
/** @type {Array<number>} */
let foo = [];

/**
 * @typedef PropertiesHash
 * @type {object}
 * @property {string} id - an ID.
 * @property {string} name - your name.
 * @property {number} age - your age.
 */

/** @type {PropertiesHash} */
let props;
```

### @typedef 自定义类型

```js
/**
 * A number, or a string containing a number.
 * @typedef {(number|string)} NumberLike
 */

/**
 * Set the magic number.
 * @param {NumberLike} x - The magic number.
 */
function setMagicNumber(x) {}
```

### @function 函数标签

```js
/**
 * 克隆一个 object，返回一个新的 object
 *
 * @function
 *
 * @param {Object} object 需要克隆的 object
 * @param {boolean} [deep=false] 如果不传默认为浅拷贝
 * @returns {Object} result 克隆的新 object
 */
function clone(object, deep) {
  let result = {};
  // ...
  return result;
}
```

### @extends 继承标签

```js
/**
 * 自定义Primitive
 *
 * @extends Cesium.Primitive
 */
class CustomPrimitive extends Cesium.Primitive {
  /**
   * 构造函数
   * @param {Object} options Primitive的参数
   */
  constructor(options) {
    super(options);
    const modelCenter = Cesium.Cartesian3.fromDegrees(
      121.474509,
      31.233368,
      0
    );
    const modelMatrix =
      Cesium.Transforms.eastNorthUpToFixedFrame(modelCenter);
    this._modelMatrix = modelMatrix;
  }
}
```

### @example 示例标签

```js
/**
 * 添加示例代码（格式会被高亮展示）
 *
 * @param {string} a
 * @param {string} b
 * @returns {string} return a concat b.
 *
 * @example
 * console.log(myFn('hello ', 'world!'));
 * // "hello world!"
 */
function myFn(a, b) {
  return a + b;
}
```

### 其他文档

[其他补充](https://www.jsdoc.com.cn/)
