import React, { useCallback } from "react";
import { editTodo } from "@/domain/todo/todoItemsSlice";
import styles from "@/components/todo/styles/TodoPage.module.css";
import { useCustomDispatch } from "@/redux/hooks";
import { ITodoItem } from "@/domain/todo/ITodoItem";

const useTodoEditHandler = (todo: ITodoItem, todoLiRef: React.RefObject<HTMLLIElement>) => {
  const dispatch = useCustomDispatch();

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>, editInputRef: React.RefObject<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const updatedText = editInputRef.current!.value;
      dispatch(editTodo({
        ...todo,
        text: updatedText,
      }));
      todoLiRef.current!.classList.remove(styles.editing);
    } else if (event.key === "Escape") {
      todoLiRef.current!.classList.remove(styles.editing);
    }
  }, [dispatch, todo, todoLiRef]);

  return { handleKeyDown };
};

export default useTodoEditHandler;
