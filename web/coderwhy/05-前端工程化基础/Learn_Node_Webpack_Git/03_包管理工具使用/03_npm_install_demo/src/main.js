// 全局安装 一般工具包全局安装  会放到环境变量里 终端执行npm,node命令就是在环境变量找到它们所在路径，然后执行
// npm install webpack -g

// npm install webpack-cli -g

// npm install yarn -g

// 安装两个
// npm install -g webpack webpack-cli

// 局部安装 会放到当前目录的node_modules文件夹 不会放到环境变量里
// npm install webpack

// webpack是全局安装了的.查看版本号npm list --depth=0 -g
// npm list --depth=0 -g 

// package-lock.json可以从缓存拿到要安装的工具，不必重新下载如dayjs，还可以记录明确的工具版本号，通过npm install安装工具时避免多人开发时用宽松的package.json记录的版本号出现新功能报错


// 卸载某个依赖
// npm uninstall package
// npm uninstall package --save-dev
// npm uninstall package -D

// 强制重新build
// npm rebuild

// 清除缓存
// npm cache clean

// 获取npm缓存位置（了解）
// npm config get cache

// 获取配置信息(了解)
// npm config list 

