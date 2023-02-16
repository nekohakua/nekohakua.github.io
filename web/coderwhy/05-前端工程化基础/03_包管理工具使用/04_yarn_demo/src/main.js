// 初始化
// yarn init
// yarn init -y

// 安装包
// yarn add axios dayjs

const dayjs = require("dayjs")

console.log(dayjs())

// yarn run start

// yarn 和 npm 命令区别看ppt03_前端包管理工具详解.pdf

// npm因为国外服务器访问不了时用cnpm(镜像),把cnpm的镜像改成淘宝的https://registry.npm.taobao.org
// npm install cnpm -g //安装cnpm或下面安装并且设置镜像
// npm install -g cnpm --registry=https://registry.npm.taobao.org
// cnpm的切换服务器
// cnpm config set registry=https://registry.npm.taobao.org
// 查看镜像地址
// cnpm config get registry

// npm的切换服务器
// npm config set registry=https://registry.npm.taobao.org
// 或切换手机热点网络

// 查看npm镜像
// npm config get registry
