import React from 'react';
import { Flex, Box, Text, Heading, Link, useColorMode } from '@chakra-ui/react';
import Image from 'next/image';

interface Props {
  project: {
    title: string;
    description: string;
    url: string;
    image: string;
  };
}

const CurrentProjectCard = ({ project }: Props) => {
  const { colorMode } = useColorMode();

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
        <Box borderWidth='1px' rounded='lg' overflow='hidden'>
          <Flex direction={['column', 'row']} p={8}>
            <Flex bg='white' mb={[4, 0]} rounded='lg' justify='center' align='center'>
              <Image height={100} width={100} src={project.image} alt={project.title} priority />
            </Flex>

            <Flex direction='column' px={[0, 8]}>
              <Heading as='h3' size='lg' pb={2}>
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

export default CurrentProjectCard;
