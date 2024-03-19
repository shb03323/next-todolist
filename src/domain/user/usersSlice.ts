import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "@/domain/user/IUser";
import { loadUsersStorage, updateUsersStorage } from "@/domain/localStorageManager";

const usersSlice = createSlice({
  name: "users",
  initialState: [] as IUser[],
  reducers: {
    initUsers(state, action: PayloadAction) {
      return loadUsersStorage();
    },
    addUser(state, action: PayloadAction<IUser>) {
      state.push(action.payload);
      updateUsersStorage(state);
    },
  }
});

export const { initUsers, addUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
