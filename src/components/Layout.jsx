import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import {
  Box, Container, Flex, Heading,
} from '@chakra-ui/react';

function Layout() {
  return (
    <>
      <Flex as="header" mt={6} pos="relative" h={160} alignItems="center">
        <Box
          bg="secondary"
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
          <Link to="/">
            <Box p={8} bg="primary" boxShadow="md" borderRadius="sm" w="fit-content" sx={{ transform: 'rotate(2deg)' }}>
              <Heading as="h1" fontSize="6xl" sx={{ letterSpacing: '.1em' }}>
                Done!
              </Heading>
            </Box>
          </Link>
        </Container>
      </Flex>
      <Container maxW="full" centerContent mt={4}>
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;
