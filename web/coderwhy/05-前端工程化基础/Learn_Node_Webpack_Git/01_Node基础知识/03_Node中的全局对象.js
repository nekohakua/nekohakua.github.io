// window只是浏览器的全局对象
// console.log(window)
// 1.类似于window的node的全局对象
// console.log(global)


// // 2.特殊的全局对象
// // __dirname当前的文件所在的目录结构(重要)
// console.log(__dirname)
// // __filename当前目录+文件名称
// console.log(__filename)


// 3.模块化时具体学习(重要)
// console.log(module)
// console.log(exports)
// console.log(require)


// // 4.常见的全局对象(了解)
// console.log(process)
// console.log(process.argv)
// 具体查看官方文档：https://nodejs.org/dist/latest-v16.x/docs/api/process.html


// 5.定时器方法
// node实现的定时器，不是浏览器实现的
// setTimeout(() => {
//   console.log("setTimeout")
// }, 2000);
// setInterval(() => {
//   console.log("setInterval")
// }, 3000)
// // 额外补充: Immediate: 立即/立刻 立即执行的回调函数，跟事件循环有关系
// setImmediate(() => {
//   console.log("setImmediate")
// })

// // 额外执行函数 跟事件循环有关系
// process.nextTick(() => {
//   console.log("nextTick")
// })
// 面试题：setImmediate和process.nextTick谁先执行 答曰：不一定，后面讲


// // 6.全局对象
// 在浏览器里var a = 1会加到window全局变量，在node里var a = 1不会加到global全局变量里
// console.log(global)
// globalThis：统一浏览器和node的全局变量的写法，分别指向它们全局变量window和global
console.log(globalThis)
console.log(global === globalThis)
// 面试题：node的全局变量和浏览器的全局变量有什么区别