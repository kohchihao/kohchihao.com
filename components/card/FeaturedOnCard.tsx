import React from 'react';
import { Flex, Box, Heading, Link, useColorMode } from '@chakra-ui/react';
import { Featured } from '@typed/Featured';

interface Props {
  news: Featured;
}

const FeaturedOnCard = ({ news }: Props) => {
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
				title={news.title}
				href={news.url}
				w="100%"
				_hover={{
					textDecoration: 'none',
					backgroundColor: hoverBg[colorMode],
				}}
			>
				<Box borderWidth="1px" rounded="lg" overflow="hidden">
					<Flex direction="column" p={8}>
						<Flex direction="column" px={[0, 8]}>
							<Heading as="h4" size="md">
								{news.title}
							</Heading>
						</Flex>
					</Flex>
				</Box>
			</Link>
		</>
	);
};

export default FeaturedOnCard;
