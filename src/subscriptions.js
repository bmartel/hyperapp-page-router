import page from "page";

let init = false;

const _router = (dispatch, { routes }) => {
  // only init once
  if (init) return;
  init = true;

  Object.keys(routes).forEach((path) => {
    page(path, (context) => {
      dispatch(routes[path], context);
    });
  });

  page.start();
  // not supplying a page.stop in a return as we don't want to disconnect unless the user has left the app entirely
};

export const router = ({ routes }) => [
  _router,
  {
    routes,
  },
];

