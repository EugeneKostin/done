import React, { useMemo } from "react";
import {
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import parse from "html-react-parser";

function Card({ post }) {
  const postCreationDate = useMemo(() => {
    if (Number.isNaN(post?.createdOn) || !post?.createdOn?.seconds) {
      return "Дата не указана";
    }
    return new Date(post.createdOn.seconds * 1000).toLocaleDateString("ru-RU");
  }, [post]);

  const bg = useColorModeValue("#EFE683", "#413806");
  const codeBg = useColorModeValue("whiteAlpha.600", "blackAlpha.600");
  return (
    <VStack
      bg={bg}
      px={{ base: 6, md: 8 }}
      py={{ base: 8, md: 10 }}
      borderRadius="sm"
      shouldWrapChildren
      sx={{
        "& .chakra-stack__item": {
          width: "100%",
        },
      }}
    >
      <Heading size="lg" textDecoration="underline" textAlign="center">
        {postCreationDate}
      </Heading>
      <Text
        fontSize={{ base: "lg", md: "xl" }}
        fontWeight="bold"
        sx={{ mt: { base: 4, md: 6 }, textAlign: "center" }}
      >
        {post.title}
      </Text>
      <Box
        w="100%"
        fontSize={{ base: "sm", md: "md" }}
        mt={{ base: 2, md: 4 }}
        fontWeight="medium"
        sx={{
          "& a": {
            textDecoration: "underline",
            color: "primary",
            fontStyle: "italic",
          },
          "& pre": {
            whiteSpace: "pre-wrap",
          },
          "& code": {
            backgroundColor: codeBg,
          },
        }}
      >
        {parse(post.text)}
      </Box>
    </VStack>
  );
}

export default Card;
