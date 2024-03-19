import React, { ReactElement } from "react";
import styles from "@/pages/todo/styles/TodoPage.module.css";
import Head from "next/head";
import TodoInput from "@/pages/todo/TodoInput";
import TodoList from "@/pages/todo/TodoList";
import { RootState } from "@/redux/store";
import TodoFilter from "@/pages/todo/TodoFilter";
import { ITodoItem } from "@/domain/todo/ITodoItem";
import { useCustomSelector } from "@/redux/hooks";
import { useRouter } from "next/router";

const TodoPage = (): ReactElement => {
  const router = useRouter();
  const userId = Number(router.query.userId);

  const todoItems: ITodoItem[] = useCustomSelector((state: RootState) => state.todoItems)
    .filter(todo => todo.userId === userId);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>이벤트 - TODOS</title>
      </Head>
      <a href="/users">유저 목록으로 가기</a>
      <div className={styles.todoapp}>
        <h1>TODOS</h1>
        <TodoInput userId={userId} />
        <main>
          <TodoList todoItems={todoItems} />
          <TodoFilter userId={userId} />
        </main>
      </div>
    </>
  );
};

export default TodoPage;
