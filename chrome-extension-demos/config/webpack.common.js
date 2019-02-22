const webpack = require('webpack');
const path = require('path');
const package = require('../package.json');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const tsImportPluginFactory = require('ts-import-plugin')
const autoprefixer = require('autoprefixer');

const extractPopupCSS = new ExtractTextPlugin('../dist/styles/popup.css')

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

const rules = [
  {
    test: /\.tsx?$/,
    use: [
      // 'ts-loader' // https://github.com/Brooooooklyn/ts-import-plugin
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          compilerOptions: {
            module: 'es2015'
          }
        },
      },
    ],
    exclude: /node_modules/
  },
  {
    test: /popup\.less$/,
    use: extractPopupCSS.extract({
      use: ['css-loader',
        {
          loader: 'less-loader',
          options: {
            javascriptEnabled: true,
          }
        }
      ]
    })
  },
  // {
  //   test: /tools\.less$/,
  //   use: extractToolsCSS.extract({
  //     use: ['css-loader',
  //       {
  //         loader: 'less-loader',
  //         options: {
  //           javascriptEnabled: true,
  //         }
  //       }
  //     ]
  //   })
  // },
  {
    test: /index\.less$/,
    use: ['style-loader', 'css-loader',
      // 'less-loader'
      {
        loader: 'less-loader',
        options: {
          javascriptEnabled: true,
        }
      }
    ]
  },
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
  },
  {
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      limit: 10240, //10k
      name: 'assets/[name].[ext]' // file-loader
    }
  },
  // {
  //   test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
  //   use: {
  //     loader: 'file-loader',
  //     query: {
  //       name: 'assets/[name].[ext]'
  //     }
  //   }
  // }
]

const WEBPACK_PLUGINS = [
  new webpack.NamedModulesPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  // new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/),
  new webpack.BannerPlugin({ banner: `${build.name} v.${build.version} (${build.timestamp}) © ${build.author}` }),
  new webpack.DefinePlugin({
    ENVIRONMENT: JSON.stringify({
      build: build
    })
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [
        autoprefixer({ browsers: ['Safari >= 8', 'last 2 versions'] }),
      ],
      htmlLoader: {
        minimize: true
      }
    }
  })
]

module.exports = {
  context: path.resolve('./src'),
  entry: {
    background: './chrome/background/background',
    // content: './chrome/content/tools/',
    // inject: './chrome/content/inject/',
    // search_iframe: './chrome/iframes/search/',
    // newtab: './chrome/newtab/'
    options: './chrome/options/options',
    popup: './chrome/popup/popup'
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
  module: {
    rules,
  },
  plugins: [
    ...WEBPACK_PLUGINS,
    extractPopupCSS,
    // extractToolsCSS,
    // new webpack.optimize.splitChunks({
    //   name: true,
    //   minChunks: 2,
    //   chunks: 'all' //从js中抽取common chunk
    // }),
    new HtmlWebpackPlugin({
      filename: resolve('dist/popup/popup.html'),
      chunks: ['popup'],
      template: 'chrome/popup/popup.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      filename: resolve('dist/options/options.html'),
      chunks: ['options'],
      template: 'chrome/options/options.html',
      inject: true
    }),
    new CopyWebpackPlugin([
      {
        from: resolve('/src/chrome/manifest.json'),
        to: resolve('dist')
      },
      {
        from: resolve('/src/assets/logo.png'),
        to: resolve('dist')
      },
      {
        from: 'assets',
        ignore: [/\.less$/],
        to: resolve('dist/assets')
      }
    ])
  ]
}
