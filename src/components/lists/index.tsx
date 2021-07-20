import { List, ListItem } from "@chakra-ui/react";
import React from "react";
import { ListIcon } from "../icon";

interface props {}

export const Lists: React.FC<props> = () => {
  return (
    <List spacing={2}>
      <ListItem
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
        <ListIcon as={ListIcon} boxSize={5} me={5} />
        Projects
      </ListItem>
      <ListItem
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
        <ListIcon as={ListIcon} boxSize={5} me={5} />
        Something
      </ListItem>
    </List>
  );
};
