import React from 'react';
import {
  Box, Center, Flex, Heading, Text, VStack,
} from '@chakra-ui/react';

function Card() {
  return (
    <VStack bg="yellow.200" spacing={10} px={6} py={10}>
      <Center>
        <Heading size="xl" textDecoration="underline">
          20.03.2022
        </Heading>
      </Center>
      <Text fontSize="lg" fontWeight="medium">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid aperiam consectetur dicta dolor
        error, ex facilis fugit, illum impedit molestias natus nesciunt odit praesentium quam recusandae rerum unde
        ut.
      </Text>
    </VStack>
  );
}

export default Card;
