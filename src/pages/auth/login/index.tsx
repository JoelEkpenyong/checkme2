import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { GoogleIcon, LogoIcon } from "../../../components/icon";
import { motion } from "framer-motion";
import LoginForm from "../../../components/auth/loginform";
import { PageTransitionVariant } from "../../../util/framerVariants";

interface props {}

export const Login: React.FC<props> = () => {
  return (
    <Container
      as={motion.div}
      exit="exit"
      variants={PageTransitionVariant}
      maxW="container.xl"
    >
      <Box as="nav" px={5} py={7} textAlign="right">
        <Link
          as={RouterLink}
          to="/register"
          _hover={{
            textDecoration: "none",
          }}
        >
          <Button>Create Account</Button>
        </Link>
      </Box>

      <Container centerContent pt={[10, 0]}>
        <LogoIcon boxSize={14} />
        <Text
          color="gray.100"
          fontSize="xl"
          textTransform="capitalize"
          lineHeight={6}
          mt={8}
        >
          let's create an account
        </Text>
        <VStack spacing={7} minW={80} mt={9}>
          <LoginForm />
          <HStack w="100%">
            <Divider orientation="horizontal" borderColor="gray.700" />
            <Text
              fontSize="0.625rem"
              color="gray.100"
              w="80%"
              textAlign="center"
              fontWeight={600}
            >
              OR
            </Text>
            <Divider orientation="horizontal" borderColor="gray.700" />
          </HStack>
          <Button variant="grey" w="100%" type="button">
            <GoogleIcon boxSize="20px" mx={3} />
            Continue With Google
          </Button>
        </VStack>
      </Container>
    </Container>
  );
};
