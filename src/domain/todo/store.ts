import { todoItemReducer } from "@/domain/todo/todoItemsSlice";
import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "@/domain/todo/filterSlice";

const store = configureStore({
  reducer: {
    todoItems: todoItemReducer,
    filter: filterReducer
  },
});

export type TodoRootState = ReturnType<typeof store.getState>;
export type TodoDispatch = typeof store.dispatch;

export default store;
