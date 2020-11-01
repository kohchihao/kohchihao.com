import React from 'react';
import { ThemeProvider, CSSReset, ColorModeProvider, useColorMode } from '@chakra-ui/core';
import theme from '@styles/theme';
import { Global, css } from '@emotion/core';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import { AuthProvider } from '@components/Auth';

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <CSSReset />
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
            background: ${colorMode === 'light' ? 'white' : '#171923'};
          }
        `}
      />
      {children}
    </>
  );
};

const App = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <ColorModeProvider value="light">
          <CSSReset />
          <GlobalStyle>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />{' '}
          </GlobalStyle>
        </ColorModeProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
