import { IUser } from "../../interface";
import { authAxios } from "../../util/authAxios";

const retrieveUser = () => {
  const fromLocalStorage = localStorage.getItem("author");
  const author: IUser = fromLocalStorage && JSON.parse(fromLocalStorage);

  return author
}

export const getList = () => {
const author = retrieveUser()

  return authAxios.get("/lists/get-lists", {
    params: {
      userId: author.userId,
    },
  });
};

export const createList = (title: string) => {
  const author = retrieveUser()

  const payload = {
    title,
    author: author.userId,
  };
  return authAxios.post("lists/create-list/", payload);
};

export const updateList = (args: { listId: string; title: string }) => {
  const author = retrieveUser()

  const { title, listId } = args;
  const payload = {
    title,
    author: author.userId,
  };
  const params = {
    listId,
    authorId: author.userId,
  };

  return authAxios.patch("lists/update-list", payload, { params });
};

export const deleteList = (listId: string) => {
  const author = retrieveUser()

  const params = {
    listId,
    authorId: author.userId,
  };

  return authAxios.delete("lists/delete-list", { params });
};
