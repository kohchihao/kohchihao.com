import { Flex, Stack, Heading, Text, Link } from '@chakra-ui/react';
import Container from '@components/Container';
import FeaturedOnCard from '@components/card/FeaturedOnCard';
import ProjectCard from '@components/card/ProjectCard';
import Footer from '@components/Footer';
import { getProjects, getFeatureds } from '@lib/airtable';
import { Project } from '@typed/Project';
import { Featured } from '@typed/Featured';
import { GetStaticProps } from 'next';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects();
  const featureds = await getFeatureds();

  return {
    props: {
      projects,
      featureds,
    },
    revalidate: 1,
  };
};

interface Props {
  projects: Project[];
  featureds: Featured[];
}

export default function Home({ projects, featureds }: Props) {
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
            Marcus Koh Chi Hao
          </Heading>
          <Text>
            React Native Software Engineer by day.{' '}
            <Link href="https://instagram.com/hdblithops?r=nametag" isExternal color="teal.500">
              Exotic succulents
              <ExternalLinkIcon mx="2px" />
            </Link>{' '}
            collector by night.
          </Text>
        </Flex>

        <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" maxWidth="700px" mt={8}>
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
            Featured On
          </Heading>
          {featureds.map((news) => (
            <FeaturedOnCard news={news} key={news.id} />
          ))}
        </Flex>

        <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" maxWidth="700px" mt={8}>
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
            Projects
          </Heading>
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </Flex>

        <Footer />
      </Stack>
    </Container>
  );
}
