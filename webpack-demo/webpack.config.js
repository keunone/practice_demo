var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var isProd = process.env.NODE_ENV === 'production'; 

var cssDev = ['style-loader', 'css-loader?modules', 'sass-loader'];
var cssProd = [MiniCssExtractPlugin.loader, 'css-loader?modules', 'sass-loader'];
var cssConfig = isProd ? cssProd : cssDev;

var webpackConfig = {
    mode: 'development',
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }, // 处理 react 相关的内容
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            {
                // 处理css文件
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }, {
                test: /\.scss$/,
                use: cssConfig
            }, {
                // 处理html文件，并处理img 中 src 和 data-src 的引入路径
                test: /\.html$/,
                loader: "html-loader?attrs=img:src img:data-src"
            }, {
                // 处理字体文件
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name=./fonts/[name].[ext]'
            }, {
                // 处理图片，并将8k以下的图片转为base64编码
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192&name=./img/[hash].[ext]'
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                js: {
                    test: /\.js$/,
                    name: "commons",
                    chunks: "all",
                    minChunks: 7,   // 文件合并的后个数
                    // reuseExistingChunk: true,
                    // enforce: true,
                },
                css: {
                    test: /\.(css|sass|scss)$/,
                    name: "commons",
                    chunks: "all",
                    minChunks: 2,
                }
            }
        }
    },
    plugins: [
        // 提取公共css样式
        new MiniCssExtractPlugin({
            filename: "styles.css"
        }),
        new CleanWebpackPlugin(['dist']),   // 清除文件
        // 处理html文件
        new HtmlWebpackPlugin({
            filename: './index.html', //生成的html存放路径，相对于path
            template: './index.html', //html模板路径
            minify: { //压缩HTML文件
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: false //删除空白符与换行符
            }
        })
    ],
    // 设置开发服务器
    devServer: {
        contentBase: path.join(__dirname, "dist/"),
        host: 'localhost',
        port: 9090,
        open: true,
        inline: true
    }
}

module.exports = webpackConfig