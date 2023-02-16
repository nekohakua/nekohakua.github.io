import { createApp } from 'vue'
import Hello from './vue_demo/Hello'
import "./utils/abc/cba/nba/why/test"
import { sum } from './utils/math'
import './component/cpns'
import "./utils/HMRdemo.js"

const message = "Hello World"

console.log(sum(20, 30))
console.log(sum(10, 12))

console.log(message.length)
console.log(sum(100, message.length))


const bar = () => {
  console.log("bar function execution~")
}

bar()
bar()

createApp(Hello).mount("#app")

console.log(coderwhy)
console.log(counter) 

console.log(process.env.NODE_ENV)

console.log("webpack-dev-server =============啊打发是否")


// 指定哪个模块需要HMR
if (module.hot) {
  module.hot.accept("./utils/HMRdemo.js", () => {
    console.log("HMRdemo模块发生了更新")
  })
}


// npm install

// npm run build



// 开发阶段的服务器,代替用live server 本地服务器 打包后文件放到内存里，不是放到硬盘了，直接搭建服务器从内存的读取文件
// npm install webpack-dev-server -D
// 然后修改package.json的scripts
// npm run serve
// 终端ctrl + c停止

// Hot Module Replacement 默认已经打开 需要指定哪个模块 而框架已经搭建好了，不需要麻烦操作
// 模块热替换是指在 应用程序运行过程中，替换、添加、删除模块，而无需重新刷新整个页面；
