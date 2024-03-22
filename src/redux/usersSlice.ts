import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Users from "@/domain/user/Users";

const usersSlice = createSlice({
  name: "users",
  initialState: new Users(),
  reducers: {
    updateUsers(state, action: PayloadAction<Users>) {
      return action.payload;
    },
  },
});

export const { updateUsers } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
