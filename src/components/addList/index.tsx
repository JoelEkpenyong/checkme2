import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  Box,
  InputGroup,
  InputRightAddon,
  Input,
  useToast,
  Button,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { createList } from "../../services/list";
import { useList } from "../../hooks/useList";

interface props {}

export const AddList: React.FC<props> = () => {
  const [newList, setNewList] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { lists, setLists } = useList();
  const toast = useToast();

  const handleSubmit = (value: string) => {
    setIsSubmitting(true);
    if (value.length === 0) {
      toast({
        title: "input can't be empty",
        duration: 4000,
        position: "top-right",
        status: "info",
        variant: "solid",
      });
      setIsSubmitting(false);
      return;
    }
    createList(value).then(
      (response) => {
        toast({
          title: response.data.msg,
          duration: 4000,
          position: "top-right",
          status: "success",
          variant: "solid",
        });
        setIsSubmitting(false);
        setNewList("");
        setLists([...lists, response.data.data]);
      },
      (error) => {
        toast({
          title: "Try again",
          duration: 4000,
          position: "top-right",
          status: "error",
          variant: "solid",
        });
        setIsSubmitting(true);
        console.error(error);
      }
    );
  };

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
                  value={newList}
                  onChange={(e) => setNewList(e.target.value)}
                />
                <InputRightAddon
                  width="25%"
                  bg="primary.500"
                  color="gray.100"
                  border="none"
                  fontWeight="medium"
                  justifyContent="center"
                  borderRightRadius="10px"
                  cursor="pointer"
                >
                  <Button
                    fontSize="xs"
                    padding={0}
                    height="inital"
                    as="button"
                    _hover={{
                      backgroundColor: "inital",
                    }}
                    onClick={() => handleSubmit(newList)}
                    isLoading={isSubmitting}
                  >
                    Add
                  </Button>
                </InputRightAddon>
              </InputGroup>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};
