var path = require('path')

module.exports = {
  entry: {
    'color-picker': './src/index.js'
  },
  output: {
    path: __dirname,
    filename: '[name].js'
  },
  resolve: {
    modulesDirectories: [path.join(__dirname, './src'), path.join(__dirname, './node_modules')],
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.sass$/,
        loader: 'style!css!sass'
      }
    ]
  },
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: './index.html'
    }
  }
}