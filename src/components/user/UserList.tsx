import React, { ReactElement } from "react";
import styles from "@/components/user/styles/UserPage.module.css";
import { useCustomSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { IUser } from "@/domain/user/IUser";
import useUserLiDoubleClickHandler from "@/components/user/events/useUserLiDoubleClickHandler";

const UserList = (): ReactElement => {
  const users: IUser[] = useCustomSelector((state: RootState) => state.users);
  const { handleDoubleClick } = useUserLiDoubleClickHandler();

  return (
    <ul className={styles.userList}>
      {users.map(user => (
        <li key={user.id} onDoubleClick={() => handleDoubleClick(user.id)}>
          <label className="label">{user.name}</label>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
