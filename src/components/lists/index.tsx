import { DeleteIcon } from "@chakra-ui/icons";
import { List, ListItem, useToast } from "@chakra-ui/react";
import React from "react";
import { useList } from "../../hooks/useList";
import { IList } from "../../interface";
import { deleteList } from "../../services/list";
import { ListIcon } from "../icon";
import "./index.scss";

interface props {}

export const Lists: React.FC<props> = () => {
  const { lists, setLists } = useList();
  const toast = useToast();

  const handleDelete = (id: string) => {
    let indexToBeDeleted = lists.findIndex((lists) => lists._id === id);
    let modifiedLists = lists.filter((_, idx) => idx !== indexToBeDeleted);
    deleteList(id).then(
      (response) => {
        toast({
          title: response.data.msg,
          duration: 2000,
          position: "top-right",
          status: "success",
          variant: "solid",
        });
        setLists(modifiedLists);
      },
      (error) => {
        console.error(error);
        toast({
          title: "an error occured, try agaain",
          duration: 3000,
          position: "top-right",
          status: "error",
          variant: "solid",
        });
      }
    );
  };

  const renderList = lists.map((list: IList) => (
    <ListItem
      key={list._id}
      as="button"
      width="100%"
      textAlign="start"
      textTransform="capitalize"
      color="gray.100"
      fontSize="md"
      py={2}
      px="1.625rem"
      _hover={{
        bg: "dark.500",
      }}
      className="list-item"
    >
      <ListIcon
        as={DeleteIcon}
        className="delete-icon"
        color="red.400"
        boxSize={4}
        onClick={() => handleDelete(list._id)}
      />
      <ListIcon as={ListIcon} boxSize={5} ms={5} me={5} />
      {list.title}
    </ListItem>
  ));

  return <List spacing={2}>{renderList}</List>;
};
