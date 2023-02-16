const path = require("path")
const { VueLoaderPlugin } = require("vue-loader/dist/index")
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
        hot: true,
        // host: "0.0.0.0",
        // port: 8888,
        // open: true, 
        // compress: true
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