const name = "bar"
const age = 180

function sayHello() {
  console.log("saybar")
}

// ESModule的导出：export 不是CommonJS的exports
// 这里不是对象，这里是特殊的语法 export{ 标识符1，标识符n }
export {
  name,
  age,
  sayHello
}