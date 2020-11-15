import React from 'react';
import { firebaseAuth } from '@utils/firebase';
import { Input, Stack, Button, Flex, Heading, useToast } from '@chakra-ui/react';
import Container from '@components/Container';
import nookies from 'nookies';
import admin from '@utils/admin-firebase';
import { useRouter } from 'next/router';

export async function getServerSideProps(ctx) {
  try {
    const cookies = nookies.get(ctx);
    const token = await admin.auth().verifyIdToken(cookies.token);
    const { email } = token;
    return {
      props: {
        email: email || null,
      },
    };
  } catch (error) {
    ctx.res.writeHead(302, { Location: '/' });
    ctx.res.end();
    return {
      props: {},
    };
  }
}

const Dashboard = () => {
  const router = useRouter();

  const logout = async () => {
    firebaseAuth.signOut();
    router.push('/');
  };

  return (
    <Container>
      <Stack
        as="main"
        spacing={4}
        justifyContent="center"
        alignItems="flex-start"
        m={['0 0 4rem 0', '0 auto 4rem auto']}
        maxWidth="700px"
        w={'100%'}
      >
        <Button onClick={logout} variantColor="teal" size="md">
          Logout
        </Button>
      </Stack>
    </Container>
  );
};

export default Dashboard;
