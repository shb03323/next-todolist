import { ReactElement, useEffect } from "react";
import styles from "@/components/user/styles/UserPage.module.css";
import UserInput from "@/components/user/UserInput";
import UserList from "@/components/user/UserList";
import { initUsers } from "@/domain/user/usersSlice";
import { useCustomDispatch } from "@/redux/hooks";
import { initTodo } from "@/domain/todo/todoItemsSlice";
import { DidisyTemplate } from "@/components/common/DidisyTemplate";

const UserPage = (): ReactElement => {
  const dispatch = useCustomDispatch();

  useEffect(() => {
    dispatch(initUsers());
    dispatch(initTodo())
  }, [dispatch]);

  return (
    <DidisyTemplate>
      <UserInput />
      <UserList />
    </DidisyTemplate>
  );
};

export default UserPage;
