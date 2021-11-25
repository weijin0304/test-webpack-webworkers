const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
    mode: 'development',
    entry: path.resolve(__dirname, './main.js'),
    output:{
        filename: 'testsdk.js',
        path: path.resolve(__dirname, '../demo/sdk'),
        library: 'testsdk',
        libraryTarget: 'umd',
        libraryExport: "default",
    },
    plugins: [
        new CleanWebpackPlugin(),
        // new HtmlWebpackPlugin(),
    ],
};
module.exports = config;
