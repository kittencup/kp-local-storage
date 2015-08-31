var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: './dist/localStorage.js',
        library: 'LocalStorage'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.js']
    },
    // Add minification
    //plugins: [
    //    new webpack.optimize.UglifyJsPlugin()
    //],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel',
                include: [
                    path.resolve(__dirname, "src")
                ]
            }
        ]
    }
}