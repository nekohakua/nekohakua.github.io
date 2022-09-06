
// 看ppt
// 总结：1.优先查找并导入内置模块

// 可以省略
// const foo = require("foo")

// 1.根据路径导入自己编写模块
// 可以省略，原来是./utils/index.js
// const utils = require("./utils")
// console.log(utils.formatDate())


// // 2.导入node提供给内置模块
// // 导入path模块
// const path = require("path")
// // 导入http模块
// const http = require("http")
// console.log(path, http)


// 3.情况三: 名称不是路径, 也不是一个内置模块时在本目录的node_modules文件夹找，没有找到就往上级找直到根目录
const why = require("why")
console.log(why)

// 实际上，用第三方包：axios用命令：npm install axios 后面具体讲解
const axios = require("axios")
console.log(axios)
axios.get()

// console.log(this)
