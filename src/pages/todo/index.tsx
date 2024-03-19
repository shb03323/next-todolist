import { ReactElement, useRef } from "react";
import styles from "../../styles/TodoPage.module.css";
import Head from "next/head";
import TodoInput from "@/pages/todo/TodoInput";
import TodoList from "@/pages/todo/TodoList";
import { Provider } from "react-redux";
import store from "@/domain/todo/store";
import TodoFilter from "@/pages/todo/TodoFilter";

const TodoPage = (): ReactElement => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>이벤트 - TODOS</title>
      </Head>
      <div className={styles.todoapp}>
        <h1>TODOS</h1>
        <Provider store={store}>
          <TodoInput />
          <main>
            <input className={styles.toggleAll} type="checkbox" />
            <TodoList />
            <TodoFilter />
          </main>
        </Provider>
      </div>
    </>
  );
};

export default TodoPage;
