// 1.导入方式一（常用）
// import { name, age, sayHello } from "./foo.js"

// 2.导入方式二：导入时给标识符起别名（常用）
// import { name, age as fage, sayHello } from "./foo.js"

// 3.导入方式三：导入时给整个模块起别名,*是整个模块，as foo是别名
import * as foo from "./foo.js"

const name = "main"

console.log(name)
console.log(foo.name)
console.log(foo.age)
foo.sayHello()