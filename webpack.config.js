var path = require('path')

var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var outputPath = {
  development: __dirname,
  production: path.join(__dirname, './dist')
}
var entry = {
  main: path.join(__dirname, './src')
}

var config = {
  entry: entry,
  output: {
    path: outputPath[process.env.NODE_ENV],
    filename: '[name].js',
    library: 'mbColorPicker'
  },
  resolve: {
    modules: [path.join(__dirname, './src'), 'node_modules'],
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: '[local]---[hash:base64:5]'
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
}

if (process.env.NODE_ENV === 'development') {
  config.entry = {
    main: path.join(__dirname, './example')
  }
  config.plugins.push(
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, './example/index.html')
    })
  )

  config.devServer = {
    port: 3000,
    historyApiFallback: true,
    contentBase: path.join(__dirname, './example')
  }
} else {
  config.externals = {
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
}

module.exports = config
