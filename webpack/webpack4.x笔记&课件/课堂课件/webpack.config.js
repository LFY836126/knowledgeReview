const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
//const Uglify = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurifyCssWebpack = require('purifycss-webpack');
const glob = require('glob');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const rulesConfig = require('./webpack.rules.js');

const modTest = require('./module/a.js');
console.log(modTest());

const jsonConfig = require('./webpack.config.json');

// console.log('--------',path.join(__dirname, 'src/index.html'))
// console.log('--------',path.resolve(__dirname, 'src/index.html'))

module.exports = {
    //mode:'development',
    entry: {
        entry: jsonConfig.entry,
        jquery:'jquery'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: rulesConfig,
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: jsonConfig.host,
        port: jsonConfig.port,
        open: true,
        hot: true
    },
    //devtool: 'source-map',
    plugins: [
        //new Uglify(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: '牧码人-主页',
            template: './src/index.html'
        }),
        new ExtractTextPlugin('css/index.css'),
        new PurifyCssWebpack({
            paths: glob.sync(path.join(__dirname, 'src/*.html'))
        }),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, 'src/assets'),
            to: './public'
        }]),
        new webpack.ProvidePlugin({
            $:'jquery'
        })
        // new MiniCssExtractPlugin({
        //     filename:'css/index.css'
        // })
    ],
    optimization:{
        splitChunks:{
            cacheGroups:{
                aaa:{
                    chunks:'initial',
                    name:'jquery',
                    enforce:true
                },
                bbb:{
                    chunks:'initial',
                    name:'jquery',
                    enforce:true
                }
            }
        }
    }
};