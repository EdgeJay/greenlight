const path = require('path');
const serve = require('koa-static');

module.exports = (app) => {
  /* Hot module replacement */
  if (process.env.NODE_ENV === 'development') {
    const webpack = require('webpack'); // eslint-disable-line global-require
    const { devMiddleware, hotMiddleware } = require('koa-webpack-middleware'); // eslint-disable-line global-require
    const config = require('../config/webpack.dev.js'); // eslint-disable-line global-require
    const compiler = webpack(config); // eslint-disable-line global-require

    app.use(devMiddleware(compiler, {
      publicPath: '/assets/js/',
    }));
    app.use(hotMiddleware(compiler));
  }

  app.use(serve(path.resolve(__dirname, '../public')));
  app.use(serve(path.resolve(__dirname, '../resources')));
};
