import React, { useState } from "react";
import { AddIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { useList } from "../../hooks/useList";
import { createTask } from "../../services/task";
import { getList } from "../../services/list";

interface props {}

export const AddTask: React.FC<props> = () => {
  const toast = useToast();
  const [inputValue, setInputValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { activeList, setActiveList, setLists } = useList();

  const createNewTask = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (!activeList) {
        toast({
          title: "select the list you want to add your task to!",
          duration: 4000,
          position: "top-right",
          status: "info",
          variant: "solid",
        });
        return;
      }
      setIsSubmitting(true);
      createTask({
        listId: activeList?._id,
        title: e.currentTarget.value,
      }).then(
        (response) => {
          toast({
            title: response.data.msg,
            duration: 4000,
            position: "top-right",
            status: "success",
            variant: "solid",
          });
          setInputValue("");
          setActiveList({
            ...activeList,
            createdTasks: [...activeList.createdTasks, response.data.data],
          });
          getList().then((response) => {
            setLists(response.data.data);
          });
          setIsSubmitting(false);
        },
        (error) => console.log(error.response.data)
      );
    }
  };

  return (
    <InputGroup>
      <InputLeftAddon bg="dark.100" border="none" justifyContent="center">
        {isSubmitting ? (
          <Spinner fontSize="md" color="primary.500" />
        ) : (
          <AddIcon fontSize="md" color="primary.500" />
        )}
      </InputLeftAddon>
      <Input
        value={inputValue}
        pl={0}
        borderRadius="10px"
        border="none"
        bg="dark.100"
        fontSize="md"
        p="inital"
        color="gray.100"
        _focus={{
          boxShadow: "none",
          borderColor: "gray.300",
        }}
        _placeholder={{
          color: "gray.100",
          fontWeight: "semibold",
        }}
        type="text"
        placeholder="Add Tasks"
        disabled={isSubmitting}
        onKeyDown={createNewTask}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </InputGroup>
  );
};
