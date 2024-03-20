import React, { ReactElement } from "react";
import styles from "@/components/user/styles/UserPage.module.css";
import { useCustomSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { IUser } from "@/domain/user/IUser";
import useUserLiDoubleClickHandler from "@/components/user/events/useUserLiDoubleClickHandler";
import styled from "@emotion/styled";
import { DidisyLabel } from "@/components/common/DidisyLabel";
import { DidisyLiTag } from "@/components/common/DidisyLiTag";
import { DidisyUlTag } from "@/components/common/DidisyUlTag";

const UserList = (): ReactElement => {
  const users: IUser[] = useCustomSelector((state: RootState) => state.users);
  const { handleDoubleClick } = useUserLiDoubleClickHandler();

  return (
    <DidisyUlTag>
      {users.map(user => (
        <DidisyLiTag key={user.id} onDoubleClick={() => handleDoubleClick(user.id)}>
          <DidisyLabel>{user.name}</DidisyLabel>
        </DidisyLiTag>
      ))}
    </DidisyUlTag>
  );
};

export default UserList;
