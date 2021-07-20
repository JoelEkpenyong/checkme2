import { Avatar, Box, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import profilePicture from "../../assets/images/profile.jpg";
import React from "react";
import { AllTasksIcon } from "../icon";
import { AddList } from "../addList";
import { Lists } from "../lists";

interface props {}

export const Nav: React.FC<props> = () => {
  return (
    <Box
      as="nav"
      py="1.625rem"
      width={["280px"]}
      height="100vh"
      bg="dark.100"
      pos="fixed"
      left={0}
    >
      <VStack alignItems="flex-start" spacing={5}>
        <Box px="1.625rem">
          <HStack justifyContent="flex-start">
            <Avatar name="profile picture" src={profilePicture} size="sm" />
            <Text color="gray.100" fontSize="md" textTransform="capitalize">
              Joel Ekpenyong
            </Text>
          </HStack>
        </Box>
        <Box
          width="100%"
          textAlign="start"
          as="button"
          color="gray.100"
          fontSize="md"
          py={2}
          px="1.625rem"
          _hover={{
            bg: "dark.500",
          }}
        >
          <AllTasksIcon boxSize={6} me={5} />
          All Tasks
        </Box>
        <Box px="1.625rem" width="100%">
          <Divider borderColor="gray.700" />
        </Box>
        <Box width="100%">
          <AddList />
        </Box>
        <Box>
          <Lists />
        </Box>
      </VStack>
    </Box>
  );
};
