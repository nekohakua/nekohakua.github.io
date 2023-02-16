const moduleA = (function() {
  let name = "why"
  let age = 18
  let height = 1.88
  console.log(name)

  // return {
  //   name: name,
  //   age: age,
  //   height: height,
  // }
  // 的简写是下面
  return {
    name,
    age,
    height
  }
}())

// ECMAScript没有推出来自己的模块化方案: CommonJS/AMD/CMD
// ES6(ES2015)推出自己的模块化方案: ESModule
