import React from 'react';
import { CSSReset, ColorModeProvider, useColorMode, ChakraProvider, extendTheme } from '@chakra-ui/react';
import theme from '@styles/theme';
import { Global, css } from '@emotion/react';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import { AppProps } from 'next/app'

interface GlobalStyleProps {
  children: React.ReactNode
}

const GlobalStyle = ({ children }: GlobalStyleProps) => {
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

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={extendTheme(theme)}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
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
  );
};

export default App;
