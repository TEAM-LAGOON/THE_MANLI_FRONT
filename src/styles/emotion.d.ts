import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    mq: {
      laptop: string;
      tablet: string;
      mobile: string;
    };
  }
}
