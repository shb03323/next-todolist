import styles from "@/pages/todo/styles/TodoPage.module.css";
import React, { useRef, useState } from "react";
import { addTodo } from "@/domain/todo/todoItemsSlice";
import { useCustomDispatch } from "@/redux/hooks";
import { UserIdProps } from "@/pages/todo/props/UserIdProps";
import user from "@/pages/user";

const TodoInput: React.FC<UserIdProps> = ({ userId }: UserIdProps) => {
  const addInputRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState<string>("");
  const dispatch = useCustomDispatch();

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && addInputRef.current) {
      if (text.trim() !== "") {
        dispatch(addTodo({
          id: Date.now(),
          text: text,
          completed: false,
          userId: userId,
        }));
        setText("");
      }
    }
  };

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;
    setText(value);
  };

  return (
    <input ref={addInputRef} id="newTodo" className={styles.newTodo} placeholder="할일을 추가해주세요"
           onKeyDown={handleKeyPress}
           onChange={changeInput} value={text} />
  );
};

export default TodoInput;
