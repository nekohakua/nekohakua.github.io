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

// 生产环境打包执行
// npm run build

// 开发环境执行开启本地服务器
// npm run serve


// entry: "./src/main.js",为什么能找到入口文件，因为./不是相对本目录的，是相对context:的,默认是webpack启动的路径，即package.json的"build": "webpack --config ./config/webpack.prod.config.js",的./config/webpack.prod.config.js

// 合并开发环境配置和生产环境配置的公共部分的插件
// npm install webpack-merge -D



