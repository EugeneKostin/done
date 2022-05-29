import React, { useState } from "react";
import {
  chakra,
  InputRightElement,
  IconButton,
  useToast,
  VStack,
  Box,
  InputLeftAddon,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { ViewOffIcon, ViewIcon, EmailIcon, LockIcon } from "@chakra-ui/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../firebase/auth";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import PageHeader from "../components/PageHeader";

const StyledInputLeftAddon = chakra(InputLeftAddon, {
  baseStyle: {
    pointerEvents: "none",
    background: "transparent",
    border: "4px solid",
    borderRadius: "none",
    borderRight: "none",
  },
});

function Login() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  const toast = useToast();

  const onSubmit = async (formData) => {
    const { email, password } = formData;
    try {
      await login({ email, password });
      navigate(from, { replace: true });
    } catch (err) {
      toast({
        title: "Не удалось войти",
        description: err.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      reset();
    }
  };

  return (
    <VStack w={["full", "md"]} spacing={14} py={16}>
      <PageHeader>Вход</PageHeader>
      <Box w="full">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <VStack spacing={10} w="full">
            <Input
              placeholder="Введите email"
              autoсomplete="email"
              register={register}
              name="email"
              registerOptions={{
                required: "Укажите email",
              }}
              leftAddon={
                <StyledInputLeftAddon>
                  <EmailIcon />
                </StyledInputLeftAddon>
              }
              errors={errors}
            />
            <PasswordInput {...{ errors, register }} />
            <SubmitButton isLoading={isSubmitting}>Войти</SubmitButton>
          </VStack>
        </form>
      </Box>
    </VStack>
  );
}

function PasswordInput({ register, errors }) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Input
      placeholder="Введите пароль"
      autoсomplete="current-password"
      register={register}
      name="password"
      type={show ? "text" : "password"}
      registerOptions={{
        required: "Укажите пароль",
      }}
      leftAddon={
        <StyledInputLeftAddon pointerEvents="none">
          <LockIcon />
        </StyledInputLeftAddon>
      }
      rightAddon={
        <InputRightElement>
          <IconButton
            aria-label="Toggle password"
            onClick={handleClick}
            icon={show ? <ViewOffIcon /> : <ViewIcon />}
            sx={{
              borderRadius: "none",
              bg: "primary",
            }}
          />
        </InputRightElement>
      }
      errors={errors}
    />
  );
}

export default Login;
