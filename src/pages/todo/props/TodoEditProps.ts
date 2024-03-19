import { ITodoItem } from "@/domain/todo/ITodoItem";
import React from "react";

export interface TodoEditProps {
  todo: ITodoItem;
  editInputRef: React.RefObject<HTMLInputElement>;
  todoLiRef: React.RefObject<HTMLLIElement>;
}
