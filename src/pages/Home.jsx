import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import Card from '../components/Card';

function Home() {
  return (
    <SimpleGrid
      spacing={10}
      align="stretch"
      mt={10}
      width="100%"
      columns={[1, 1, 2, 3]}
    >
      <Card />
      <Card />
      <Card />
    </SimpleGrid>
  );
}

export default Home;
