import React from 'react';
import NextLink from 'next/link';
import { useColorMode, Button, Flex, Box, IconButton } from '@chakra-ui/core';
import styled from '@emotion/styled';
import StickyNav from '@components/StickyNav';

const Container = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = {
    light: 'white',
    dark: 'gray.900',
  };

  const primarytextColor = {
    light: 'black',
    dark: 'white',
  };

  return (
    <>
      <StickyNav>
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === 'dark' ? 'sun' : 'moon'}
          onClick={toggleColorMode}
        />
        <Box>
          <NextLink href="/about" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              About
            </Button>
          </NextLink>
          <NextLink href="/blog" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Blog
            </Button>
          </NextLink>

          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Home
            </Button>
          </NextLink>
        </Box>
      </StickyNav>
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={primarytextColor[colorMode]}
        px={8}
      >
        {children}
      </Flex>
    </>
  );
};

export default Container;
