var path = require('path')

var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var entry = {
  main: path.join(__dirname, './src')
}

var config = {
  entry: entry,
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js',
    library: 'ColorPicker',
    libraryTarget: 'umd'
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
  ],
  stats: {
    maxModules: 0,
    children: false
  }
}

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'example') {
  config.entry = {
    main: path.join(__dirname, './example')
  }

  config.plugins.push(
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, './example/index.html')
    })
  )
}

if (process.env.NODE_ENV === 'development') {
  config.devServer = {
    port: 3000,
    historyApiFallback: true,
    contentBase: path.join(__dirname, './example')
  }
} else if (process.env.NODE_ENV === 'example') {
  config.output.path = path.join(__dirname, './example/dist')
} else {
  config.externals = {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    }
  }
}

module.exports = config
