import React from 'react';
import { Flex, Stack, Heading, Text, Link } from '@chakra-ui/react';
import Container from '@components/Container';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const About = () => {
  return (
    <Container>
      <Stack
        as="main"
        spacing={8}
        justifyContent="flex-start"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
      >
        <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" maxWidth="700px">
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            About Me
          </Heading>
          <Text mb={4}>
            Hello! I am Chi Hao aka Marcus. I am a React/ReactNative developer. I am currently working in Shopee as a
            React Native engineer building features for millions of our users.
          </Text>

          <Text mb={4}>
            On weekdays, I work my full time job (as a RN engineer) and on weekends, I am a full time exotic succulent
            hunter. I specialise in hunting Lithops and Astrophytums, both are succulents which are usually found in the
            desert.
          </Text>

          <Text mb={4}>
            On a personal note, I enjoy eating good food and cycling. I try to cycle whenever I&#39;m free during the
            week.
          </Text>

          <Text mb={4}>
            Click{' '}
            <Link href="/kohchihao.pdf" download>
              here
              <ExternalLinkIcon mx="2px" />
            </Link>{' '}
            to download my resume if you are interested in my professional experience!
          </Text>
        </Flex>
      </Stack>
    </Container>
  );
};

export default About;
