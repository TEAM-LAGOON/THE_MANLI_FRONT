import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@emotion/react';
import { Global } from '@emotion/react';
import { global } from '../styles/global';
import theme from '../styles/theme';
import { Navbar } from '../components';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default MyApp;
