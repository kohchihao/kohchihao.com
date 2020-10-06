import React from 'react';
import { Flex, Box, Badge, Text, Heading, Button } from '@chakra-ui/core';

const ProjectCard = ({ project }) => {
  return (
    <>
      <Box borderWidth="1px" rounded="lg" overflow="hidden" mb={4} w="100%">
        <Flex direction="column" p={8}>
          <Flex direction="column" px={[0, 8]} pb={2} space>
            <Heading as="h4" size="md" pb={2}>
              {project.title}
            </Heading>

            <Flex direction="row" pb={2} wrap="wrap">
              {project.tech.map((tech) => (
                <Badge mr="2" mt="2">
                  {tech}
                </Badge>
              ))}
            </Flex>

            <Text pb={2}>{project.description}</Text>

            <Flex direction="row" pb={2} wrap="wrap">
              {project.urls.map((urlObj) => (
                <Button mr="2" mt="2" href={urlObj.url} as="a">
                  {urlObj.url_title}
                </Button>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default ProjectCard;
