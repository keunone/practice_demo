const webpack = require('webpack');
const path = require('path');
const package = require('../package.json');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const tsImportPluginFactory = require('ts-import-plugin')
const autoprefixer = require('autoprefixer');

function resolve(dir) {
  return path.join(__dirname, '..', dir) // root dir
}

const build = (() => {
  const timestamp = new Date();
  return {
    name: package.name,
    version: package.version,
    timestamp: timestamp,
    author: package.author
  };
})();

module.exports = {
  context: path.resolve('./src'),
  entry: {

  },
  output: {
    path: resolve('dist'),
    filename: '[name]/[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      "@": resolve('src'),
      chrome: resolve('src/chrome'),
      components: resolve('src/components'),
      containers: resolve('src/containers'),
      pages: resolve('src/pages'),
      utils: resolve('src/utils'),
      service: resolve('src/service'),
      config: resolve('config')
    }
  },
}
