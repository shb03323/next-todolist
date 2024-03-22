import Head from "next/head";
import React, { useState } from "react";
import UserPage from "@/components/pages/user/UserPage";
import TodoPage from "@/components/pages/todo/TodoPage";
import Users from "@/domain/user/Users";
import TodoItems from "@/domain/todo/TodoItems";
import useLocalStorageLoader from "@/util/useLocalStorageLoader";

export default function Home() {
  type ViewType = "user" | "todo";
  const [viewType, setViewType] = useState<ViewType>("user");
  const [currentUserId, setCurrentUserId] = useState<number>(0);

  const users = new Users();
  const todoItems = new TodoItems();

  const { isLoading, loadUsers, loadTodoItems } = useLocalStorageLoader();

  if (isLoading) return <div>Loading...</div>;

  users.loadData(loadUsers());
  todoItems.loadData(loadTodoItems());

  const toggleToUserView = () => setViewType("user");
  const toggleToTodoView = () => setViewType("todo");

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>이벤트 - TODOS</title>
      </Head>
      {viewType === "user" &&
        <UserPage users={users} onToggle={toggleToTodoView} onSelectUser={setCurrentUserId} />}
      {viewType === "todo" &&
        <TodoPage todoItems={todoItems} userId={currentUserId} onToggle={toggleToUserView} />}
    </>
  );
}
