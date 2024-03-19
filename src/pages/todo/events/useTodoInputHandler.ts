import React, { useCallback, useState } from "react";
import { addTodo } from "@/domain/todo/todoItemsSlice";
import { useCustomDispatch } from "@/redux/hooks";

const useTodoInputHandler = (text: string, setText: React.Dispatch<React.SetStateAction<string>>, userId: number) => {
  const dispatch = useCustomDispatch();

  const handleKeyPress = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
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
  }, [dispatch, text, setText, userId]);

  const changeInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;
    setText(value);
  }, [setText]);

  return { handleKeyPress, changeInput };
};

export default useTodoInputHandler;
