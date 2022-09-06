const name = "foo"
const age = 18
function sayHello() {
  console.log("sayHello")
}

// 1.在开发中使用的很少
// exports.name = name
// exports.age = age
// exports.sayHello = sayHello

// 2.将模块中内容导出
// 结论: Node导出的本质是在导出module.exports对象，所以require查找的是module.exports对象
// module.exports.name = name
// module.exports.age = age
// module.exports.sayHello = sayHello
// // 说明：module.exports和exports是同一个对象
// console.log(exports.name, "----")
// console.log(exports.age, "----")
// console.log(exports.sayHello, "----")
// console.log(exports === module.exports)

// // 3.开发中常见的写法
// 写了{}说明创建了新对象，所以module.exports不再指向exports了，看day1的04图
module.exports = {
  name,
  age,
  sayHello
}
exports.name = "exports.name" //这样改，运行main后没效果了
module.exports.name = "module.exports.name"

