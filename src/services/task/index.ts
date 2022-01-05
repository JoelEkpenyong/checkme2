import { IUser } from "../../interface";
import { authAxios } from "../../util/authAxios";

const retrieveUser = () => {
  const fromLocalStorage = localStorage.getItem("author");
  const author: IUser = fromLocalStorage && JSON.parse(fromLocalStorage);

  return author
}

export const getAllTasks = () => {
  const author = retrieveUser()

  return authAxios.get("tasks/get-tasks/", {
    params: {
      authorId: author?.userId,
    },
  });
};

export const getTasksById = (listId: string) => {
  const author = retrieveUser()

  return authAxios.get("tasks/get-tasks/", {
    params: {
      listId,
      authorId: author?.userId,
    },
  });
};

export const createTask = (args: {

  title: string;
  listId: string | undefined;
}) => {

  const author = retrieveUser()

  let payload = {
    title: args.title,
    author: author?.userId,
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
  const author = retrieveUser()

  let payload = {
    title: args.title,
    author: author?.userId,
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
