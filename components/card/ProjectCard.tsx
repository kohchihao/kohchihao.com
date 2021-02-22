import React from 'react';
import { Flex, Box, Badge, Text, Heading, Button } from '@chakra-ui/react';
import { Project } from '@typed/Project';

interface Props {
  project: Project
}

const ProjectCard = ({ project }: Props) => {
  return (
    <Box borderWidth="1px" rounded="lg" overflow="hidden" mb={4} w="100%">
      <Flex direction="column" p={8}>
        <Flex direction="column" px={[0, 8]} pb={2}>
          <Heading as="h4" size="md" pb={2}>
            {project.title}
          </Heading>

          <Flex direction="row" pb={2} wrap="wrap">
            {project.tech.map((tech, index) => (
              <Badge mr="2" mt="2" key={index}>
                {tech}
              </Badge>
            ))}
          </Flex>

          <Text pb={2}>{project.description}</Text>

          <Flex direction="row" pb={2} wrap="wrap">
            {project.urlTitles.map((titles, index) => (
              <Button mr="2" mt="2" href={project.links[index]} as="a" key={index}>
                {titles}
              </Button>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProjectCard;
