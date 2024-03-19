import styles from "@/pages/todo/styles/TodoPage.module.css";
import React, { useRef, useState } from "react";
import { UserIdProps } from "@/pages/todo/props/UserIdProps";
import useTodoInputHandler from "@/pages/todo/events/useTodoInputHandler";

const TodoInput: React.FC<UserIdProps> = ({ userId }: UserIdProps) => {
  const addInputRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState<string>("");

  const { handleKeyPress, changeInput } = useTodoInputHandler(text, setText, userId);

  return (
    <input ref={addInputRef}
           id="newTodo"
           className={styles.newTodo}
           placeholder="할일을 추가해주세요"
           onKeyDown={handleKeyPress}
           onChange={changeInput} value={text}
    />
  );
};

export default TodoInput;
