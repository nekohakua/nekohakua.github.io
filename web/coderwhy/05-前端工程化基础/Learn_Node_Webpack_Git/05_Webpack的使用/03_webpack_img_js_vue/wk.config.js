const path = require("path")
// 使用vue-loader需要
const { VueLoaderPlugin } = require("vue-loader/dist/index")


module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,"./build"),

        // 对要输出的资源图片进行重命名 会把全部图片进行操作，所以很少在这配置重命名
        // assetModuleFilename: "abc.png"
    },

    //配置让import from 。。。不用写.vue后缀 
    resolve: {
        // https://webpack.js.org/configuration/resolve/#resolveextensions
        extensions: [".js", ".json", ".vue", ".jsx", ".ts", ".tsx"],

        // 别名
        alias: {
            // 拼接__dirname当前路径形成绝对路径
            utils: path.resolve(__dirname, "./src/utils")
        }
    },


    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ "style-loader", "css-loader", "postcss-loader" ],
            },
            {
                test: /\.less$/,
                use: [ "style-loader", "css-loader", "less-loader", "postcss-loader" ]
            },
            {
                // ?表示0个或1个e
                test: /\.(png|jpe?g|svg|gif)$/,
                // 使用webpack内置的处理 asset:资源

                // 1.打包两张图片，并且这两张图片有自己的地址，将地址设置到img/bgi中
                // 缺点：多图片加载的两次网络请求
                // type: "asset/resource"

                // 2.将图片进行base64的编码，并且直接编码后的源码放到打包的js文件中
                // 缺点：造成js文件非常大，下载js文件时间长，造成js代码下载解析时间长
                // type: "asset/inline"

                // 3.合理的规范：
                // 对于小一点的图片可以进行base64编码
                // 对于大一点的图片，进行单独的图片打包，形成url地址，单独的请求这个url图片
                // 中庸之道：添加一个parser属性，并且制定dataUrl的条件，添加maxSize属性；
                // 记不住，查官网文档：https://webpack.js.org/  搜索asset-modules
                // https://webpack.js.org/guides/asset-modules/#root
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        // 60 * 1024 => 60kb
                        maxSize: 60 * 1024
                    }
                },

                // 对要输出的资源图片进行重命名
                generator: {
                    
                    // 不要写死
                    // filename: "cba.png"
                    // 一般使用占位符 
                    // name:指向原来的图片名称
                    // filename: "[name].png"
                    // ext: 扩展名
                    // filename: "[name][ext]"
                    // 避免同名冲突，保留webpack打包生成的hash值
                    // filename: "[name]_[hash][ext]"
                    // 因为hash值很长，所以可以截取 并放到img文件夹里
                    filename: "img/[name]_[hash:8][ext]"
                }
            },
            {
                test: /\.js$/,
                use: [
                    { loader: "babel-loader", 
                    //   options: {
                    //       Plugins: [
                    //           "@babel/plugin-transform-arrow-functions",
                    //           "@babel/plugin-transform-block-scoping"
                    //       ]
                    //     }
                    // 简化：使用babel.config.js配置
                    }
                ]

            },
            {
                test: /\.vue$/,
                loader: "vue-loader"

            }

        ]
    },

    // 使用vue-loader需要
    plugins: [
        new VueLoaderPlugin()
    ]
}