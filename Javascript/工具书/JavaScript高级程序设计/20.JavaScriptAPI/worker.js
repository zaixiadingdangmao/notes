/*
 * @Description:
 * @Author: zhangxuelong
 * @Date: 2022-06-20 11:25:49
 */
self.onmessage = messageEvent => {
  const syncReader = new FileReaderSync();
  console.log(syncReader); // FileReaderSync {}
  // 读取文件时阻塞工作线程
  const result = syncReader.readAsDataURL(messageEvent.data[0]);
  // PDF 文件的示例响应
  console.log(result); // data:application/pdf;base64,JVBERi0xLjQK...
  // 把 URL 发回去
  self.postMessage(result);
};
