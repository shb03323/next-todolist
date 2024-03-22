import React, { ReactElement, useState } from "react";
import { DidisyInput } from "@/components/common/DidisyInput";
import koreanInputPrevent from "@/util/events/koreanInputPrevent";
import Users from "@/domain/user/Users";
import useUpdateUsers from "@/util/user/useUpdateUsers";

interface Props {
  users: Users;
}

const UserInputMolecule = ({ users }: Props): ReactElement => {
  const updateUsers = useUpdateUsers(users);
  const [text, setText] = useState<string>("");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (koreanInputPrevent(event)) return;
      if (text.trim() !== "") {
        updateUsers((newUsers: Users) => newUsers.add({ id: Date.now(), name: text }));
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
