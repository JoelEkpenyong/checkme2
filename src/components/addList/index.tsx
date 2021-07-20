import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  Box,
  InputGroup,
  InputRightAddon,
  Input,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import React from "react";

interface props {}

export const AddList: React.FC<props> = () => {
  return (
    <Accordion allowToggle>
      <AccordionItem border="none">
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton px="1.625rem" _focus={{ boxShadow: "none" }}>
                <Box
                  flex="1"
                  textAlign="left"
                  color="gray.300"
                  fontSize="md"
                  fontWeight="bold"
                >
                  Personal Lists
                </Box>
                {isExpanded ? (
                  <MinusIcon fontSize="12px" color="gray.100" />
                ) : (
                  <AddIcon fontSize="12px" color="gray.100" />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel px="1.625rem" pb={4}>
              <InputGroup size="sm">
                <Input
                  borderLeftRadius="10px"
                  borderRight="none"
                  bg="gray.700"
                  fontSize="xs"
                  p="inital"
                  border="1px"
                  borderColor="gray.500"
                  type="text"
                  placeholder="List title"
                  color="gray.100"
                  _focus={{
                    boxShadow: "none",
                    borderColor: "gray.300",
                  }}
                />
                <InputRightAddon
                  width="25%"
                  bg="primary.500"
                  color="gray.100"
                  border="none"
                  fontSize="xs"
                  fontWeight="medium"
                  justifyContent="center"
                  borderRightRadius="10px"
                >
                  <button onClick={() => alert("hey there")}>Add</button>
                </InputRightAddon>
              </InputGroup>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};
