import { createApp } from 'vue'
import Hello from './vue_demo/Hello'
import "./utils/abc/cba/nba/why/test"
import { sum } from './utils/math'
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

createApp(Hello).mount("#app")

// 使用通过DefinePlugin注入的变量
console.log(coderwhy)
console.log(counter)

// 用这个判断是开发环境还是生产环境
console.log(process.env.NODE_ENV)

// npm install

// npm run build

// 借助插件就不需要手动删除dist（build）下上次打包的多余东西了
// npm install clean-webpack-plugin -D

// 对HTML进行打包处理我们可以使用另外一个插件：HtmlWebpackPlugin；
// npm install html-webpack-plugin -D
// npm run build 后在build生成index.html,（打开它使用格式化文档，进行改名字等操作）

