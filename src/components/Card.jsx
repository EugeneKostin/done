import React, { useMemo } from 'react';
import {
  Box, Center, Heading, Text, VStack,
} from '@chakra-ui/react';

function Card({ post }) {
  const postCreationDate = useMemo(
    () => (Number.isNaN(post?.createdOn) ? 'Дата не указана' : new Date(post?.createdOn?.seconds * 1000).toLocaleDateString('ru-RU')),
    [post],
  );

  return (
    <VStack bg="yellow.200" spacing={10} px={6} py={10}>
      <Center>
        <Heading size="xl" textDecoration="underline">
          {postCreationDate}
        </Heading>
      </Center>
      <Text fontSize="lg" fontWeight="medium">
        {post.title}
      </Text>
      <Text fontSize="lg" fontWeight="medium">
        {post.text}
      </Text>
    </VStack>
  );
}

export default Card;
