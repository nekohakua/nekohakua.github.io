(function() {
  // 没有加立即执行函数，用var时，bbb.js会改变aaa.js的name变量
  // 没有加立即执行函数，用let时，会报错，因为aaa.js已经定义了name,bbb.js不能叫name了
  let name = "bbb"
  console.log(name)
}())

// aaa.js和bbb.js没有变量冲突了，因为使用了立即执行函数，因为函数的作用域在函数里生效
// 相当于下面两个函数
function foo() {
  let name = "foo"
}

function bar() {
  let name = "bar"
}
