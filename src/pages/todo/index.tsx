import React, { ReactElement } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import TodoPage from "@/components/pages/todo/TodoPage";

const Todo = (): ReactElement => {
  const router = useRouter();
  const userId = Number(router.query.userId);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>이벤트 - TODOS</title>
      </Head>
      <a href="/users">유저 목록으로 가기</a>
      <TodoPage userId={userId} />
    </>
  );
};

export default Todo;
