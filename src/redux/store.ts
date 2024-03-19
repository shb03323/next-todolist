import { todoItemsReducer } from "@/domain/todo/todoItemsSlice";
import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "@/domain/todo/filterSlice";
import { usersReducer } from "@/domain/user/usersSlice";

const store = configureStore({
  reducer: {
    todoItems: todoItemsReducer,
    filter: filterReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
