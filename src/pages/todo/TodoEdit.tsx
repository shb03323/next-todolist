import React, { useState } from "react";
import styles from "@/pages/todo/styles/TodoPage.module.css";
import { TodoEditProps } from "@/pages/todo/props/TodoEditProps";
import { useCustomDispatch } from "@/redux/hooks";
import { editTodo } from "@/domain/todo/todoItemsSlice";

const TodoEdit: React.FC<TodoEditProps> = ({ todo, editInputRef, todoLiRef }: TodoEditProps) => {
  const [text, setText] = useState<string>(todo.text);
  const dispatch = useCustomDispatch();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && editInputRef.current) {
      const updatedText = editInputRef.current.value;
      setText(updatedText);
      dispatch(editTodo({
        ...todo,
        text: updatedText,
      }));
      todoLiRef.current!.classList.remove(styles.editing);
    }
    else if (event.key === "Escape") {
      todoLiRef.current!.classList.remove(styles.editing);
    }
  };

  return (
    <input ref={editInputRef} className={styles.edit} onKeyDown={handleKeyDown} />
  );
};

export default TodoEdit;
