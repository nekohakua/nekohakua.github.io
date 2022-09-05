// 1.输出的内容
console.log("Hello World")

const num1 = 100
const num2 = 200

console.log(num1 + num2)


// 2.给程序输入内容

console.log(process.argv)
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\Lenovo\\Desktop\\code\\nekohakua.github.io\\web\\coderwhy\\05-前端工程化基础\\Learn_Node_Webpack_Git\\01_Node基础知识\\02_Node的输入和输出.js',
//   'num1=20',
//   'num2=30'
// ]

// 以后webpack判断是开发还是生产等环境
// node ./webpack.config.js env=development
const arg1 = process.argv[2]
const arg2 = process.argv[3]

console.log(arg1, arg2)

setTimeout(() => {
  // 控制台清空
  // console.clear()

  // 打印调用栈，执行顺序是从下往上
  console.trace()
}, 3000);

