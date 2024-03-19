import React, { ReactElement } from "react";
import styles from "@/pages/user/styles/UserPage.module.css";
import { useCustomSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { IUser } from "@/domain/user/IUser";
import { useRouter } from "next/router";

const UserList = (): ReactElement => {
  const router = useRouter();
  const users: IUser[] = useCustomSelector((state: RootState) => state.users);

  const handleDoubleClick = (userId: number) => {
    router.push(`/todo?userId=${userId}`)
  }

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
