const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')


var BUILD_DIR = path.resolve(__dirname, '../public/')
var APP_DIR = path.resolve(__dirname, '../src')

module.exports = {
    entry: APP_DIR + '/client/app/components/index.jsx',
    output: {
        filename: 'app.js',
        path: BUILD_DIR,
    },
    resolve : {
      extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /(\.js|\.jsx)$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                query: {
                    presets: [ 'es2015', 'es2016', 'es2017', 'react'],
                    plugins: ['transform-es2015-modules-commonjs']
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader"
                })
            },
        ]
    },
    plugins: [
      new CopyWebpackPlugin([
            { 
              from: path.resolve(__dirname, '../src/client/app/index.html'  ), 
              to: 'index.html' 
            },
      ]),
      new ExtractTextPlugin('../public/app.css'),
    ],
    target: 'web',
}

