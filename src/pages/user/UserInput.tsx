import React, { ReactElement, useRef, useState } from "react";
import styles from "@/pages/user/styles/UserPage.module.css";
import { useCustomDispatch } from "@/redux/hooks";
import { addUser } from "@/domain/user/usersSlice";

const UserInput = (): ReactElement => {
  const addInputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState<string>("");
  const dispatch = useCustomDispatch();

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && addInputRef.current) {
      if (name.trim() !== "") {
        dispatch(addUser({
          id: Date.now(),
          name: name,
        }));
        setName("");
      }
    }
  };

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;
    setName(value);
  };

  return (
    <input ref={addInputRef}
           className={styles.newUser}
           placeholder="유저를 추가해주세요"
           onKeyDown={handleKeyPress}
           onChange={changeInput}
           value={name}>
    </input>
  );
}

export default UserInput;
