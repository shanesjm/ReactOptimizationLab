import axios from "axios";
import { FetchUsersResponse, UserDTO } from "../types/UserTypes";

const baseApiURL = process.env.REACT_APP_BASE_API_URL;

export const fetchUsers = async (): Promise<UserDTO[]> => {
  const response = await axios.get<FetchUsersResponse>(`${baseApiURL}/users`);
  return response.data.data.users;
};
