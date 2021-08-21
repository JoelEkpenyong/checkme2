export const PageTransitionVariant = {
  inital: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    y: "-20px",
    transition: {
      duration: 0.3,
      type: "tween",
    },
  },
};
