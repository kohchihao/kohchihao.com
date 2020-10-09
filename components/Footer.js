import React from 'react';
import { Flex, Text, Stack, Link, IconButton } from '@chakra-ui/core';

const Footer = () => {
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center" w="100%">
      <Flex>
        <Link href="https://github.com/kohchihao" title="GitHub" isExternal>
          <IconButton aria-label="GitHub" icon="github" size="lg" color="gray.500" variant="ghost" />
        </Link>

        <Link href="https://www.linkedin.com/in/kohchihao/" title="LinkedIn" isExternal>
          <IconButton aria-label="LinkedIn" icon="linkedin" size="lg" color="gray.500" variant="ghost" />
        </Link>

        <Link href="mailto:kohchihao@gmail.com" title="Mail" isExternal>
          <IconButton aria-label="Mail" icon="mail" size="lg" color="gray.500" variant="ghost" />
        </Link>

        <Link href="https://medium.com/@kohchihao" title="Medium" isExternal>
          <IconButton aria-label="Medium" icon="medium" size="lg" color="gray.500" variant="ghost" />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Footer;
