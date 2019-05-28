const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        port: 8080,
        watchContentBase: true,
        watchOptions: {
            poll: true
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hello Webpack!',
            template: './src/index.ejs',
            src: 'static/svg/undraw_done_a34v.svg',
            text: 'Your Webpack Dev Server is now running!'
        })
    ]
});