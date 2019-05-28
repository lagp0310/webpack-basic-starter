const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'build.js'
    },
    plugins: [
        new CopyPlugin([
            { from: 'static/', to: 'static/' }
        ]),
        new CleanWebpackPlugin()
    ]
};