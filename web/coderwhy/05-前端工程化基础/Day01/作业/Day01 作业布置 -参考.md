# Day01 作业布置

## 一. 完成上课所有的代码练习

01-Node输入和输出

```js
// 输出
var num1 = 10;
var num2 = 20;
console.log(num1 + num2);
// 输入
console.log(process.argv);
var arg1 = process.argv[2];
var arg2 = process.argv[3];
console.log(arg1, arg2);
setTimeout(function () {
  // 清空控制台
  // console.clear();
  // 打印函数的调用栈
  console.trace();
}, 2000);
```

02-Node的全局对象

```js
console.log(this)
// console.log(window)
console.log(global)
// 特殊的全局对象
//1.当前文件所在的目录结构
console.log(__dirname)
//2.当前的目录+文件名称
console.log(__filename)
//常见的全局对象
//进程对象
console.log(process)
console.log(process.argv)
//定时器方法
setTimeout(function () {
  console.log("111")
}, 2000)
// setInterval(function () {
//   console.log("2222")
// }, 3000)
//立即执行
setImmediate(function () {
  console.log("立即执行")
})
// 添加到下一次tick队列中
process.nextTick(function () {
  console.log("nextTick")
})
// global是一个全局对象,在新的标准中还有一个globalThis，也是指向全局对象的
console.log("globalThis", globalThis)
```

03-global对象

```js
console.log(this)
// console.log(window)
console.log(global)
// 特殊的全局对象
//1.当前文件所在的目录结构
console.log(__dirname)
//2.当前的目录+文件名称
console.log(__filename)
//常见的全局对象
//进程对象
console.log(process)
console.log(process.argv)
//定时器方法
setTimeout(function () {
  console.log("111")
}, 2000)
// setInterval(function () {
//   console.log("2222")
// }, 3000)
//立即执行
setImmediate(function () {
  console.log("立即执行")
})
// 添加到下一次tick队列中
process.nextTick(function () {
  console.log("nextTick")
})
// global是一个全局对象,在新的标准中还有一个globalThis，也是指向全局对象的
console.log("globalThis", globalThis)
```

04-没有模块化

aaa.js

```js
//利用立即执行函数
var moduleA = (function () {
  let name = "张三"
  let age = 90
  // 对象的增强
  return {
    name,
    age
  }
})()
```

bbb.js

```js
console.log(moduleA)
```

index.html

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./aaa.js"></script>
    <script src="bbb.js"></script>
    <script>
      console.log(moduleA);
    </script>
  </body>
</html>

```

05_CommonJS_01

* bar.js

  ```js
  var name = "张三"
  var age = 90
  // 方式一.导出
  exports.name = name
  exports.age = age
  //测试
  // setTimeout(function () {
  //   console.log(exports.name)
  // }, 4000)
  console.log("---")
  setTimeout(function () {
    // 修改
    exports.name = "花花"
  }, 2000)
  ```

* util.js

  ```js
  function foo() {
    console.log("foo---")
  }
  function fn() {
    console.log("fn---")
  }
  exports.foo = foo
  exports.fn = fn
  ```

* main.js

* ```js
  // 导入
  var bar = require("./bar")
  // { name: '张三', age: 90 }
  //从对象中获取属性
  console.log(bar)
  console.log(bar.name)
  console.log(bar.age)
  // 2.导入对象之后---解构
  // var { name, age } = require("./bar")
  // console.log(name, age)
  //3.引用赋值
  // setTimeout(function () {
  //   // bar.name = "李四"
  //   console.log(bar.name)
  // }, 3000)
  var info = require("./util")
  console.log(info)
  info.foo()
  info.fn()
  ```

06-CommonJS_02

* foo.js

  ```js
  var name = "李四"
  var age = 88
  function bar() {
    console.log("bar---")
  }
  //导出方式一
  // exports.name = name
  // exports.age = age
  // exports.bar = bar
  //导出方式二
  // Node导出的本质就是在导出module.exports对象
  // module.exports === exports
  // module.exports.name = name
  // module.exports.age = age
  // module.exports.bar = bar
  // console.log(module.exports === exports)
  
  //导出方式三,常用
  // 对象增强 ,module.exports !== exports,因为module.exports指向新的引用
  module.exports = {
    name,
    age,
    bar
  }
  exports.name = "张三"
  console.log(module.exports.name) //李四
  ```

* main.js

  ```js
  // 导入
  var info = require("./foo")
  console.log(info)
  ```

07_CommonJS_03

* foo.js

  ```js
  var name = "李四"
  var age = 88
  function bar() {
    console.log("bar---")
  }
  module.exports = {
    name,
    age,
    bar
  }
  exports.name = "张三"
  console.log(module.exports.name) //李四
  ```

* main.js

* ```js
  // 导入
  // X 为路径,先将utils当文件查找,找不到,当utils为目录,查找
  // utils/index.js
  var info = require("./utils")
  console.log(info)
  // var obj = require("utils")
  // console.log(obj)//报错
  //2.导入node提供的内置模块
  var path = require("path")
  var http = require("http")
  console.log(path, http)
  //3.X不是路径,也不是内置模块
  // 去node_modules找
  // var content = require("content")
  // console.log(content)
  var axios = require("axios")
  console.log(axios)
  ```

07_CommonJS_08

* main.js

  ```js
  //1.当一个模块被导入,模块中的代码会被执行一次
  // console.log("---")
  // var foo = require("./foo.js")
  // console.log(foo)
  //2.当一个模块被多次导入,模块中的代码只会执行一次
  // var foo1 = require("./foo")
  // var foo2 = require("./foo")
  // var foo3 = require("./foo")
  // var foo4 = require("./foo")
  // var foo5 = require("./foo")
  // var foo6 = require("./foo")
  //3.如果有循环引入,那么按照深度优先算法
  //a-c-d-e
  require("./aaa")
  // b,因为ccc中module中，loaded为true表示已经加载 
  require("./bbb")
  
  ```

  

## 二. 说说Node是什么？和浏览器有什么区别和关系？

* Node.js是一个基于V8 JavaScript引擎的JavaScript运行时环境

  ```
  V8可以嵌入到任何C ++应用程序中，无论是Chrome还是Node.js，事实上都是嵌入了V8引擎来执行JavaScript代码；
  但是在Chrome浏览器中，还需要解析、渲染HTML、CSS等相关渲染引擎，另外还需要提供支持浏览器操作的API、浏览器自己的事件循环等
  在Node.js中我们也需要进行一些额外的操作，比如文件系统读/写、网络IO、加密、压缩解压文件等操作
  ```

  

* 在浏览器中，全局变量都是在window上的，比如有document、setInterval、setTimeout、alert、console等等
  
  * 在浏览器中执行的JavaScript代码，如果我们在顶级范围内通过var定义的一个属性，默认会被添加到window对象上
  
* 在Node中，我们也有一个global属性，并且看起来它里面有很多其他对象
  
  * 在node中，我们通过var定义一个变量，它只是在当前模块中有一个变量，不会放到全局中



## 三. 电脑上安装Node环境

已安装





## 四. 说说你对模块化开发的理解

* 模块化开发最终的目的是将程序划分成一个个小的结构(模块)

* 这个结构中编写属于自己的逻辑代码，有自己的作用域，定义变量名词时不会影响到其他的结构

* 可导出变量,函数,对象等给其他模块用

* 也可导入其他模块中的变量,函数,对象

* 按照这种结构划分开发程序的过程，就是模块化开发的过程

* 早期是没有模块化, 带来一些问题

  * 命名冲突 -> 立即执行函数 -> 自定义模块 -> 没有规范
  * 社区中模块化规范: CommonJS/AMD/CMD
  * ES6中推出模块化: ES Module

  

  

  





## 五. 整理Node中模块化的规则和原理

* exports的本质

  * exports和require指向是同一个对象: 引入赋值

* module.exports和exports的关系:

  * 默认指向的是同一个对象

* require本质查找的module.exports的对象

* module.exports赋值新的对象

  * exports就没有什么意义

  * module.exports 和exports指向不同的地址

    ```js
    // 3.开发中常见的写法
    module.exports = {
      name,
      age,
      sayHello
    }
    ```

* require 查找规则

  * 情况一：X是一个Node核心模块，比如path、http

    * 直接返回核心模块，并且停止查找

  * 情况二：直接是一个X（没有路径），并且X不是一个核心模块

    * 从node_modules查找

  * 情况三：X是一个Node核心模块，比如path、http

    * 第一步：将X当做一个文件在对应的目录下查找；

      * .如果有后缀名，按照后缀名的格式查找对应的文件

      * 如果没有后缀名，会按照如下顺序：

      ​         1) 直接查找文件X

      ​          2) 查找X.js文件

      ​          3) 查找X.json文件

      ​          4) 查找X.node文件

    * 第二步：没有找到对应的文件，将X作为一个目录

      * 查找目录下面的index文件

      ​            1) 查找X/index.js文件

      ​             2)  查找X/index.json文件

      ​             3)  查找X/index.node文件

      ​             4)  如果没有找到，那么报错：not found

      

      

      















































