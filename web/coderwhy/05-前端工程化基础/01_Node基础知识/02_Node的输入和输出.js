// 1.输出的内容
console.log("Hello World")

const num1 = 100
const num2 = 200

console.log(num1 + num2)


// 2.给程序输入内容

console.log(process.argv)
// argc：argument counter的缩写，传递参数的个数；
// argv：argument vector（向量、矢量）的缩写，传入的具体参数。
//  写前缀，然后敲Tab键进行补齐
//  node 02_Node的输入和输出.js num1=20 num2=30 或 node 02_Node的输入和输出.js num1=20 num2=30
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\Lenovo\\Desktop\\code\\nekohakua.github.io\\web\\coderwhy\\05-前端工程化基础\\Learn_Node_Webpack_Git\\01_Node基础知识\\02_Node的输入和输出.js',
//   'num1=20',
//   'num2=30'
// ]
//  第一个参数：node所在的目录
//  二：当前js文件运行所在目录
// 三：参数1
// 四：参数2

// 以后webpack判断是开发还是生产等环境
// node ./webpack.config.js env=development
const arg1 = process.argv[2]
const arg2 = process.argv[3]

console.log(arg1, arg2)

setTimeout(() => {
  // 控制台清空，了解
  // console.clear()

  // 打印调用栈，执行顺序是从下往上，执行的是当前的
  console.trace()
}, 3000);

