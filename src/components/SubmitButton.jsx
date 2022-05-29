import { Button } from "@chakra-ui/react";
import React from "react";

function SubmitButton({ isLoading, children }) {
  return (
    <Button
      isLoading={isLoading}
      variant="outline"
      borderRadius="none"
      border="sm"
      borderColor="primary"
      type="submit"
      px={10}
      py={6}
      fontSize="2xl"
      textTransform="uppercase"
      fontWeight="bold"
    >
      {children}
    </Button>
  );
}

export default SubmitButton;
