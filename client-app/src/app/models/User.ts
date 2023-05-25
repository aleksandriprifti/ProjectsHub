export interface User {
  userName: string;
  displayName: string;
  token: string;
  image?: String;
}

export interface UserFormValues {
  email: string;
  password: string;
  displayName?: string;
  userName?: string;
}
