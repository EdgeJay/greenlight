const path = require('path');

require('dotenv').load({ path: path.resolve(__dirname, '../deploy/production/dotenv') });

const webpack = require('webpack');

module.exports = {
  entry: {
    bundle: './client/index.js',
    vendor: ['vue', 'vue-router', 'vuex']
  },
  output: {
    path: path.resolve(__dirname, '../public/assets/js'),
    filename: '[name].min.js',
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
              minimize: true,
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
  target: 'web',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
    }),
  ],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.js'
    }
  },
};