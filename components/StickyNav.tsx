import React from 'react';
import { useColorMode, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

const StickyNavbar = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

interface Props {
  children: React.ReactNode
}

const StickyNav = ({ children }: Props) => {
  const { colorMode } = useColorMode();

  const navBgColor = {
    light: 'rgba(255, 255, 255, 0.8)',
    dark: 'rgba(23, 25, 35, 0.8)',
  };

  return (
    <>
      <StickyNavbar
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="1000px"
        width="100%"
        bg={navBgColor[colorMode]}
        as="nav"
        p={8}
        mt={[0, 8]}
        mb={8}
        mx="auto"
      >
        {children}
      </StickyNavbar>
    </>
  );
};

export default StickyNav;
