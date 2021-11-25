const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
    mode: 'development',
    entry: path.resolve(__dirname, './main.js'),
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./index.html"),
        }),
    ],
    devServer: {
        static: path.resolve(__dirname, "../demo"),
        https: true,
        hot: true,
        open: true,
    },
};
module.exports = config;
