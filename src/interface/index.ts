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

export interface IUserContext {
  lists: IList[] | [];
  setLists: React.Dispatch<React.SetStateAction<[] | IList[]>>;
  navState: boolean;
  setNavState: {
    readonly on: () => void;
    readonly off: () => void;
    readonly toggle: () => void;
  };
  activeList: IList | undefined;
  setActiveList: React.Dispatch<React.SetStateAction<IList | undefined>>;
}

export interface IUseListHook {
  lists: IList[] | [];
  setLists: React.Dispatch<React.SetStateAction<[] | IList[]>>;
  activeList: IList | undefined;
  setActiveList: React.Dispatch<React.SetStateAction<IList | undefined>>;
}

export interface IUseNavState {
  navState: boolean;
  setNavState: {
    readonly on: () => void;
    readonly off: () => void;
    readonly toggle: () => void;
  };
}
