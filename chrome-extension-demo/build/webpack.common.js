var path = require('path')


module.exports = {
  context: path.join(__dirname, '../src'),
  entry: {
    background: './background',
    contentScript: './content-script',
    popup: './popup'
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name]/[name].js'
  },
  module: {
    rules: []
  }
}