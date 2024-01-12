- [使用 Webpack 打包 Vue 文件](#使用-webpack-打包-vue-文件)
  - [使用 webpack 编译 es6+代码](#使用-webpack-编译-es6代码)
    - [1. 输入 `npm init -y`](#1-输入-npm-init--y)
    - [2. 安装 webpack 和 webpack-cli 工具 `npm i webpack@5.18.0 webpack-cli -D`](#2-安装-webpack-和-webpack-cli-工具-npm-i-webpack5180-webpack-cli--d)
    - [3. 继续安装 `npm i babel-loader @babel/core @babel/preset-env -D`](#3-继续安装-npm-i-babel-loader-babelcore-babelpreset-env--d)
    - [4. 测试 js 文件配置](#4-测试-js-文件配置)
    - [5. 接下来我们需要在根目录创建 webpack.config.js 进行配置](#5-接下来我们需要在根目录创建-webpackconfigjs-进行配置)
    - [6. 使用 html-webpack-plugin 创建 html 页面](#6-使用-html-webpack-plugin-创建-html-页面)
  - [编辑 Vue 文件](#编辑-vue-文件)
    - [1. 安装 Vue 的相关工具](#1-安装-vue-的相关工具)
    - [2. 在 src 文件夹下创建相关文件](#2-在-src-文件夹下创建相关文件)
    - [3. 配置本地服务](#3-配置本地服务)
    - [4. 解析 CSS、SCSS](#4-解析-cssscss)
  - [最后版本配置](#最后版本配置)

## 使用 Webpack 打包 Vue 文件

### 使用 webpack 编译 es6+代码

#### 1. 输入 `npm init -y`

自动生成一个 package.json 配置文件

![Snipaste_2022-07-13_14-34-37](https://gcore.jsdelivr.net/gh/zaixiadingdangmao/imageStore/Snipaste_2022-07-13_14-34-37.png)

#### 2. 安装 webpack 和 webpack-cli 工具 `npm i webpack@5.18.0 webpack-cli -D`

在 package.json 多了 devDependencies 配置项，里面有我们刚才安装的两个工具

![Snipaste_2022-07-13_14-37-45](https://gcore.jsdelivr.net/gh/zaixiadingdangmao/imageStore/Snipaste_2022-07-13_14-37-45.png)

#### 3. 继续安装 `npm i babel-loader @babel/core @babel/preset-env -D`

- `babel-loader` 在 webpack 中使用 babel 编辑 ES，需要 babel-loader
- `@babel/core` es 代码编译的核心
- `@babel/preset-env` 转换规则，高版本 es 转低版本，把 ES6+代码转换为 ES5

#### 4. 测试 js 文件配置

1. ==创建 src 文件夹== -> ==创建 index.js 文件==
2. 创建下面代码

```js
[1, 2, 3].map(e => console.log('🚩 -> ', e));
```

![Snipaste_2022-07-13_14-48-26](https://gcore.jsdelivr.net/gh/zaixiadingdangmao/imageStore/Snipaste_2022-07-13_14-48-26.png)

如果不是全局安装的 webpack-cli，就需要在 package.json 中添加指令 `"build": "webpack --config ./webpack.config.js"`

创建 ==webpack.config.js== 文件

然后用 `npm run build` 编辑文件

打开 dist/main.js，可以发现这不是我们要的结果，箭头函数还是箭头函数

#### 5. 接下来我们需要在根目录创建 webpack.config.js 进行配置

```js
const path = require('path'); //处理路径的模块

module.exports = {
  //输出配置
  mode: 'production', //默认是生产模式
  entry: './src/index.js', //入口文件
  output: {
    path: path.join(__dirname, 'dist'), //输出执行文件(指webpack.config.js)的绝对路径
    filename: 'boundle.js' //指定输出文件名，替换main.js
  },
  module: {
    rules: [
      {
        test: /\.js$/, //匹配js文件
        exclude: /node_modules/, //忽略node_modules文件夹
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
```

此时执行 npm build，输出了我们想要的结果

#### 6. 使用 html-webpack-plugin 创建 html 页面

安装 `npm i html-webpack-plugin@4.5.1 -D`，这个插件会自动引入 js 文件

webpack.config.js 配置

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // ...
  plugins: [
    new HtmlWebpackPlugin({
      //创建实例
      filename: 'index.html', // 指定文件名
      template: path.resolve(__dirname, 'src/index.html') //引入路径
    })
  ]
};
```

虽然在 webpack.config.js 中配置了 index.html 的引入路径

1. ==创建 src 文件夹== -> ==创建 index.html 文件==

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      <span>一个小帅哥</span>
    </div>
  </body>
</html>
```

`npm run build` 编辑，可以看到 scr 中的 index.html 文件在 dist 文件夹中编译成功了，并自动引入了 js 文件

![Snipaste_2022-07-13_14-59-20](https://gcore.jsdelivr.net/gh/zaixiadingdangmao/imageStore/Snipaste_2022-07-13_14-59-20.png)

### 编辑 Vue 文件

#### 1. 安装 Vue 的相关工具

- `npm i vue@2.6.12` 安装 Vue
- `npm i vue-loader@15.9.6 -D` 安装 vue-loader 解析.vue 文件
- `npm i vue-template-compiler@2.6.12 -D` 安装 vue-template-compiler 编译 vue 模板

#### 2. 在 src 文件夹下创建相关文件

创建 App.vue

```vue
<template>
  <div class="app">
    <ul>
      <li v-for="e in list" :key="e">{{ e }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      list: ['蒜头王八', '闪电耗子', '滋水王八']
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  beforeDestroy() {}
};
</script>
```

index.html 中内容删掉，只留一个 div 用来挂载 App.vue

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

再来编写下核心的入口文件 index.js，把之前的测试代码删掉

```js
import Vue from 'vue';
import App from './App.vue';

new Vue({
  render: h => h(App)
}).$mount('#app');
```

配置 webpack.config.js，注意 vue-plugin 的引入，module 中 rules 的新增，plugins 的新增

```js
const path = require('path'); //处理路径的模块
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  //输出配置
  mode: 'production', //默认是生产模式
  entry: './src/index.js', //入口文件
  output: {
    path: path.join(__dirname, 'dist'), //输出执行文件(指webpack.config.js)的绝对路径
    filename: 'boundle.js' //指定输出文件名，替换main.js
  },
  module: {
    rules: [
      {
        test: /\.js$/, //匹配js文件
        exclude: /node_modules/, //忽略node_modules文件夹
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      //创建实例
      filename: 'index.html', // 指定文件名
      template: path.resolve(__dirname, 'src/index.html') //引入路径
    }),

    new VueLoaderPlugin()
  ]
};
```

![Snipaste_2022-07-13_15-20-19](https://gcore.jsdelivr.net/gh/zaixiadingdangmao/imageStore/Snipaste_2022-07-13_15-20-19.png)

#### 3. 配置本地服务

安装 `npm i webpack-dev-server@4.9.3 -D`，并在 package.json 的 scripts 中新增一行 `"serve": "webpack-dev-server --open"`，`--open` 参数可以让项目直接在默认浏览器打开

![Snipaste_2022-07-13_15-24-30](https://gcore.jsdelivr.net/gh/zaixiadingdangmao/imageStore/Snipaste_2022-07-13_15-24-30.png)

#### 4. 解析 CSS、SCSS

- 安装 `npm i css-loader style-loader -D` 解析 CSS
- 安装 `npm i node-sass@7.0.1 sass-loader@13.0.2 -D` 解析 SCSS

webpack.config.js 添加配置

```js
{
  test: /\.(sc|c)ss$/,
  use: [
    { loader: 'style-loader' },
    { loader: 'css-loader' },
    { loader: 'sass-loader' }
  ]
}
```

App.vue 中添加样式

```scss
<style lang="scss" scoped>
li {
  color: pink;
}
</style>
```

### 最后版本配置

package.json

```json
{
  "name": "testmodule",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "serve": "webpack-dev-server --open",
    "build": "webpack --config ./webpack.config.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.18.6",
    "@babel/preset-env": "^7.18.6",
    "babel-loader": "^8.2.5",
    "css-loader": "^6.7.1",
    "html-webpack-plugin": "^4.5.1",
    "node-sass": "^7.0.1",
    "sass-loader": "^13.0.2",
    "style-loader": "^3.3.1",
    "vue-loader": "^15.9.6",
    "vue-template-compiler": "^2.6.12",
    "webpack": "^5.18.0",
    "webpack-cli": "^4.10.0",
    "webpack-dev-server": "^4.9.3"
  },
  "dependencies": {
    "vue": "^2.6.12"
  }
}
```

webpack.config.js

```js
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const TerserPlugin = require('terser-webpack-plugin');

const filename = 'Test002';

module.exports = {
  mode: 'production', //默认是生产模式
  entry: `./packages/${filename}/index.js`, //入口文件
  output: {
    path: path.join(__dirname, `/dist/${filename}`), //输出执行文件(指webpack.config.js)的绝对路径
    filename: 'index.js',
    library: 'index',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/, //匹配js文件
        exclude: /node_modules/, //忽略node_modules文件夹
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(sc|c)ss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset', // 一般会转换为 "asset/resource"
        generator: {
          filename: 'images/[name]_[hash][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024 // 8kb （低于8kb都会压缩成 base64）
          }
        }
      }
    ]
  },
  plugins: [new VueLoaderPlugin()],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false
      })
    ]
  }
};
```
