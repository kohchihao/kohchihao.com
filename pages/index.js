import { Flex, Stack, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import Container from '@components/Container';
import CurrentProjectCard from '@components/card/CurrentProjectCard';
import currentProjects from '@data/current-project';
import FeaturedOnCard from '@components/card/FeaturedOnCard';
import ProjectCard from '@components/card/ProjectCard';
import Footer from '@components/Footer';
import { getProjects, getFeatureds } from '@lib/airtable';

export async function getStaticProps() {
  const projects = await getProjects();
  const featureds = await getFeatureds();

  return {
    props: {
      projects,
      featureds,
    },
    revalidate: 1,
  };
}

export default function Home({ projects, featureds }) {
  const secondaryTextColor = useColorModeValue('gray.700', 'gray.400');

  return (
    <Container>
      <Stack
        as="main"
        spacing="8"
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
      >
        <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" maxWidth="700px">
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            Hey, I’m Marcus Koh Chi Hao
          </Heading>
          <Text color={secondaryTextColor}>
            I’m a Software Engineer that loves mobile and web development. Currently in my final year in NUS Computer
            Science.
          </Text>
        </Flex>

        <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" maxWidth="700px" mt={8}>
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
            Currently working on
          </Heading>
          {currentProjects.map((project, index) => (
            <CurrentProjectCard project={project} key={index} />
          ))}
        </Flex>

        <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" maxWidth="700px" mt={8}>
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
            Featured On
          </Heading>
          {featureds.map((news, index) => (
            <FeaturedOnCard news={news} key={index} />
          ))}
        </Flex>

        <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" maxWidth="700px" mt={8}>
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
            Projects
          </Heading>
          {projects.map((project, index) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </Flex>

        <Footer />
      </Stack>
    </Container>
  );
}
