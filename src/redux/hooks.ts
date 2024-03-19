import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import store, { Dispatch, RootState } from "@/redux/store";
import { ITodoItem } from "@/domain/todo/ITodoItem";

export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useCustomDispatch = () => useDispatch<Dispatch>();
