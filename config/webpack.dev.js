const webpack = require('webpack');

const path = require('path');

module.exports = {
  entry: {
    bundle: ['./client/devClient.js', './client/index.js'],
    vendor: ['vue', 'vue-router', 'vuex']
  },
  output: {
    path: path.resolve(__dirname, '../public/assets/js'),
    filename: '[name].js',
    publicPath: '/assets/js/'
  },
  module: {
    rules: [{
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      enforce: 'pre',
      include: [path.resolve(__dirname, '../client'), path.resolve(__dirname, '../test')],
      options: {
        formatter: require('eslint-friendly-formatter')
      }
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          css: {
            loader: 'css-loader',
            options: {
              minimize: false,
              sourceMap: false
            }
          },
          'scss': 'vue-style-loader!css-loader!sass-loader',
          'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
        }
      }
    }, {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },
  devtool: '#eval-source-map',
  target: 'web',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.js'
    }
  },
  devServer: {
    contentBase: [path.resolve(__dirname, '../public')]
  }
};