import page from "page";

const scrollToFx = (_, { scrollFn, to }) => {
  scrollFn({ ...to, behavior: "smooth" });
};

export const scrollTo = ({ to, scrollFn } = {}) => [
  scrollToFx,
  {
    to: to || { top: 0, left: 0 },
    scrollFn: scrollFn || window.scrollTo,
  },
];

export const routerFx = (dispatch, { routes }) => {
  Object.keys(routes).forEach((path) => {
    page(path, (context) => {
      dispatch(routes[path], context);
    });
  });

  page.start();
};
