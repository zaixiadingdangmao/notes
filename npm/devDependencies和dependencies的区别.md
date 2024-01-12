# dependencies 和 devDependencies 的区别

## 结论

日常开发中 无论是 `dependencies` 还是 `devDependencies` 基本上是没有关系的，只要是项目中用到的依赖（并且安装在 `node_modules` ），都会被打包工具解析、构建、最后都打包进 `dist`

> 区别在于发布 npm 组件包的时候，`dependencies` 下的依赖会被安装到 npm 组件包的内部依赖，`devDependencies` 则不会

`devDependencies` 里面的插件只用于开发环境，不用于生产环境，而 `dependencies` 是需要发布到生产环境的，这句话没错，但是是在发布 npm 组件时
