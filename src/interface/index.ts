export interface IUser {
  email: string;
  userId: string;
  token: string;
  fullname: string;
}

export interface NewUser {
  email: string;
  fullname: string;
  password: string;
}

export interface IUseUserHook {
  user: IUser;
  setUser: (value: IUser) => void;
}

export interface IUseListHook {
  lists: IList | {};
  setLists: (lists: IList) => void;
}

export interface ITask {
  completed: boolean;
  _id: string;
  title: string;
  listId: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IList {
  createdTasks: ITask[];
  _id: string;
  title: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
