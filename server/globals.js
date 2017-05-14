module.exports = (app) => {
  app.use(async (ctx, next) => {
    ctx.state.assetServer = process.env.NODE_ENV === 'production' ? '' : '//localhost:9090';
    ctx.state.jsAssetSuffix = process.env.NODE_ENV === 'production' ? '.min.js' : '.js';
    ctx.state.googleClientId = process.env.GOOGLE_CLIENT_ID;

    if (!ctx.state.googleClientId) {
      throw new Error('Environment variable not provided! Make sure you added your own GOOGLE_CLIENT_ID variable to .env file');
    }

    await next();
  });
};
