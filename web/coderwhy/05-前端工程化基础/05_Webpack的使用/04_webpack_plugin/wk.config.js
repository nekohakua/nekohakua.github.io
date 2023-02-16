const path = require("path")
const { VueLoaderPlugin } = require("vue-loader/dist/index")

// 因为要导出的属性在这个插件的某个属性里，所以加上{} 不在不加{}
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require("webpack")

module.exports = {

    // 设置是生产还是开发环境 默认生产环境：production
    // 开发阶段使用development 打包时设置production
    // mode: "development",
    mode: "production",


    entry: "./src/main.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,"./build"),

        // 相当于clean-webpack-plugin插件的功能
        clean: true,
    },
    resolve: {
        extensions: [".js", ".json", ".vue", ".jsx", ".ts", ".tsx"],
        alias: {
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

        // 使用插件，删除dist(build)打包多余的东西
        // new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
            title: "电商项目",
            // 指定使用的模板生成html 默认是用node_modules下html-webpack-plugin下的index.html
            template: "./index.html"
        }),

        // 用于加载index.html的<link rel="icon" href="<%= BASE_URL %>favicon.ico">
        // 会在当前项目任何位置注入这个变量或字符串
        new DefinePlugin({
            // 不写‘’会被当作代码执行，写''当作字符串
            // "BASE_URL": "'./'",
            BASE_URL: "'./'",

            coderwhy: "'why'",
            counter: "123"
        })

    ]
}