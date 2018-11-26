var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  context: resolve('./src'),
  entry: {
    background: './background/background',
    contentScript: './contentScript/contentScript',
    popup: './popup/popup'
  },
  output: {
    path: resolve('./dist'),
    filename: '[name]/[name].js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['react']
        }
      }]
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: resolve('./')
    }),
    new HtmlWebpackPlugin({
      filename: resolve('dist/popup/popup.html'),
      chunks: ['popup'],
      template: 'popup/popup.html',
      inject: false
    })
  ]
}