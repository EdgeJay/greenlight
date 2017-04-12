const webpack = require('webpack'),
      path = require('path');

module.exports = {
  entry: {
    bundle: './index.js',
    vendor: ['vue', 'vue-router', 'vuex']
  },
  output: {
    path: path.resolve(__dirname, '../public/assets/js'),
    filename: '[name].js',
    publicPath: '/assets/js/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },
  devtool: 'source-map',
  target: 'web',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../public')
  }
};