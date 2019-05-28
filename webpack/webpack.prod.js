const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hello Webpack!',
            template: './src/index.ejs',
            src: 'static/svg/undraw_server_q2pb.svg',
            text: 'Your Server is on Production!'
        })
    ]
});