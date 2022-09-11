export const variantsScaleAnimation = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  exit: { scale: 0 },
  transition: { ease: 'easeOut', duration: 0.3 },
};

export const variantsOpacityAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { ease: 'easeOut', duration: 0.3 },
};

export const variantsScaleViewport = {
  initial: { scale: 0 },
  whileInView: { scale: 1 },
  exit: { scale: 0 },
  transition: { ease: 'easeOut', duration: 0.3 },
  viewport: { once: false },
};

export const variantsOpacityViewport = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { ease: 'easeOut', duration: 0.3 },
  viewport: { once: false },
};
