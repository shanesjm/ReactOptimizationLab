export interface UserDTO {
  id: string;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  avatar: string;
  role: string;
  join_date: string;
  description: string;
}

export interface FetchUsersResponse {
  data: {
    users: UserDTO[];
  };
}

export interface UserState {
  users: UserDTO[];
  loading: boolean;
  error: string | null;
}
