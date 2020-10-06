import React from 'react';
import { Flex, Box, Image, Text, Heading, Link, useColorMode } from '@chakra-ui/core';

const CurrentProjecCard = ({ project }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const hoverBg = {
    light: 'gray.50',
    dark: 'gray.900',
  };

  return (
    <>
      <Link
        mb={4}
        isExternal
        title={project.title}
        href={project.url}
        _hover={{
          textDecoration: 'none',
          backgroundColor: hoverBg[colorMode],
        }}
      >
        <Box borderWidth="1px" rounded="lg" overflow="hidden">
          <Flex direction={['column', 'row']} p={8}>
            <Image
              size="100px"
              src={project.image}
              alt={project.title}
              fallbackSrc="https://via.placeholder.com/100"
              bg={'white'}
              mb={[4, 0]}
              rounded="lg"
            />

            <Flex direction="column" px={[0, 8]}>
              <Heading as="h3" size="lg" pb={2}>
                {project.title}
              </Heading>
              <Text>{project.description}</Text>
            </Flex>
          </Flex>
        </Box>
      </Link>
    </>
  );
};

export default CurrentProjecCard;
