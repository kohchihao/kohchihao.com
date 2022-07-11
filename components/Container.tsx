import React, { useState } from 'react';
import NextLink from 'next/link';
import { Button, Flex, IconButton, Text, VStack } from '@chakra-ui/react';
import StickyNav from '@components/StickyNav';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

interface Props {
  children: React.ReactNode;
}

interface NavLinksProps {
  isActive: string;
}

const NavLinks = ({ isActive }: NavLinksProps) => {
  return (
    <>
      <NextLink href="/" passHref>
        <Button
          as="a"
          variant="ghost"
          p={4}
          mr={2}
          isActive={isActive === 'Home'}
          colorScheme={isActive === 'Home' ? 'teal' : null}
          w={{ base: '100%', md: '10%' }}
        >
          Home
        </Button>
      </NextLink>

      <NextLink href="/about" passHref>
        <Button
          as="a"
          variant="ghost"
          p={4}
          mr={2}
          isActive={isActive === 'About'}
          colorScheme={isActive === 'About' ? 'teal' : null}
          w={{ base: '100%', md: '10%' }}
        >
          About
        </Button>
      </NextLink>
    </>
  );
};

const sitemap = {
  '/': 'Home',
  '/about': 'About',
};

const Container = ({ children }: Props) => {
  const router = useRouter();

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMobileMenu = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };

  return (
    <>
      <StickyNav display={{ base: 'none', md: 'flex' }}>
        <NavLinks isActive={sitemap[router.pathname]} />
      </StickyNav>

      <StickyNav
        display={{ base: 'flex', md: 'none' }}
        justifyContent="flex-start"
        alignItems="flex-start"
        color="white"
        flexDirection="column"
      >
        <Flex flexDirection="row" alignItems="center">
          <IconButton
            aria-label="Toggle hamburger menu"
            icon={isExpanded ? <CloseIcon /> : <HamburgerIcon />}
            onClick={toggleMobileMenu}
            variant="ghost"
          />

          {isExpanded ? null : (
            <Text pl={2} fontWeight="bold">
              {sitemap[router.pathname]}
            </Text>
          )}
        </Flex>

        {isExpanded ? (
          <VStack pt={2} w="100%">
            <NavLinks isActive={sitemap[router.pathname]} />
          </VStack>
        ) : null}
      </StickyNav>

      <Flex as="main" justifyContent="center" flexDirection="column" bg={'#111111'} color={'white'} px={8} pt={32}>
        {children}
      </Flex>
    </>
  );
};

export default Container;
