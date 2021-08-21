import { IUser } from "../../interface";
import { authAxios } from "../../util/authAxios";

const fromLocalStorage = localStorage.getItem("author");
const author: IUser = fromLocalStorage && JSON.parse(fromLocalStorage);
const authorId = author.userId;

export const getAllTasks = () => {
  return authAxios.get("tasks/get-tasks/", {
    params: {
      authorId,
    },
  });
};

export const getTasksById = (listId: string) => {
  return authAxios.get("tasks/get-tasks/", {
    params: {
      listId,
      authorId,
    },
  });
};

export const createTask = (args: {
  title: string;
  listId: string | undefined;
}) => {
  let payload = {
    title: args.title,
    author: authorId,
  };

  let params = {
    listId: args.listId,
  };

  return authAxios.post("tasks/create-task/", payload, { params });
};

export const updateTask = (args: {
  title: string;
  listId: string;
  taskId: string;
}) => {
  let payload = {
    title: args.title,
    author: authorId,
  };

  let params = {
    listId: args.listId,
    taskId: args.taskId,
  };

  return authAxios.patch("tasks/update-task", payload, { params });
};

export const deleteTask = (args: { listId: string; taskId: string }) => {
  let params = {
    listId: args.listId,
    tasksId: args.taskId,
  };

  return authAxios.delete("tasks/delete-task", { params });
};
