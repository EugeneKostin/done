import { Heading } from "@chakra-ui/react";
import React from "react";

function PageHeader({ children }) {
  return (
    <Heading as="h1" fontSize="5xl" textDecoration="underline">
      {children}
    </Heading>
  );
}

export default PageHeader;
