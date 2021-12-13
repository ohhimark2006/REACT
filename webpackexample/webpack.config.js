const HtmlWebPackPlugin = require('html-webpack-plugin'); // we installed
const path = require('path'); // builtin nodejs module

module.exports = {
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ]
}