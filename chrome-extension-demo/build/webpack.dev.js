const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')

const devConfig = merge(commonConfig, {
  mode: 'development',
  watch: true
})

module.exports = devConfig