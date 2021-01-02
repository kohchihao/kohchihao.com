import React from 'react';
import { CSSReset, ColorModeProvider, useColorMode, ChakraProvider, extendTheme } from '@chakra-ui/react';
import theme from '@styles/theme';
import { Global, css } from '@emotion/react';
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
      <ChakraProvider theme={extendTheme(theme)}>
        <ColorModeProvider
          options={{
            useSystsemColorMode: true,
            initialColorMode: 'light',
          }}
        >
          <CSSReset />
          <GlobalStyle>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />{' '}
          </GlobalStyle>
        </ColorModeProvider>
      </ChakraProvider>
    </AuthProvider>
  );
};

export default App;
