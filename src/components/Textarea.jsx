import React from "react";
import ResizeTextarea from "react-textarea-autosize";
import {
  chakra,
  FormControl,
  Textarea as ChakraTextArea,
} from "@chakra-ui/react";
import { StyledFormErrorMessage } from "./Input";

const StyledTextArea = chakra(ChakraTextArea, {
  baseStyle: {
    border: "4px solid",
    borderColor: "secondary",
    borderRadius: "none",
    padding: 2,
    fontWeight: "medium",
    "&:focus, &:hover": {
      border: "4px solid",
      borderColor: "secondary",
      boxShadow: "sm",
    },
  },
  shouldForwardProp: (prop) => !["sample"].includes(prop),
});

function Textarea({ name, register, placeholder, registerOptions, errors }) {
  return (
    <FormControl isInvalid={errors[name]}>
      <StyledTextArea
        minH="unset"
        overflow="hidden"
        w="100%"
        resize="none"
        minRows={4}
        as={ResizeTextarea}
        size="lg"
        placeholder={placeholder}
        {...register(name, registerOptions)}
      />
      <StyledFormErrorMessage>{errors[name]?.message}</StyledFormErrorMessage>
    </FormControl>
  );
}

export default Textarea;
