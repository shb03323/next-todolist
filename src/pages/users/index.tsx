import { ReactElement, useEffect } from "react";
import styles from "@/components/user/styles/UserPage.module.css";
import UserInput from "@/components/user/UserInput";
import UserList from "@/components/user/UserList";
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
