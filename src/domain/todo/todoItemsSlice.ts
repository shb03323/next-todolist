import { ITodoItem } from "@/domain/todo/ITodoItem";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadLocalStorage, updateLocalStorage } from "@/domain/todo/localStorageManager";

let initialState: ITodoItem[] = loadLocalStorage();

const todoItemsSlice = createSlice({
  name: "todoItems",
  initialState: initialState,
  reducers: {
    addTodo(state, action: PayloadAction<ITodoItem>) {
      state.push(action.payload);
      updateLocalStorage(state);
    },
    deleteTodo(state, action: PayloadAction<number>) {
      const newState = state.filter(todo => todo.id !== action.payload);
      updateLocalStorage(newState);
      return newState;
    },
    editTodo(state, action: PayloadAction<ITodoItem>) {
      const index = state.findIndex(todo => todo.id === action.payload.id);
      state[index].text = action.payload.text;
      updateLocalStorage(state);
    },
    toggleTodo(state, action: PayloadAction<number>) {
      const todo: ITodoItem = state.find(todo => todo.id === action.payload)!;
      todo.completed = !todo.completed;
      updateLocalStorage(state);
    },
  },
});

export const { addTodo, deleteTodo, editTodo, toggleTodo } = todoItemsSlice.actions;
export const todoItemReducer = todoItemsSlice.reducer
