const path = require("path")
const { VueLoaderPlugin } = require("vue-loader/dist/index")

// 因为要导出的属性在这个插件的某个属性里，所以加上{} 不在不加{}
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require("webpack")

module.exports = {
    // mode: "production",
    mode: "development",

    entry: "./src/main.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,"./build"),
        clean: true,
    },
    resolve: {
        extensions: [".js", ".json", ".vue", ".jsx", ".ts", ".tsx"],
        alias: {
            utils: path.resolve(__dirname, "./src/utils")
        }
    },
    devServer: {
        // 模块热替换(HMR)
        // 默认为true，但是没有模块热替换，因为要手动指定哪些模块更新时进行HMR
        hot: true,
        // 设置主机 默认localhost localhost：本质上是一个域名，通常情况下会被解析成127.0.0.1;
        // 127.0.0.1：回环地址(Loop Back Address)，表达的意思其实是我们主机自己发出去的包，直接被自己接收  比如我们监听 127.0.0.1时，在同一个网段下的主机中，通过ip地址是不能访问的
        // 0.0.0.0：监听IPV4上所有的地址，再根据端口找到不同的应用程序  比如我们监听 0.0.0.0时，在同一个网段下的主机中，通过ip地址是可以访问的(比如：http://192.0.0.0:8888/)
        // host: "0.0.0.0",
        // 设置端口 默认8080
        // port: 8888,
        // 自动打开浏览器
        // open: true, 
        // 对文件进行压缩
        // compress: true
        // 详细看webpack官网的Configuration
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
                test: /\.(png|jpe?g|svg|gif)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 60 * 1024
                    }
                },
                generator: {
                    filename: "img/[name]_[hash:8][ext]"
                }
            },
            {
                test: /\.js$/,
                use: [
                    { loader: "babel-loader", }
                ]
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: "电商项目",
            template: "./index.html"
        }),
        new DefinePlugin({
            BASE_URL: "'./'",
            coderwhy: "'why'",
            counter: "123"
        })

    ]
}