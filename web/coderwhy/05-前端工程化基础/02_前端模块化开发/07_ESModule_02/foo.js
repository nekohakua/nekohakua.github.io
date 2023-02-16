// 3.导出方式三:（常用）
export const name = "foo"
export const age = 18

export function sayHello() {
  console.log("sayHello")
}

export class Person {}

// 1,2
// const name = "foo"
// const age = 18

// function sayHello() {
//   console.log("sayHello")
// }

// 1 导出方式一（常用）
// export {
//   name,
//   age,
//   sayHello
// }

// 2.导出方式二:导出时给标识符起别名,一般不在导出时起别名，在导入时起别名
// export {
//   name as fname,
//   age,
//   sayHello
// }


