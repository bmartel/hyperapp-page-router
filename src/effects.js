const _scrollToTop = (_, { scrollFn }) => {
  scrollFn({ top: 0, left: 0, behavior: "smooth" });
};

export const scrollToTop = (scrollFn) => [
  _scrollToTop,
  {
    scrollFn: scrollFn || window.scrollTo,
  },
];

