import React, { useEffect, useState } from 'react';
import { BASE_URL } from '@constants';
import Error from 'next/error';
import useLocalStorage from '@utils/hooks/useLocalStorage';
import { CircularProgress, Flex } from '@chakra-ui/core';

import { useRouter } from 'next/router';
import { isSignInWithEmailLink, signInWithEmailLink } from '@lib/auth';

export async function getServerSideProps({ params, req, res, query }) {
  const url = req.url;
  const { mode } = query; // signIn
  const { oobCode, apiKey, continueUrl } = query;
  let isError = true;
  if (mode && oobCode && apiKey) {
    isError = false;
  }
  return {
    props: {
      isError,
      mode: mode || null,
      oobCode: oobCode || null,
      continueUrl: continueUrl || null,
      url,
    },
  };
}

const ActionPage = ({ url, continueUrl }) => {
  const [isError, setIsError] = useState(false);
  const [emailLocalStorage, setEmailLocalStorage] = useLocalStorage('email', '');
  const router = useRouter();

  const signIn = async () => {
    const isSignInWithEmail = await isSignInWithEmailLink(url);
    if (isSignInWithEmail) {
      let email = emailLocalStorage;
      if (emailLocalStorage === '') {
        email = window.prompt('Please provide your email for confirmation');
      }
      try {
        await signInWithEmailLink(email, BASE_URL + url);
        setEmailLocalStorage(''); // clear email from storage
        router.replace('/dashboard');
      } catch (error) {
        console.error(error.message);
        setIsError(true);
      }
    } else {
      console.error('Is not sign in with email link');
      setIsError(true);
    }
  };

  useEffect(() => {
    if (url && continueUrl) {
      signIn();
    }
  }, []);

  if (isError) {
    return <Error statusCode={401} />;
  }

  return (
    <Flex align="center" justify="center" w="100%" h="100vh">
      <CircularProgress isIndeterminate color="blue" />
    </Flex>
  );
};

export default ActionPage;
