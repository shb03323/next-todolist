import React, { useCallback, useState } from "react";
import { useCustomDispatch } from "@/redux/hooks";
import { addUser } from "@/domain/user/usersSlice";

const useUserInputHandler = () => {
  const [text, setText] = useState<string>("");
  const dispatch = useCustomDispatch();

  const handleKeyPress = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (text.trim() !== "") {
        dispatch(addUser({
          id: Date.now(),
          name: text,
        }));
        setText("");
      }
    }
  }, [dispatch, text]);

  const handleChangeInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;
    setText(value);
  }, []);

  return { name: text, handleKeyPress, handleChangeInput };
};

export default useUserInputHandler;
