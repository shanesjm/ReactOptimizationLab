import { createSlice } from "@reduxjs/toolkit";
import { fetchUsersThunk } from "./userThunks";
import { UserState } from "../../types/UserTypes";

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsersThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsersThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsersThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default userSlice.reducer;
