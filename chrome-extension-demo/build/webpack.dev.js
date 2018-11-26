const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')

const devConfig = merge(commonConfig, {
  mode: 'development',
  watch: true,
  devtool:'source-map'
})

module.exports = devConfig