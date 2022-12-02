export const size = {
  large: '1280px',
  medium: '1279px',
  small: '480px',
};

const theme = {
  mq: {
    laptop: `@media only screen and (min-width: ${size.large})`,
    tablet: `@media only screen and (max-width: ${size.medium})`,
    mobile: `@media only screen and (max-width: ${size.small})`,
  },
};

export default theme;
