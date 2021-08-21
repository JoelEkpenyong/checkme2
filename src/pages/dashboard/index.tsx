import { Box, Container, HStack, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Nav } from "../../components/nav";
import { Tasks } from "../../components/tasks";
import { useList } from "../../hooks/useList";
import { getList } from "../../services/list";
import menuIcon from "@iconify-icons/jam/menu";
import { InlineIcon } from "@iconify/react";
import { useNavState } from "../../hooks/useNavState";
import { motion } from "framer-motion";
import { PageTransitionVariant } from "../../util/framerVariants";
import { AddTask } from "../../components/addTask";

interface props {}

export const Dashboard: React.FC<props> = () => {
  const { setLists, activeList } = useList();
  const { setNavState } = useNavState();

  useEffect(() => {
    getList().then((response) => {
      setLists(response.data.data);
    });
  }, [setLists]);

  return (
    <Container
      as={motion.div}
      exit="exit"
      variants={PageTransitionVariant}
      maxWidth="auto"
      px={0}
    >
      <Nav />
      <Box as="main" ml={{ base: 0, md: "280px" }} px={[4, 10]} py="1.625rem">
        <VStack alignItems="flex-start" spacing={5}>
          <HStack spacing={3}>
            <Box
              display={{ base: "inline", md: "none" }}
              as={InlineIcon}
              icon={menuIcon}
              boxSize={8}
              color="#2D9CDB"
              onClick={setNavState.toggle}
            />
            <Text
              as="h3"
              color="primary.500"
              fontWeight="semibold"
              textTransform="capitalize"
              fontSize="2xl"
              m={0}
            >
              {activeList?.title ?? "projects"}
            </Text>
          </HStack>
          <AddTask />
          <Box width="100%">
            <Tasks />
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};
