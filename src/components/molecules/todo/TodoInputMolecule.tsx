import React, { useState } from "react";
import { UserIdProps } from "@/components/common/props/UserIdProps";
import { DidisyInput } from "@/components/common/DidisyInput";
import { useCustomDispatch } from "@/redux/hooks";
import koreanInputPrevent from "@/util/events/koreanInputPrevent";
import { addTodo } from "@/domain/todo/todoItemsSlice";

const TodoInputMolecule = ({ userId }: UserIdProps) => {
  const dispatch = useCustomDispatch();
  const [text, setText] = useState<string>("");

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (koreanInputPrevent(event)) return;
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
    setText(event.target.value);
  };

  return (
    <DidisyInput
      placeholder="할일을 추가해주세요"
      onKeyDown={handleKeyPress}
      onChange={changeInput}
      value={text}
    />
  );
};

export default TodoInputMolecule;
