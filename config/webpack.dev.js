const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/assets/js/'
  },
  devtool: 'source-map',
  target: 'web',
  devServer: {
    contentBase: path.resolve(__dirname, '../public')
  }
};