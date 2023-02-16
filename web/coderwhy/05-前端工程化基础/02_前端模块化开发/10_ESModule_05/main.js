// import { name, age, sayHello} from "./foo.js"

// console.log(name, age)

// import函数的使用
let flag = true
if (flag) {
    // 不允许在逻辑代码中编写import导入语法，只能写到js代码顶层
    // import {name, age, sayHello} from "./foo.js"
    // console.log(name, age)

    // 如果确实是逻辑成立时才导入某个模块
    // import函数 异步的 返回的是promise
    // const importPromise =  import("./foo.js")
    // // promise是在then拿到结果
    // importPromise.then(res => {
    //     console.log(res.name, res.age)
    // })

    // 简化，一般这样写
    import("./foo.js").then(res => {
        console.log(res.name, res.age)
    })


    console.log("--------")

}

