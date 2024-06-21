import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers } from "../../api/userApi";
import { UserDTO } from "../../types/UserTypes";

export const fetchUsersThunk = createAsyncThunk<UserDTO[]>(
  "users/fetchUsers",
  async () => {
    const users = await fetchUsers();
    return users;
  }
);
