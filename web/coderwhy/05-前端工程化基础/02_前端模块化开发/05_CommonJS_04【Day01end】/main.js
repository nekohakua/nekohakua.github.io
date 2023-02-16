
// 1.结论一: 当一个模块被引入(导入), 模块中的代码会被执行一次，然后再执行导入这里的代码
// console.log("--------")
// const foo = require("./foo")
// console.log("++++++++")

// 2.结论二: 当一个模块被多次引入时, 模块中的代码只会执行一次
// const foo2 = require("./foo")
// const foo3 = require("./foo")
// const foo4 = require("./foo")
// const foo5 = require("./foo")
// const foo6 = require("./foo")

// 3.结论三: 如果有循环引入, 那么执行顺序: 深度优先算法(图结构),先走到底
console.log("main")
require("./aaa")
require("./bbb")

// webpack中使用了CommonJS,项目通过Webpack打包后会变成一个js文件，对浏览器来说就很好执行，webpack还可以分包，变成多个js文件

// AMD代码在预习有（了解，AMD几乎不用了）