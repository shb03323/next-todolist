import { todoItemsReducer } from "@/redux/todoItemsSlice";
import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "@/redux/usersSlice";

const store = configureStore({
  reducer: {
    todoItems: todoItemsReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
