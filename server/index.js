/* eslint no-console: "off" */

const path = require('path');
const Koa = require('koa');
const Router = require('koa-router');
const views = require('koa-views');
const serve = require('koa-static');

const app = new Koa();
const router = new Router();

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

/* Set global state */
app.use(async (ctx, next) => {
  ctx.state.assetServer = process.env.NODE_ENV === 'production' ? '' : '//localhost:9090';
  ctx.state.jsAssetSuffix = process.env.NODE_ENV === 'production' ? '.min.js' : '.js';
  await next();
});

/* Template rendering using dustjs */
app.use(views(path.resolve(__dirname, 'views'), {
  cache: process.env.NODE_ENV === 'production',
  map: {
    html: 'dust',
  },
}));

/* Routes */
router.get('/', async (ctx, next) => {
  await ctx.render('index');
  await next();
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
