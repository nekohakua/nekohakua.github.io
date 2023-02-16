const { merge } = require("webpack-merge")
const commonConfig = require("./webpack.common.config")

// dev环境的配置放到merge的后面,然后如果和commonConfig冲突了就使用后面的配置
module.exports = merge(commonConfig, {
    mode: "development",
    devServer: {
        hot: true,
        // host: "0.0.0.0",
        // port: 8888,
        // open: true, 
        // compress: true
    },
} )