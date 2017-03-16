var path = require('path')
var webpack = require('webpack')

var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
// var isProduction = process.env.NODE_ENV === 'production'
var isExample = process.env.NODE_ENV === 'example'
var outputPath = {
  development: __dirname,
  production: path.join(__dirname, './dist'),
  example: path.join(__dirname, './example/dist')
}
var entry = {
  main: './src/index.js'
}
if (process.env.NODE_ENV === 'development') {
  entry.example = './example/src/index.js'
}
if (process.env.NODE_ENV === 'example') {
  entry.vendor = [
    'react',
    'react-dom'
  ]
}

module.exports = {
  entry: entry,
  output: {
    path: outputPath[process.env.NODE_ENV],
    filename: '[name].js',
    library: 'mbColorPicker',
    libraryTarget: isExample ? 'var' : 'commonjs2'
    // publicPath: ''
  },
  resolve: {
    modules: [path.join(__dirname, './src'), path.join(__dirname, './node_modules')],
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
      },
      // {
      //   test: require.resolve('react'),
      //   use: [
      //     {
      //       loader: 'expose-loader',
      //       options: 'React'
      //     }
      //   ]
      // },
      // {
      //   test: require.resolve('react-dom'),
      //   use: [
      //     {
      //       loader: 'expose-loader',
      //       options: 'ReactDOM'
      //     }
      //   ]
      // }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    // new HtmlWebpackPlugin(),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   entries: [
    //     'react',
    //     'react-dom'
    //   ]
    // })
  ],
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  devServer: {
    port: 3000,
    inline: true,
    historyApiFallback: {
      index: './index.html'
    }
  }
}
