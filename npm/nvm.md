# nvm

- [nvm](#nvm)
  - [Windows 手动下载](#windows-手动下载)
    - [下载软件](#下载软件)
    - [配置环境变量](#配置环境变量)
    - [配置国内镜像](#配置国内镜像)

---

用于管理多 node 版本，在不同版本之间切换

## Windows 手动下载

### 下载软件

[下载地址](https://github.com/coreybutler/nvm-windows/releases) 下载 `nvm-noinstall.zip`

![image-20220415123624618](https://gcore.jsdelivr.net/gh/zaixiadingdangmao/imageStore/image-20220415123624618.png)

解压到你需要安装的目录，这个目录就是 NVM 地址目录，比如我这里的地址地址是：`D:\myEnvironment\nvm`

![image-20220415123835867](https://gcore.jsdelivr.net/gh/zaixiadingdangmao/imageStore/image-20220415123835867.png)

### 配置环境变量

- `NVM_HOME`：NVM 地址目录，比如：`D:\myEnvironment\nvm`
- `NVM_SYMLINK`：NVM 配置 Node.js 的软链接，**该目录需指向并不存在的目录（NVM 使用时候会自动创建）**，比如：`D:\myEnvironment\nodejs`

![image-20220415124043567](https://gcore.jsdelivr.net/gh/zaixiadingdangmao/imageStore/image-20220415124043567.png)

![image-20220415124127011](https://gcore.jsdelivr.net/gh/zaixiadingdangmao/imageStore/image-20220415124127011.png)

追加内容到`Path`，追加的内容

- `%NVM_HOME%`
- `%NVM_SYMLINK%`

![image-20220415124323501](https://gcore.jsdelivr.net/gh/zaixiadingdangmao/imageStore/image-20220415124323501.png)

安装完成后，在`CMD`或者`Powershell`下，输入 NVM，即可发现安装完成

### 配置国内镜像

到你 NVM 安装路径，打开 settings.txt 文件（如果没有，则创建即可），更改：

```js
root: D:\myEnvironment\nvm
path: D:\myEnvironment\nodejs
arch: 64
proxy: none

node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
```

查看已安装版本

```nvm
nvm list
```

查看可安装列表

```nvm
nvm list available
```

安装 nodejs 版本

```
nvm install 8.9.3
```

某一些版本太旧，安装失败，需要去[nodejs 官网](https://nodejs.org/zh-cn/download/releases)自己下载，下载安装的文件路径在你的 nvm 文件夹下有一个版本文件夹

![image-20220415144646617](https://gcore.jsdelivr.net/gh/zaixiadingdangmao/imageStore/image-20220415144646617.png)

![image-20220415124811893](https://gcore.jsdelivr.net/gh/zaixiadingdangmao/imageStore/image-20220415124811893.png)

使用某一版本

```nvm
nvm use 8.9.3
```
