import page from "page";

let _routes = null;

const routerFx = (dispatch, { routes }) => {
  // only init once per routes change
  if (_routes === routes) return;
  _routes = routes;

  Object.keys(_routes).forEach((path) => {
    page(path, (context) => {
      dispatch(_routes[path], context);
    });
  });

  page.start();
  return page.stop;
};

export const router = ({ routes }) => [
  routerFx,
  {
    routes,
  },
];
