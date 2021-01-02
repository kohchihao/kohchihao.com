import React from 'react';
import NextLink from 'next/link';
import { useColorMode, Button, Flex, Box, IconButton, useColorModeValue } from '@chakra-ui/react';
import StickyNav from '@components/StickyNav';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Container = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = useColorModeValue('white', 'gray.900');
  const primarytextColor = useColorModeValue('black', 'white');

  return (
    <>
      <StickyNav>
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === 'dark' ? <SunIcon color="white" /> : <MoonIcon />}
          onClick={toggleColorMode}
        />
        <Box>
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Home
            </Button>
          </NextLink>

          <NextLink href="/about" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              About
            </Button>
          </NextLink>

          <Button as="a" variant="ghost" p={[1, 4]} href="/status">
            Status
          </Button>

          <Button as="a" variant="ghost" p={[1, 4]} href="/dashboard">
            Dashboard
          </Button>
        </Box>
      </StickyNav>
      <Flex as="main" justifyContent="center" flexDirection="column" bg={bgColor} color={primarytextColor} px={8}>
        {children}
      </Flex>
    </>
  );
};

export default Container;
