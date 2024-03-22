import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import TodoItems from "@/domain/todo/TodoItems";

const todoItemsSlice = createSlice({
  name: "todoItems",
  initialState: new TodoItems(),
  reducers: {
    updateTodoItems(state, action: PayloadAction<TodoItems>) {
      return action.payload;
    },
  },
});

export const { updateTodoItems } = todoItemsSlice.actions;
export const todoItemsReducer = todoItemsSlice.reducer;
