const path = require("path")

// 将多个路径拼接一起, 最终一定返回一个绝对路径: path.resolve   经常用
// 从右往左 直到构造完成一个绝对路径 还没有生成绝对路径，则使用当前工作目录
console.log("-------resolve---------")
console.log(path.resolve("./abc/cba", "../why/kobe", "/abc.txt"))
// C:\abc.txt

console.log(path.resolve("./abc/cba", "../why/kobe", "./abc.txt"))
// \abc\why\kobe\abc.txt

console.log(path.resolve())
