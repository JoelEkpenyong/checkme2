import React, { useState } from "react";
import {
  Checkbox,
  Editable,
  EditableInput,
  EditablePreview,
  HStack,
  List,
  ListItem,
} from "@chakra-ui/react";

interface props {}

export const Tasks: React.FC<props> = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <List spacing={2}>
      <ListItem
        width="100%"
        color="gray.100"
        bg="dark.100"
        fontSize="md"
        py={2}
        px={4}
        borderRadius="10px"
        opacity={isChecked ? 0.5 : 1}
      >
        <HStack spacing={5} width="100%">
          <Checkbox
            bg="inherit"
            colorScheme="messenger"
            iconColor="gray.100"
            size="md"
            isChecked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <Editable flex={1} defaultValue="Take some chakra">
            <EditablePreview
              textDecoration={isChecked ? "line-through" : "inital"}
            />
            <EditableInput _focus={{ boxShadow: "none" }} />
          </Editable>
        </HStack>
      </ListItem>
    </List>
  );
};
