import React, { ReactElement, useState } from "react";
import { DidisyInput } from "@/components/common/DidisyInput";
import { useCustomDispatch } from "@/redux/hooks";
import koreanInputPrevent from "@/util/events/koreanInputPrevent";
import { addUser } from "@/domain/user/usersSlice";

const UserInputMolecule = (): ReactElement => {
  const dispatch = useCustomDispatch();
  const [text, setText] = useState<string>("");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (koreanInputPrevent(event)) return;
      if (text.trim() !== "") {
        dispatch(addUser({ id: Date.now(), name: text }));
        setText("");
      }
    }
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;
    setText(value);
  };

  return (
    <DidisyInput
      placeholder="유저를 추가해주세요"
      onKeyDown={handleKeyDown}
      onChange={handleChangeInput}
      value={text}>
    </DidisyInput>
  );
};

export default UserInputMolecule;
