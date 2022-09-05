# Day02 作业布置

## 一. 完成上课所有的代码练习

01-基本使用

foo.js

```js
var name = "李四"
var age = 90
function bar() {
  console.log("bar--")
}
// 导出
export {
  name,
  age,
  bar
}
```

main.js

```js
// 导入,必须在顶层,必须加后缀名js
import { name, age, bar } from "./foo.js"
console.log(name, age)
bar()
```

index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- 必须写type="module" ,如果有使用模块化的代码,必须开启一个服务打开 -->
    <script src="./foo.js" type="module"></script>
    <script src="./main.js" type="module"></script>
  </head>
  <body></body>
</html>

```

02-导出

foo.js

```js
// 导出方式一:在语句什么的前面加上export
// export const name = "张三"
// export const age = 89
// export function bar() {
//   console.log("bar--")
// }
const name = "张三"
const age = 89
function bar() {
  console.log("bar--")
}
//导出方式二:将所有需要导出的标识符,放到export后面{}
// export {
//   name,
//   age,
//   bar
// }
//导出方式三: 导出时给标识符起别名
export {
  name as newName,
  age,
  bar as fn
}

```

main.js

```js
// 导入,必须在顶层,必须加后缀名js
// import { name, age, bar } from "./foo.js"
import { newName, age, fn } from "./foo.js"

// console.log(name, age)
// bar()
console.log(newName, fn)
```

03-导入

foo.js

```js
const name = "张三"
const age = 89
function bar() {
  console.log("bar--")
}
//导出方式二:将所有需要导出的标识符,放到export后面{}
export {
  name,
  age,
  bar
}


```

main.js

```js
// 导入,必须在顶层,必须加后缀名js
//导入方式一
// import { name, age, bar } from "./foo.js"
//导入方式二 :导入时给标识符取别名
import { name as newName, age as newAge, bar as fn } from "./foo.js"
//导入方式三: 通过*将模块功能放到一个模块功能对象上
import * as foo from "./foo.js"
// console.log(newName, newAge, fn)
console.log(foo.name)
console.log(foo.age)
foo.bar()
// console.log(name, age)
// bar()

```

04-export和import结合

index.js

```js
// 入口文件
// 先导入再导出
// import { formatData } from "./format.js"
// import { parseLyric } from "./parse.js"
// export { formatData, parseLyric }
//优化一
// export { formatData } from "./format.js"
// export { parseLyric } from "./parse.js"
// 优化二
// 导入format中的所有,导出所有
export * from "./format.js"
export * from "./parse.js"
```

main.js

```js
// import { formatData } from "./utils/format.js"
// import { parseLyric } from "./utils/parse.js"
import { formatData, parseLyric } from "./utils/index.js"
console.log(formatData())
console.log(parseLyric())

```

05-默认导入和导出

foo

```js
function bar() {
  console.log("bar--")
}
//默认导出,不需要指定名字,方式一
// export default bar
// 默认导出 方式二:定义标识符直接作为默认导出
// 注意:一个模块只能有一个默认导出
export default function baz() {
  console.log("baz---")
}


```

main.js 

```js
// 导入不用{},可以自己指定名字
// import bar from "./foo.js"
import baz from "./foo.js"
// console.log(bar)
console.log(baz)

```

06-import函数

```js
// 导入,必须在顶层,必须加后缀名js
// import { name, age, bar } from "./foo.js"
// 1.通过import加载一个模块,是不可以放在逻辑代码中
var flag = true
if (flag) {
  // import { name, age, bar } from "./foo.js"
  //2.使用import函数来动态加载,返回promise
  import("./foo.js").then(res => {
    console.log(res)
    console.log(res.name, res.age, res.bar)
  })
}
console.log("你猜不猜")
console.log(import.meta)



```

## 二. 整理ES Module模块化的规则和原理

### 1.2. 导入和导出的三种方式

* 导出的方式

  * 在语句声明的前面直接加上export关键字

  * 将所有需要导出的标识符，放到export后面的 {}中

    * 这里的 {}里面不是ES6的对象字面量的增强写法，{}也不是表示一个对象的；
    * export {name: name}，是错误的写法；

  * 导出时给标识符起一个别名

    * 通过as取别名

    ```js
    // 导出方式一:在语句什么的前面加上export
    // export const name = "张三"
    // export const age = 89
    // export function bar() {
    //   console.log("bar--")
    // }
    const name = "张三"
    const age = 89
    function bar() {
      console.log("bar--")
    }
    //导出方式二:将所有需要导出的标识符,放到export后面{}
    // export {
    //   name,
    //   age,
    //   bar
    // }
    //导出方式三: 导出时给标识符起别名
    export {
      name as newName,
      age,
      bar as fn
    }
    ```

* 导入   `从另外一个模块中导入内容`

* 导入的方式

  * import {标识符列表} from '模块'
    * 注意：这里的{}也不是一个对象，里面只是存放导入的标识符列表内容
  * 导入时给标识符起别名
    * 通过as关键字起别名
  * 通过 * 将模块功能放到一个模块功能对象（a module object）上

```js
// 导入,必须在顶层,必须加后缀名js
//导入方式一
// import { name, age, bar } from "./foo.js"
//导入方式二 :导入时给标识符取别名
import { name as newName, age as newAge, bar as fn } from "./foo.js"
//导入方式三: 通过*将模块功能放到一个模块功能对象上
import * as foo from "./foo.js"
// console.log(newName, newAge, fn)
console.log(foo.name)
console.log(foo.age)
foo.bar()
// console.log(name, age)
// bar()

```



### 1.3. 默认导出/导入

* 默认导出export时可以不需要指定名字

* 在导入时不需要使用 {}，并且可以自己来指定名字

* 在一个模块中，只能有一个默认导出（default export）

* 默认导出

  ```js
  function bar() {
    console.log("bar--")
  }
  //默认导出,不需要指定名字,方式一
  // export default bar
  // 默认导出 方式二:定义标识符直接作为默认导出
  // 注意:一个模块只能有一个默认导出
  export default function baz() {
    console.log("baz---")
  }
  
  ```

* 默认导入

  ```js
  // 导入不用{},可以自己指定名字
  // import bar from "./foo.js"
  import baz from "./foo.js"
  // console.log(bar)
  console.log(baz)
  
  ```

  

### 1.4. export和import结合

why这样做?

* 在开发和封装一个功能库时，通常我们希望将暴露的所有接口放到一个文件中；

* 这样方便指定统一的接口规范，也方便阅读；

* 这个时候，我们就可以使用export和import结合使用

```js
// 入口文件
// 先导入再导出
// import { formatData } from "./format.js"
// import { parseLyric } from "./parse.js"
// export { formatData, parseLyric }
//优化一
// export { formatData } from "./format.js"
// export { parseLyric } from "./parse.js"
// 优化二
// 导入format中的所有,导出所有
export * from "./format.js"
export * from "./parse.js"
```



### 1.5. import函数

* 通过import加载一个模块，是不可以在其放到逻辑代码中的

* 使用 import() 函数来动态加载

  * import函数返回一个Promise，可以通过then获取结果

  ```js
  // 导入,必须在顶层,必须加后缀名js
  // import { name, age, bar } from "./foo.js"
  // 1.通过import加载一个模块,是不可以放在逻辑代码中
  var flag = true
  if (flag) {
    // import { name, age, bar } from "./foo.js"
    //2.使用import函数来动态加载,返回promise
    import("./foo.js").then(res => {
      console.log(res)
      console.log(res.name, res.age, res.bar)
    })
  }
  console.log("你猜不猜")
  console.log(import.meta)
  ```

  



### 1.6. ESModule原理

* ES Module的解析过程可以划分为三个阶段：
  * 阶段一：构建（Construction），根据地址查找js文件，并且下载，将其解析成模块记录（Module Record）；
  * 阶段二：实例化（Instantiation），对模块记录进行实例化，并且分配内存空间，解析模块的导入和导出语句，把模块指向对应的内存地址。
  * 阶段三：运行（Evaluation），运行代码，计算值，并且将值填充到内存地址中；



## 三. 整理npm、yarn常用的命令以及作用



| npm                              | yarn                         | 描述                           |
| :------------------------------- | ---------------------------- | ------------------------------ |
| npm install                      | yarn  install                | 根据package.json中的依赖包安装 |
| npm install [package]            | yarn add [package]           | 默认安装开发和生产依赖         |
| npm install --save [package]     | yarn add [package]           | 默认安装开发和生产依赖         |
| npm install --save-dev [package] | yarn add [package][--dev/-D] | 安装开发依赖                   |
| npm rebuild                      | yarn install --force         | 强制重新build                  |
| npm uninstall [package]          | yarn remove [package]        | 卸载某个依赖包                 |
| npm cache clean                  | yarn cache clean             | 清除缓存                       |
| npm update [package]             | yarn upgrade                 | 更新指定包                     |



## 四. 说出npm install的安装过程

 npm install会检测是有package-lock.json文件： 

* 没有lock文件 

  * 分析依赖关系，这是因为我们可能包会依赖其他的包，并且多个包之间会产生相同依赖的情况； 
  *  从registry仓库中下载压缩包（如果我们设置了镜像，那么会从镜像服务器下载压缩包）； 
  *  获取到压缩包后会对压缩包进行缓存（从npm5开始有的）； 
  * 将压缩包解压到项目的node_modules文件夹中（前面我们讲过，require的查找顺序会在该包下面查找） 

* 有lock文件 

  * 检测lock中包的版本是否和package.json中一致（会按照semver版本规范检测）
  * 不一致，那么会重新构建依赖关系，直接会走顶层的流程
  * 一致的情况下，会去优先查找缓存 
    * 没有找到，会从registry仓库下载，直接走顶层流程
    *  查找到，会获取缓存中的压缩文件，并且将压缩文件解压到node_modules文件夹中

  





## 五. 总结package.json中常见字段的作用

* 必须填写的属性：name、version 

  * name是项目的名称； 
  *  version是当前项目的版本号； 
  *  description是描述信息，很多时候是作为项目的基本描述； 
  *  author是作者相关信息（发布时用到）； 
  *  license是开源协议（发布时用到）；

* private属性： 

  * private属性记录当前的项目是否是私有的； 

  * 当值为true时，npm是不能发布它的，这是防止私有项目或模块发布出去的方式；

* main属性： 

  * 设置程序的入口。

* scripts属性 
  * scripts属性用于配置一些脚本命令，以键值对的形式存在； 
  *  配置后我们可以通过 npm run 命令的key来执行这个命令； 
  *  npm start和npm run start的区别是什么？ 
    * 它们是等价的； 
    *  对于常用的 start、 test、stop、restart可以省略掉run直接通过 npm start等方式运行；

*  dependencies属性
  * dependencies属性是指定无论开发环境还是生成环境都需要依赖的包
  * 我们项目实际开发用到的一些库模块vue、vuex、vue-router、react、react-dom、axios等等
* devDependencies属性
  * 一些包在生成环境是不需要的，比如webpack、babel等
  *  这个时候我们会通过 npm install webpack --save-dev，将它安装到devDependencies属性中
* peerDependencies属性
  * 还有一种项目依赖关系是对等依赖，也就是你依赖的一个包，它必须是以另外一个宿主包为前提的
  * 比如element-plus是依赖于vue3的，ant design是依赖于react、react-dom

- ^和~的区别

- x.y.z是一个明确的版本号
- ^x.y.z 表明x是不变的 y和安装最新的版本
- ~x.y.z 表示x,y不变 z安装最新的版本
- X 主版本号(major) 做了不兼容的API修改(可能不兼容之前的版本)
- Y: 次版本号(minor) 新功能增加 但是兼容之前的版本
- Z 修订号(patch) 做了向下兼容的修正 修复了之前的bug 没有产生新功能















































