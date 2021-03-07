import React from 'react';
import { Flex, useColorModeValue, FlexProps } from '@chakra-ui/react';
import styled from '@emotion/styled';

const StickyNavbar = styled(Flex)`
  position: fixed;
  z-index: 10;
  top: 0;
	right: 0;
	left: 0;
  backdrop-filter: saturate(180%) blur(20px);
`;

interface Props extends FlexProps {
  children: React.ReactNode;
}

const StickyNav = ({ children, ...rests }: Props) => {

  const bgColor = useColorModeValue('rgba(255, 255, 255, 0.6)', 'rgba(17, 24, 39, 0.3)');

  return (
    <>
      <StickyNavbar
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        width="100%"
        bg={bgColor}
        as="nav"
        p={2}
        {...rests}
      >
        {children}
      </StickyNavbar>
    </>
  );
};

export default StickyNav;
