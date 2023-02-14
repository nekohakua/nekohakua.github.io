export const name = "foo"
export const age = 18

export function sayHello() {
    console.log("sayHello")
}

// import.meta是一个给JavaScript模块暴露特定上下文的元数据属性的对象。它包含了这个模块的信息，比如说这个模块的URL；(用的少)
console.log(import.meta)