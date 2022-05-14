import React, { useEffect, useState } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import Card from '../components/Card';
import { getAllPosts } from '../firebase/firestore';

function Home() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const snapshot = await getAllPosts();
        let data = [];
        snapshot.forEach((doc) => {
          data = [...data, { id: doc.id, ...doc.data() }];
        });
        setPosts(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <SimpleGrid
      spacing={10}
      align="stretch"
      mt={10}
      width="100%"
      columns={[1, 1, 2, 3]}
    >
      {posts?.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </SimpleGrid>
  );
}

export default Home;
