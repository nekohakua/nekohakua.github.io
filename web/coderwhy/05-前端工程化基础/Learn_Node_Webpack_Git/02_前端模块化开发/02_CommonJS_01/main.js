// 在node里，每一个文件都是独立的一个模块，都有自己的作用域

// 1.直接获取导出的对象, 从对象中获取属性 require("./util.js")：导入 require是函数，有返回值，所以用变量接受 util：常用公共操作类(工具类)
// const util = require("./util.js")
// console.log(util)
// console.log(util.UTIL_NAME)
// console.log(util.formatCount())
// console.log(util.formatDate())

// 2.优化1.：导入对象之后, 直接对其进行解构 开发中这种用的多
// const { 
//   UTIL_NAME,
//   formatCount, 
//   formatDate 
// } = require("./util.js")
// console.log(UTIL_NAME)
// console.log(formatCount())
// console.log(formatDate())


// // 3.探讨require的本质
const bar = require("./bar.js")
console.log(bar.name) // bar

// 4s之后重新获取name 
// 本质上是引用赋值，bar指向的对象和bar.js的exports指向的对象是一样的
// setTimeout(() => {
//   console.log(bar.name) //why
// }, 4000)

// 2s之后通过bar修改了name
setTimeout(() => {
  console.log("2s之后通过bar修改了name:")
  bar.name = "kobe"
}, 2000)
// 本质：因为bar和bar.js的exports是指向同一个对象，所以bar.js的log是打印bar.name，所以哪个地方修改，其他地方的都变
