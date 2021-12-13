const HtmlWebPackPlugin = require('html-webpack-plugin'); // we installed
const path = require('path'); // builtin nodejs module

module.exports = {
    module: {
        rules: [
            {
                test :/\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ]
}