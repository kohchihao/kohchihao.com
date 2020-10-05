import React from 'react';
import { Flex, Box, Image, Text, Heading, Link } from '@chakra-ui/core';
import currentProjects from '@data/current-project';

const CurrentProjecCard = () => {
  return (
    <>
      {currentProjects.map((project, index) => (
        <Link
          key={index}
          mb={4}
          isExternal
          title={project.title}
          href={project.url}
          _hover={{
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
            textDecoration: 'none',
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
      ))}
    </>
  );
};

export default CurrentProjecCard;
