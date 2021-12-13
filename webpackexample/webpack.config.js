const HtmlWebPackPlugin = require('html-webpack-plugin'); // we installed
const path = require('path'); // builtin nodejs module

module.exports = {
    module: {
        rules: [
            {
                test :/\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test :/\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    optimization :{
        splitChunks : {chunks: "all", name :"vendor"}
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ]
}