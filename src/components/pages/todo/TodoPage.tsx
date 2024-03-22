import React, { ReactElement } from "react";
import TodoListTemplate from "@/components/templates/todo/TodoListTemplate";
import TodoItems from "@/domain/todo/TodoItems";

interface Props {
  todoItems: TodoItems;
  userId: number;
  onToggle: () => void;
}

const TodoPage = ({ todoItems, userId, onToggle }: Props): ReactElement => {
  return (
    <>
      <a onClick={onToggle}>user 페이지로 가기</a>
      <TodoListTemplate todoItems={todoItems} userId={userId} />
    </>
  );
};

export default TodoPage;
