import React, { useEffect } from 'react';
import { getStatus } from '@lib/bother';
import { deserializeFirestoreTimestampToUnixTimestamp } from '@utils/firebase/deserialiser';
import { Input, Stack, Button, Flex, Heading, Text } from '@chakra-ui/core';
import dayjs from 'dayjs';

export async function getServerSideProps(ctx) {
  try {
    const snapshot = await getStatus();
    const data = snapshot.data();
    deserializeFirestoreTimestampToUnixTimestamp(data);
    return {
      props: {
        status: data,
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
}

const Status = ({ status }) => {
  return (
    <div>
      <Stack as="main" spacing={8} justifyContent="center" alignItems="center" maxWidth="700px" p={4}>
        <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
          Chi Hao is currently
        </Heading>
        <Text>{status.status}</Text>
        <Text>{status.context}</Text>

        <Text>{dayjs(status.endAt).format('DD/MM/YYYY HH:mm A')}</Text>
      </Stack>
    </div>
  );
};

export default Status;
