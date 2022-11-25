export const size = {
  large: '180rem', //1440px
  medium: '75rem', //600px
  small: '45em', // 360px;
};

const theme = {
  mq: {
    laptop: `@media only screen and (max-width: ${size.large})`,
    tablet: `@media only screen and (max-width: ${size.medium})`,
    mobile: `@media only screen and (max-width: ${size.small})`,
  },
};

export default theme;
