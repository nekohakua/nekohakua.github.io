const path = require("path")

module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,"./build")
    },
    module: {
        rules: [
            {
                // 告诉webpack匹配什么文件 正则格式
                test: /\.css$/,

                use: [ // use中多个loader使用顺序是从后往前的
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    // { 
                    //     loader: "postcss-loader", 
                    //     options: {
                    //         postcssOptions: {
                    //             plugins: [
                    //                 "autoprefixer"
                    //             ]
                    //         }
                    //     }
                    // }
                    // 简化：抽取到独立文件：postcss.config.js里，然后还是要写下面这一行
                    { loader: "postcss-loader" }

                ],
                // 简写一: 如果loader只有一个
                // loader: "css-loader"
                // 简写二: 多个loader不需要其他属性时, 可以直接写loader字符串形式
                // use: [ 
                //     "style-loader",
                //     "css-loader", 
                //     "postcss-loader"
                //     // {
                //     //   loader: "postcss-loader",
                //     //   options: {
                //     //     postcssOptions: {
                //     //       plugins: [
                //     //         "autoprefixer"
                //     //       ]
                //     //     }
                //     //   }
                //     // }
                // ]
                
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader",
                    "postcss-loader"
                ]
            }
        ]
    }
}