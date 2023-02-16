// 通过终端 npm init 创建package.json文件
// npm init -y 默认创建  

// cd到02_package_demo中，终端npm run start来运行，就不用写node ./src/main.js来运行了


// 如何拉项目的依赖文件
// npm install

// dependencies是开发环境和生产环境都会依赖的库
// devDependencies是只有开发环境会依赖的库
// 如何只添加到开发环境的库
// npm install webpack --save-dev 
// 或
// npm install webpack -D

// element-plus库依赖webpack库，所以在这个库的peerDependencies写上webpack的库，就会拉下依赖的依赖了
// npm install element-plus



// 看 覆盖到本文件夹所在目录
// const { why } = require("why")
// why()