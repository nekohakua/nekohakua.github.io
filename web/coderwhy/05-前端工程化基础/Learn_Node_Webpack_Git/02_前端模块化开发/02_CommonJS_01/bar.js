let name = "bar"

exports.name = name

// main中3.1的代码
// 1.2s之后修改
// setTimeout(() => {
//   // name = "why" //不要这样改，导出值不会改掉，只是改了变量值
//   exports.name = "why"
// }, 2000)

// main中3.2的
// 2.4s之后获取
setTimeout(() => {
  console.log("4s之后通过bar.js获取")
  console.log(exports.name)
}, 4000)
