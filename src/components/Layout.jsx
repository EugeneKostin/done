import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  Box, Container, Flex, Heading,
} from '@chakra-ui/react';

function Layout() {
  return (
    <>
      <Flex as="header" mt={6} pos="relative" h={160} alignItems="center">
        <Box
          bg="green.600"
          sx={{
            height: '50%',
            position: 'absolute',
            zIndex: -1,
            top: '50%',
            left: 0,
            right: 0,
            transform: 'translateY(-50%)',
            borderTop: '4px solid #000',
            borderBottom: '4px solid #000',
          }}
        />
        <Container maxW="container.lg">
          <Box p={8} bg="purple.400" boxShadow="md" borderRadius="sm" w="fit-content" sx={{ transform: 'rotate(2deg)' }}>
            <Heading as="h1" fontSize="6xl" sx={{ letterSpacing: '.1em' }}>
              Done!
            </Heading>
          </Box>
        </Container>
      </Flex>
      <Container maxW="full" centerContent>
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;
