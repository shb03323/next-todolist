import React, { ReactElement, useRef } from "react";
import styles from "@/components/user/styles/UserPage.module.css";
import useUserInputHandler from "@/components/user/events/useUserInputHandler";
import styled from "@emotion/styled";
import { DidisyInput } from "@/components/common/DidisyInput";

const UserInput = (): ReactElement => {
  const addInputRef = useRef<HTMLInputElement>(null);
  const { name, handleKeyDown, handleChangeInput } = useUserInputHandler();

  return (
    <DidisyInput ref={addInputRef}
           placeholder="유저를 추가해주세요"
           onKeyDown={handleKeyDown}
           onChange={handleChangeInput}
           value={name}>
    </DidisyInput>
  );
};

export default UserInput;
