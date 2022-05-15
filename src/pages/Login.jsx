import React, { useState } from 'react';
import {
  chakra,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button, InputGroup, InputRightElement, IconButton, useToast, VStack, Box, Heading, InputLeftAddon,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import {
  ViewOffIcon, ViewIcon, EmailIcon, LockIcon,
} from '@chakra-ui/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { login } from '../firebase/auth';

const StyledInput = chakra(Input, {
  baseStyle: {
    border: '4px solid',
    borderColor: 'secondary',
    borderRadius: 'none',
    padding: 2,
    fontWeight: 'medium',
    '&:focus, &:hover': {
      border: '4px solid',
      borderColor: 'secondary',
      boxShadow: 'sm',
    },
  },
  shouldForwardProp: (prop) => !['sample'].includes(prop),
});

const StyledFormErrorMessage = chakra(FormErrorMessage, {
  baseStyle: {
    backgroundColor: '#e907ae',
    p: 2,
    fontWeight: 'medium',
    fontSize: 'md',
    mt: 3,
    color: 'white',
  },
});

const StyledInputLeftAddon = chakra(InputLeftAddon, {
  baseStyle: {
    pointerEvents: 'none',
    background: 'transparent',
    border: '4px solid',
    borderColor: 'black',
    borderRadius: 'none',
    borderRight: 'none',
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
  const from = location.state?.from || '/';
  const toast = useToast();

  const onSubmit = async ({ email, password }) => {
    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      toast({
        title: 'Не удалось войти',
        description: err.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      reset();
    }
  };

  return (
    <VStack w={['full', 'md']} spacing={14} mt={16}>
      <Heading as="h1" fontSize="4xl" textDecoration="underline">Вход</Heading>
      <Box w="full">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <VStack spacing={10} w="full">
            <FormControl isInvalid={errors.email}>
              <InputGroup size="lg" alignItems="center">
                <StyledInputLeftAddon>
                  <EmailIcon />
                </StyledInputLeftAddon>
                <StyledInput
                  placeholder="Введите email"
                  autoсomplete="email"
                  {...register('email', {
                    required: 'Укажите email',
                  })}
                />
              </InputGroup>
              <StyledFormErrorMessage>
                {errors.email?.message}
              </StyledFormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.password}>
              <PasswordInput register={register} />
              <StyledFormErrorMessage>
                {errors.password?.message}
              </StyledFormErrorMessage>
            </FormControl>
            <Button
              isLoading={isSubmitting}
              variant="outline"
              borderRadius="none"
              border="sm"
              borderColor="primary"
              type="submit"
              px={12}
              py={6}
              fontSize="xl"
              textTransform="uppercase"
            >
              Войти
            </Button>
          </VStack>
        </form>
      </Box>
    </VStack>
  );
}

function PasswordInput({ register }) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="lg" alignItems="center">
      <StyledInputLeftAddon pointerEvents="none"><LockIcon /></StyledInputLeftAddon>
      <StyledInput
        pr="3.5rem"
        type={show ? 'text' : 'password'}
        placeholder="Введите пароль"
        autoсomplete="current-password"
        {...register('password', {
          required: 'Укажите пароль',
        })}
      />
      <InputRightElement>
        <IconButton
          aria-label="Toggle password"
          onClick={handleClick}
          icon={show ? <ViewOffIcon /> : <ViewIcon />}
          sx={{
            borderRadius: 'none',
            bg: 'primary',
          }}
        />
      </InputRightElement>
    </InputGroup>
  );
}

export default Login;
