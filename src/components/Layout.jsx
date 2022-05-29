import React from "react";
import { Outlet, Link } from "react-router-dom";
import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Button,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";

function NavItem({ href, children }) {
  return (
    <Link to={href}>
      <Center
        fontSize={{ base: "4xl", md: "6xl" }}
        fontWeight="bold"
        sx={{ textTransform: "uppercase" }}
        border="md"
        borderRadius="sm"
        borderColor="primary"
        p={{ base: 4, md: 8 }}
      >
        {children}
      </Center>
    </Link>
  );
}

const darkModeIconStyles = {
  width: { base: 5, md: 10 },
  height: { base: 5, md: 10 },
};

function Layout() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex
        as="header"
        mt={{ base: 4, md: 8 }}
        pos="relative"
        alignItems="center"
      >
        <Box
          bg="secondary"
          sx={{
            height: "50%",
            position: "absolute",
            top: "50%",
            left: 0,
            right: 0,
            transform: "translateY(-50%)",
          }}
        />
        <Container maxW="container.xl" as="nav" zIndex={1}>
          <Center justifyContent="space-between">
            <Link to="/">
              <Box
                p={{ base: 4, md: 8 }}
                bg="primary"
                boxShadow="md"
                borderRadius="sm"
                w="fit-content"
                sx={{ transform: "rotate(2deg)" }}
              >
                <Heading
                  as="h1"
                  fontSize={{ base: "4xl", md: "6xl" }}
                  sx={{ letterSpacing: ".1em" }}
                >
                  Done!
                </Heading>
              </Box>
            </Link>
            <Center>
              <NavItem href="/create">
                <AddIcon />
              </NavItem>
              <IconButton
                aria-label="Dark mode toggle"
                onClick={toggleColorMode}
                variant="unstyled"
                icon={
                  colorMode === "light" ? (
                    <SunIcon sx={darkModeIconStyles} />
                  ) : (
                    <MoonIcon sx={darkModeIconStyles} />
                  )
                }
                sx={{
                  ml: { base: 4, md: 12 },
                  outline: "none",
                  "&:focus": { boxShadow: "none" },
                }}
              />
            </Center>
          </Center>
        </Container>
      </Flex>
      <Container maxW="full" centerContent mt={4}>
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;
