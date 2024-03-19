import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "@/redux/store";

export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useCustomDispatch = () => useDispatch<Dispatch>();
