import { ITodoItem } from "@/domain/todo/ITodoItem";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadTodoItemsStorage, updateTodoItemsStorage } from "@/domain/localStorageManager";

const todoItemsSlice = createSlice({
  name: "todoItems",
  initialState: [] as ITodoItem[],
  reducers: {
    initTodo(state, action: PayloadAction) {
      return loadTodoItemsStorage();
    },
    addTodo(state, action: PayloadAction<ITodoItem>) {
      state.push(action.payload);
      updateTodoItemsStorage(state);
    },
    deleteTodo(state, action: PayloadAction<number>) {
      const newState = state.filter(todo => todo.id !== action.payload);
      updateTodoItemsStorage(newState);
      return newState;
    },
    editTodo(state, action: PayloadAction<ITodoItem>) {
      const index = state.findIndex(todo => todo.id === action.payload.id);
      state[index].text = action.payload.text;
      updateTodoItemsStorage(state);
    },
    toggleTodo(state, action: PayloadAction<number>) {
      const todo: ITodoItem = state.find(todo => todo.id === action.payload)!;
      todo.completed = !todo.completed;
      updateTodoItemsStorage(state);
    },
  },
});

export const { initTodo, addTodo, deleteTodo, editTodo, toggleTodo } = todoItemsSlice.actions;
export const todoItemsReducer = todoItemsSlice.reducer;
