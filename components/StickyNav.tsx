import React from 'react';
import { Flex, FlexProps } from '@chakra-ui/react';
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
  return (
    <>
      <StickyNavbar
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        width="100%"
        bg={'rgba(17, 24, 39, 0.3)'}
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
