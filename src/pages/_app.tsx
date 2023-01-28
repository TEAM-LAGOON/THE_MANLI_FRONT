import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@emotion/react';
import { Global } from '@emotion/react';
import { global } from '../styles/global';
import theme from '../styles/theme';
import { Navbar } from '../components';

function MyApp({ Component, pageProps }: AppProps) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Navbar
          isOpen={isNavbarOpen}
          onOpenHandler={() => setIsNavbarOpen(!isNavbarOpen)}
          logout={() => console.log('')}
          user={undefined}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
