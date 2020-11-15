import React, { useState } from 'react';
import Container from '@components/Container';
import { Input, Stack, Button, Flex, Heading, useToast } from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { isAdministrator, sendSignInLinkToEmail } from '@lib/auth';
import useLocalStorage from '@utils/hooks/useLocalStorage';
import nookies from 'nookies';
import admin from '@utils/admin-firebase';

export async function getServerSideProps(ctx) {
  try {
    const cookies = nookies.get(ctx);
    const token = await admin.auth().verifyIdToken(cookies.token);
    if (token) {
      ctx.res.writeHead(302, { Location: '/' });
      ctx.res.end();
    }
    return {
      props: {
        token: token || null,
      },
    };
  } catch (error) {
    return { props: {} };
  }
}

const Login = () => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [emailLocalStorage, setEmailLocalStorage] = useLocalStorage('email', '');

  const handleSubmitEmail = async (values) => {
    try {
      setIsLoading(true);
      const { email } = values;
      const isAdmin = await isAdministrator(email);
      if (isAdmin) {
        toast({
          title: 'Success',
          description: 'An email from Firebase has been sent to your email',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        await sendSignInLinkToEmail(email);
        setEmailLocalStorage(email);
      } else {
        throw new Error();
      }
    } catch (error) {
      setIsLoading(false);
      toast({
        title: 'GO AWAY 👿',
        description: 'You are not you!',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      formik.setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(''),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmitEmail(values);
    },
  });

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <Stack
          as="main"
          spacing={4}
          justifyContent="center"
          alignItems="flex-start"
          m={['0 0 4rem 0', '0 auto 4rem auto']}
          maxWidth="700px"
          w={[300, 500]}
        >
          <Flex flexDirection="column" justifyContent="center" alignItems="center" w={[300, 500]}>
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              Hello!
            </Heading>
          </Flex>

          <Input
            placeholder="Email"
            size="md"
            type="email"
            width="100%"
            disabled={formik.isSubmitting}
            error={formik.touched.email && formik.errors.email ? formik.errors.email : ''}
            {...formik.getFieldProps('email')}
          />
          <Button
            type="submit"
            variantColor="teal"
            size="md"
            width="100%"
            disabled={!formik.dirty}
            isLoading={isLoading}
          >
            Get Link
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default Login;
