const path=require("path")
const HtmlWebpackPlugin=require("html-webpack-plugin")
module.exports={
    entry:path.resolve(__dirname,"../src/main.js"),
    output:{
        filename:"js/[name].[chunkhash].js",
        path:path.resolve(__dirname,"../dist"),
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,"../public/index.html")
        })
    ]
}