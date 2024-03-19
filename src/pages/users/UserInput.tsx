import React, { ReactElement, useRef } from "react";
import styles from "@/pages/users/styles/UserPage.module.css";
import useUserInputHandler from "@/pages/users/events/useUserInputHandler";

const UserInput = (): ReactElement => {
  const addInputRef = useRef<HTMLInputElement>(null);
  const { name, handleKeyDown, handleChangeInput } = useUserInputHandler();

  return (
    <input ref={addInputRef}
           className={styles.newUser}
           placeholder="유저를 추가해주세요"
           onKeyDown={handleKeyDown}
           onChange={handleChangeInput}
           value={name}>
    </input>
  );
};

export default UserInput;
