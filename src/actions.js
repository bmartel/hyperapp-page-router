const next = (state, router, current) => ({
  ...state,
  router: {
    current,
    init: router.init,
    hash: router.hash,
    path: router.path,
    pathname: router.pathname,
    querystring: router.querystring,
    routePath: router.routePath,
    state: router.state,
    title: router.title,
    params: router.params,
  },
});

export const route = (routeName, action) => (state, context) =>
  action(next(state, context, routeName), context);
