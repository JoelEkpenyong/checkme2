import React from "react";
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
import { motion } from "framer-motion";
import { LogoIcon } from "../../components/icon";

interface Props {}

export const Landing: React.FC<Props> = () => {
  const animationVariant = {
    container: {
      exit: {
        opacity: 0,
      },
      animate: {
        transition: {
          staggerChildren: 0.2,
          staggerDirection: -1,
          delayChildren: 0.3,
        },
      },
    },
    box: {
      inital: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
        transition: {
          duration: 0.6,
        },
      },
    },
  };

  return (
    <Container
      as={motion.div}
      initial="inital"
      animate="animate"
      exit="exit"
      variants={animationVariant.container}
      maxW="container.xl"
    >
      <Box
        as={motion.nav}
        px={5}
        py={7}
        variants={animationVariant.box}
        textAlign="right"
      >
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

      <Container
        as={motion.div}
        variants={animationVariant.box}
        centerContent
        mt={28}
      >
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
            fontSize={["2xl", "3xl"]}
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
