// 导入 import
// 注意事项一: 在浏览器中直接使用esmodule时, 必须在文件后加上后缀名.js,用webpack后可以不加
import { name, age, sayHello } from "./foo.js"

console.log(name)
console.log(age)
sayHello()
