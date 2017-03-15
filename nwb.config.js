const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'MBColorPicker',
      externals: {
        react: 'React'
      }
    }
  },
  webpack: {
    // rules: {
    //   'sass-css': {
    //     modules: true,
    //     localIdentName: '[local]__[hash:base64:5]'
    //   },
    // },
    loader: {
      babel: {
        include: /src/
      }
    },
    extra: {
      module: {
        rules: [
          {
            test: /\.sass$/,
            loader: ExtractTextPlugin.extract({
              fallbackLoader: 'style-loader',
              //resolve-url-loader may be chained before sass-loader if necessary
              loader: "css-loader!sass-loader",
            })
          }
        ]
      },
      plugins: [
        new ExtractTextPlugin('style.css')
        //if you want to pass in options, you can do so:
        //new ExtractTextPlugin({
        //  filename: 'style.css'
        //})
      ]
    }
  }
}
