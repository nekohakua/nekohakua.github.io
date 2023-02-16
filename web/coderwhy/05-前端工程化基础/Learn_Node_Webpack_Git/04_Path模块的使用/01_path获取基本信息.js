// path是内置模块
const path = require("path")

// __filename是当前的路径
// const filepath = __filename
const filepath = "C://abc/cba/nba.txt"

// 1.可以从一个路径中获取一些信息（少用）
// 后缀名
console.log(path.extname(filepath))
// 获取文件名
console.log(path.basename(filepath))
// 获取文件的路径
console.log(path.dirname(filepath))


const path1 = "/abc/cba"
const path2 = "../why/kobe/james.txt"
const path3 = "../../why/kobe/james.txt"
// 这是字符串拼接，不是路径拼接
// console.log(path1 + path2)

// 2.将多个路径拼接在一起: path.join
console.log(path.join(path1, path2))
console.log(path.join(path1, path3))


