module.exports = (app) => {
  app.use(async (ctx, next) => {
    ctx.state.assetServer = process.env.NODE_ENV === 'production' ? '' : '//localhost:9090';
    ctx.state.jsAssetSuffix = process.env.NODE_ENV === 'production' ? '.min.js' : '.js';
    await next();
  });
};
