import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import { LogoIcon } from "../components/icon";

interface Props {}

export const Landing: React.FC<Props> = () => {
  return (
    <Container maxW="container.xl">
      <Box as="nav" px={5} py={7} textAlign="right">
        <Link
          as={RouterLink}
          to="/login"
          _hover={{
            textDecoration: "none",
          }}
        >
          <Button>Log in</Button>
        </Link>
      </Box>

      <Container centerContent mt={28}>
        <VStack spacing={10}>
          <Flex direction="column" justifyContent="center" alignItems="center">
            <LogoIcon boxSize={14} />
            <Text color="gray.200" mt="1.25rem" textStyle="brand">
              checkme
            </Text>
          </Flex>
          <Text
            as="h3"
            color="gray.200"
            fontSize="3xl"
            lineHeight="9"
            textAlign="center"
          >
            The easiest way to Organise, Track and be productive on all your
            tasks
          </Text>
          <HStack spacing="10px">
            <Button variant="grey" disabled>
              Support our cause
            </Button>
            <Button>Start checking🚀</Button>
          </HStack>
        </VStack>
      </Container>
    </Container>
  );
};
