module.exports = (app, router) => {
  router.get('/', async (ctx, next) => {
    await ctx.render('index');
    await next();
  });

  app.use(router.routes());
  app.use(router.allowedMethods());
};
