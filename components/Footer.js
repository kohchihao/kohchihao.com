import React from 'react';
import { Flex, Link, IconButton } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center" w="100%">
      <Flex>
        <Link href="https://github.com/kohchihao" title="GitHub" isExternal>
          <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" color="gray.500" variant="ghost" />
        </Link>

        <Link href="https://www.linkedin.com/in/kohchihao/" title="LinkedIn" isExternal>
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" color="gray.500" variant="ghost" />
        </Link>

        <Link href="mailto:kohchihao@gmail.com" title="Mail" isExternal>
          <IconButton aria-label="Mail" icon={<MdEmail />} size="lg" color="gray.500" variant="ghost" />
        </Link>

        <Link href="https://medium.com/@kohchihao" title="Medium" isExternal>
          <IconButton aria-label="Medium" icon={<FaMedium />} size="lg" color="gray.500" variant="ghost" />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Footer;
