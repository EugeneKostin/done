import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useToast, Box, VStack } from "@chakra-ui/react";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import { addPost } from "../firebase/firestore";
import PageHeader from "../components/PageHeader";
import RTEditor from "../components/RTEditor";

const defaultValues = {
  title: "",
  text: "",
  createdOn: new Date(),
};

function Create() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
    control,
  } = useForm({
    defaultValues,
  });
  const navigate = useNavigate();
  const toast = useToast();

  const onSubmit = async (formData) => {
    try {
      await addPost(formData);
      navigate("/");
    } catch (err) {
      toast({
        title: "Произошла ошибка",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      reset();
    }
  };

  return (
    <VStack w={["full", "3xl"]} py={16} spacing={14}>
      <PageHeader>Новый пост</PageHeader>
      <Box w="full">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <VStack spacing={10} w="full">
            <Input
              placeholder="Введите название поста"
              register={register}
              name="title"
              registerOptions={{
                required: "Ну пару слов напиши про что пост",
              }}
              errors={errors}
            />
            <RTEditor control={control} name="text" />
            <SubmitButton isLoading={isSubmitting}>Создать</SubmitButton>
          </VStack>
        </form>
      </Box>
    </VStack>
  );
}

export default Create;
