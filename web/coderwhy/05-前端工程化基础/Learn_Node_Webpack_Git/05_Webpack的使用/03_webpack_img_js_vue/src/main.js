import { createApp } from 'vue'
// import Hello from './vue_demo/Hello.vue'
// 通过配置wk.config.js不用写后缀了
import Hello from './vue_demo/Hello'

import "./utils/abc/cba/nba/why/test"


// 默认加后缀之一:js,math.js
import { sum } from './utils/math'
// 因为main.js是webpack打包的入口，所以在这里引用一下可以让webpack找到依赖进行打包
import './component/cpns'

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

// vue代码
createApp(Hello).mount("#app")



// CLI:脚手架

// npm install

// npm run build

// webpack默认打包js文件成ES6 一般我们需要转换成ES5，因为兼容浏览器 babel可以帮我们兼容
// npm install babel-loader -D

// 需要插件让babel-loader转换 
// 转换箭头函数的插件
// npm install @babel/plugin-transform-arrow-functions -D
// 转换const为var的插件
// npm install @babel/plugin-transform-block-scoping -D
// 简化：使用预设
// npm install @babel/preset-env -D


// npm install vue 
// npm install vue-loader -D

