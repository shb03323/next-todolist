import { ReactElement, useEffect } from "react";
import styles from "@/pages/users/styles/UserPage.module.css";
import UserInput from "@/pages/users/UserInput";
import UserList from "@/pages/users/UserList";
import { initUsers } from "@/domain/user/usersSlice";
import { useCustomDispatch } from "@/redux/hooks";
import { initTodo } from "@/domain/todo/todoItemsSlice";

const UserPage = (): ReactElement => {
  const dispatch = useCustomDispatch();

  useEffect(() => {
    dispatch(initUsers());
    dispatch(initTodo())
  }, [dispatch]);

  return (
    <div className={styles.userPage}>
      <UserInput />
      <UserList />
    </div>
  );
};

export default UserPage;
