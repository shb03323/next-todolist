import React, { useCallback, useState } from "react";
import { useCustomDispatch } from "@/redux/hooks";
import { addUser } from "@/domain/user/usersSlice";
import koreanInputPrevent from "@/util/events/koreanInputPrevent";

const useUserInputHandler = () => {
  const [text, setText] = useState<string>("");
  const dispatch = useCustomDispatch();

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (koreanInputPrevent(event)) return;
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

  return { name: text, handleKeyDown, handleChangeInput };
};

export default useUserInputHandler;
