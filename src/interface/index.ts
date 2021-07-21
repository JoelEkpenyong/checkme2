export interface IUser {
  email: string;
  id: string;
  token: string;
  fullname: string;
}

export interface NewUser {
  email: string;
  fullname: string;
  password: string;
}
