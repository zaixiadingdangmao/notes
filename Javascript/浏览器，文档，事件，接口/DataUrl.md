# 什么是 Data URL

Data URL 是将图片转换为 base64 直接嵌入到了网页中，使用`<img src="data:[MIME type];base64"/>`这种方式引用图片，**不需要再发请求获取图片**。 使用 Data URL 也有一些缺点：

- base64 编码后的图片会比原来的体积大三分之一左右。
- Data URL 形式的图片不会缓存下来，每次访问页面都要被下载一次。可以将 Data URL 写入到 CSS 文件中随着 CSS 被缓存下来。

> 使用 require(./image) 会被转换成 Data URl
