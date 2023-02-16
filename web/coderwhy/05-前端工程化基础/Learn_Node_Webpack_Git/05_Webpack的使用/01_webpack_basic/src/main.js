import { sum } from './utils/math'

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


// webpack-cli用于识别命令行，webpack用于代码
// 一般都是用局部安装的webpack

// 用指定入口:--entry ./src/main.js，因为npx webpack默认是用./src/index.js  
// ---output-filename + 名字.js :指定打包后名字
// --output-path + 路径:指定打包后路径
// npx webpack --entry ./src/main.js --output-filename bundle.js --output-path ./build
// 简化：用webpack.config.js来配置 因为webpack是运行依赖node所以要写commonJS的语法 然后终端npx webpack

// __dirname:获取当前文件所在路径


// webpack.config.js改名字后怎么样正常运行 曰：指定配置文件
// npx webpack --config wk.config.js
// 简化：用package.json
// npm run build

// webpack默认打包.js文件
