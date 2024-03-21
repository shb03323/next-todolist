import React, { ReactElement } from "react";
import { UserIdProps } from "@/components/common/props/UserIdProps";
import TodoListTemplate from "@/components/templates/todo/TodoListTemplate";

const TodoPage = ({ userId }: UserIdProps): ReactElement => {
  return <TodoListTemplate userId={userId} />;
};

export default TodoPage;
