import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import store, { TodoDispatch, TodoRootState } from "@/domain/todo/store";
import { ITodoItem } from "@/domain/todo/ITodoItem";

export const useCustomSelector: TypedUseSelectorHook<TodoRootState> = useSelector;
export const useCustomDispatch = () => useDispatch<TodoDispatch>();
