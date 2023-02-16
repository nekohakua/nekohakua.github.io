import { sum } from './utils/math'
// 因为main.js是webpack打包的入口，所以在这里引用一下可以让webpack找到依赖进行打包
import './component/cpns'

const message = "Hello World"

console.log(sum(20, 30))
console.log(sum(10, 12))

console.log(message.length)

// 有些浏览器识别不了箭头函数，浏览器不支持模块化，所以用webpack打包成普通的代码
const bar = () => {
  console.log("bar function execution~")
}

bar()
bar()

// 安装css-loader
// npm install css-loader -D

// npm install style-loader -D

// npm install less-loader -D

// 能让webpack打包时自动判断.css的属性是否要添加浏览器前缀等适配(需要安装对于适配的插件)
// npm install postcss-loader -D

// 能够让postcss-loader适配前缀的插件
// npm install autoprefixer -D

// npm uninstall autoprefixer

// 有预设的postcss:postcss-preset-env,就不用配置autoprefixer了 功能：自动加浏览器前缀，支持把66666666转换成rgba颜色,支持把px转换成rem/vw(需要额外插件)
// npm install postcss-preset-env -D


// npm run build

