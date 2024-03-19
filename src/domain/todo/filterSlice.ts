import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterType, TodoItemFilter } from "@/domain/todo/FilterType";

const filterSlice = createSlice({
  name: "filter",
  initialState: TodoItemFilter.ALL as FilterType,
  reducers: {
    setFilter(state, action: PayloadAction<FilterType>) {
      return action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
