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
            Hello! I am Chi Hao aka Marcus. I am a junior React developer and a co-founder of GiftforGood. I am
            currently studying in National University of Singapore (NUS) and I'm in my final semester of study! I
            specialised in Software Engineering and Database (though I am more SE focused).
					</Text>

					<Text mb={4}>
            In GiftforGood, I play multiple roles (Co-Tech lead, Web designer and managing members). I manage this
            project together with my fellow co-founders{' '}
						<Link href="https://www.linkedin.com/in/jin-ying-tan/" isExternal>
              Jin Ying <ExternalLinkIcon mx="2px" />
						</Link>{' '}
            &
						<Link href="https://www.linkedin.com/in/jingwenwong/" isExternal>
							{' '}
              Jing Wen <ExternalLinkIcon mx="2px" />
						</Link>
            .
					</Text>

					<Text mb={4}>
            On a personal note, I enjoy eating good food and cycling. I try to cycle whenever I'm free during the week.
					</Text>

					<Text mb={4}>
            Click{' '}
						<Link href="/koh-chi-hao-resume.pdf" download>
              here
							<ExternalLinkIcon mx="2px" />
						</Link>{' '}
            to download my resume if you are interested in my professional experience!
					</Text>
				</Flex>

				<Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" maxWidth="700px">
					<Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            Food I enjoy
					</Heading>

					<Text>🚧 Under construction</Text>
				</Flex>
			</Stack>
		</Container>
	);
};

export default About;
