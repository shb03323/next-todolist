import styles from "@/components/todo/styles/TodoPage.module.css";
import { deleteTodo, toggleTodo } from "@/domain/todo/todoItemsSlice";
import { ITodoItem } from "@/domain/todo/ITodoItem";
import React, { useCallback } from "react";
import { useCustomDispatch } from "@/redux/hooks";

const useTodoItemHandler = (
  todo: ITodoItem,
  liRef: React.RefObject<HTMLLIElement>,
  editInputRef: React.RefObject<HTMLInputElement>,
) => {
  const dispatch = useCustomDispatch();

  const handleDoubleClick = useCallback(() => {
    liRef.current!.classList.add(styles.editing);
    editInputRef.current!.value = todo.text;
    editInputRef.current!.focus();
  }, [liRef, editInputRef, todo]);

  const handleToggle = useCallback(() => {
    dispatch(toggleTodo(todo.id));
  }, [dispatch, todo]);

  const handleDelete = useCallback(() => {
    dispatch(deleteTodo(todo.id));
  }, [dispatch, todo]);

  return { handleDoubleClick, handleToggle, handleDelete };
};

export default useTodoItemHandler;
