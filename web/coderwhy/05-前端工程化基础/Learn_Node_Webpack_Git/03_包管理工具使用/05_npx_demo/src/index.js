// 指定安装版本
// npm i webpack@3.6.0 -g

// 以前
// 对于window/linux/macOS系统,终端命令先在当前目录下找,(不会找子目录),然后到环境变量里找可执行的程序
// 如
// webpack（webpack特殊，会找子目录有没有可执行的webpack了，而yarn等不会）
// 那么如何环境变量安装了webpack3.6.0,当前子目录node_modules安装了最新版本,怎么样使用最新版本的webpack的命令
// 终端命令
// cd 到 ./node_modules/.bin
// webpack --version
// 所以，以前用 npx webpack --version 来使用当前子目录的webpack版本
// 简化：在scripts写命令"build": "npx webpack",然后终端 npm run build 
// 更简化（如果在package.json里可以省略,会优先到那个目录找）:在scripts写命令"build": "webpack",然后终端 npm run build 

const message = "Hello World"
console.log(message)


function foo(arg) {
  console.log(arg.length)
}

foo(message)
foo("coderwhy")

function sum(num1, num2) {
  return num1 + num2
}

sum(20, 30)
sum(111, 222)