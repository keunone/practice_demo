const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')

const proConfig = merge(commonConfig, {
  mode: 'production'
})

module.exports = proConfig