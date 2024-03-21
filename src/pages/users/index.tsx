import React, { ReactElement, useEffect } from "react";
import { initUsers } from "@/domain/user/usersSlice";
import { useCustomDispatch } from "@/redux/hooks";
import { initTodo } from "@/domain/todo/todoItemsSlice";
import Head from "next/head";
import UserPage from "@/components/pages/user/UserPage";

const User = (): ReactElement => {
  const dispatch = useCustomDispatch();

  useEffect(() => {
    dispatch(initUsers());
    dispatch(initTodo());
  }, [dispatch]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>박정훈 화이팅!</title>
      </Head>
      <UserPage />
    </>
  );
};

export default User;
