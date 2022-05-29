import {
  chakra,
  Input as ChakraInput,
  FormControl,
  InputGroup,
  FormErrorMessage,
} from "@chakra-ui/react";
import React from "react";

const StyledInput = chakra(ChakraInput, {
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

export const StyledFormErrorMessage = chakra(FormErrorMessage, {
  baseStyle: {
    backgroundColor: "#e907ae",
    p: 2,
    fontWeight: "medium",
    fontSize: "md",
    mt: 3,
    color: "white",
  },
});

export default function Input({
  placeholder,
  autoсomplete = "off",
  leftAddon = null,
  rightAddon = null,
  errors,
  name,
  register,
  registerOptions,
  ...props
}) {
  return (
    <FormControl isInvalid={errors[name]}>
      <InputGroup size="lg" alignItems="center">
        {leftAddon}
        <StyledInput
          placeholder={placeholder}
          autoсomplete={autoсomplete}
          {...register(name, registerOptions)}
          {...props}
        />
        {rightAddon}
      </InputGroup>
      <StyledFormErrorMessage>{errors[name]?.message}</StyledFormErrorMessage>
    </FormControl>
  );
}
