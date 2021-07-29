var path = require("path");
module.exports = {
    lintOnSave: false,
    // 修改项目的入口文件
    pages: {
        index: {
            entry: "examples/main.js",
            template: "public/index.html",
            filename: "index.html"
        }
    },
    // 扩展webpack配置，是packages加入编译，语法转换
    chainWebpack: config => {
        config.module
            .rule("js")
            .include.add(path.resolve(__dirname, "packages")).end()
            .use("babel")
            .loader("babel-loader")
            .tap(options => {
                return options
            })
    }
}