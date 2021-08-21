import React, { useState } from "react";
import {
  Box,
  Checkbox,
  Editable,
  EditableInput,
  EditablePreview,
  HStack,
  Icon,
  List,
  ListItem,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useList } from "../../hooks/useList";
import { DeleteIcon } from "@chakra-ui/icons";
import "./index.scss";
import { deleteTask, updateTask } from "../../services/task";
import { getList } from "../../services/list";

interface props {}

export const Tasks: React.FC<props> = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const { activeList, setActiveList, setLists } = useList();
  const toast = useToast();

  const handleDelete = (args: { listId: string; taskId: string }) => {
    let indexToBeDeleted = activeList?.createdTasks.findIndex(
      (task) => task._id === args.taskId
    );
    let modifiedTasks = activeList?.createdTasks.filter(
      (_, idx) => idx !== indexToBeDeleted
    );

    setIsDeleting(true);

    deleteTask({ listId: args.listId, taskId: args.taskId })
      .then((response) => {
        toast({
          title: response.data.msg,
          duration: 4000,
          position: "top-right",
          status: "success",
          variant: "solid",
        });
        setIsDeleting(false);
        if (modifiedTasks && activeList) {
          setActiveList({
            ...activeList,
            createdTasks: modifiedTasks,
          });
        }
        getList().then((response) => {
          setLists(response.data.data);
        });
      })
      .catch((error) => {
        setIsDeleting(false);
        console.log(error);
        toast({
          title: "An error occured, try again!",
          duration: 4000,
          position: "top-right",
          status: "error",
          variant: "solid",
        });
      });
  };

  const handleUpdate = (args: {
    title: string;
    listId: string;
    taskId: string;
  }) => {
    updateTask({
      title: args.title,
      listId: args.listId,
      taskId: args.taskId,
    }).then((response) => {
      console.log(response.data);
    });
  };

  const renderTasks = activeList?.createdTasks.map((task) => (
    <ListItem
      key={task._id}
      className="task"
      width="100%"
      color="gray.100"
      bg="dark.100"
      fontSize="md"
      py={2}
      px={4}
      borderRadius="10px"
      opacity={task.completed ? 0.5 : 1}
      overflow="hidden"
    >
      <HStack spacing={5} width="100%">
        <Checkbox
          bg="inherit"
          colorScheme="messenger"
          iconColor="gray.100"
          size="md"
          isChecked={task.completed}
          onChange={() => setIsChecked(!isChecked)}
        />
        <Editable
          submitOnBlur
          flex={1}
          defaultValue={task.title}
          onSubmit={(value) =>
            handleUpdate({
              title: value,
              listId: task.listId,
              taskId: task._id,
            })
          }
          isDisabled={task.completed}
        >
          <EditablePreview
            textDecoration={task.completed ? "line-through" : "inital"}
          />
          <EditableInput _focus={{ boxShadow: "none" }} />
        </Editable>
        <Icon
          className="delete-icon"
          as={isDeleting ? Spinner : DeleteIcon}
          color="gray.300"
          boxSize={4}
          cursor="pointer"
          onClick={() =>
            handleDelete({ listId: task.listId, taskId: task._id })
          }
        />
      </HStack>
    </ListItem>
  ));

  return (
    <List spacing={2}>
      {renderTasks?.length !== 0 ? (
        renderTasks
      ) : (
        <Box mt={20} w="100%">
          <Text
            color="gray.500"
            fontSize="md"
            fontWeight="semibold"
            textAlign="center"
          >
            No Tasks Yet
          </Text>
        </Box>
      )}
    </List>
  );
};
