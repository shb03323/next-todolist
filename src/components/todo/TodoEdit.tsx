import React from "react";
import styles from "@/components/todo/styles/TodoPage.module.css";
import { TodoEditProps } from "@/components/todo/props/TodoEditProps";
import useTodoEditHandler from "@/components/todo/events/useTodoEditHandler";

const TodoEdit: React.FC<TodoEditProps> = ({ todo, editInputRef, todoLiRef }: TodoEditProps) => {
  const { handleKeyDown } = useTodoEditHandler(todo, todoLiRef);

  return (
    <input ref={editInputRef}
           className={styles.edit}
           onKeyDown={(event) => handleKeyDown(event, editInputRef)}
    />
  );
};

export default TodoEdit;
