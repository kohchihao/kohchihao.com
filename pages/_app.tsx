import { ChakraProvider } from '@chakra-ui/react';
import { css, Global } from '@emotion/react';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import React from 'react';
import SEO from '../next-seo.config';

interface GlobalStyleProps {
  children: React.ReactNode;
}

const GlobalStyle = ({ children }: GlobalStyleProps) => {
  return (
    <>
      <Global
        styles={css`
          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: rgb(17 17 17);
          }
        `}
      />
      {children}
    </>
  );
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS={true}>
      <GlobalStyle>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />{' '}
      </GlobalStyle>
    </ChakraProvider>
  );
};

export default App;
