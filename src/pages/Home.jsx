import React, { useEffect, useState } from "react";
import {
  Alert,
  AlertIcon,
  SimpleGrid,
  Skeleton,
  useToast,
} from "@chakra-ui/react";
import { v4 as uuid } from "uuid";
import Card from "../components/Card";
import { getAllPosts } from "../firebase/firestore";

function GridContainer({ children }) {
  return (
    <SimpleGrid
      spacing={10}
      py={{ base: 6, md: 12 }}
      align="stretch"
      width="100%"
      columns={{ base: 1, md: 2, xl: 3 }}
    >
      {children}
    </SimpleGrid>
  );
}

function Posts({ posts }) {
  return posts.length ? (
    <GridContainer>
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </GridContainer>
  ) : (
    <Alert
      colorScheme="primary"
      color="white"
      py={4}
      mt={16}
      boxShadow="sm"
      fontWeight="medium"
    >
      <AlertIcon />
      Постов нет
    </Alert>
  );
}

function Home() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

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
        toast({
          title: "Произошла ошибка",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    })();
  }, [toast]);

  return loading ? (
    <GridContainer>
      {Array(6).map((index) => (
        <Skeleton key={uuid(index)} height="300px" />
      ))}
    </GridContainer>
  ) : (
    <Posts posts={posts} />
  );
}

export default Home;
