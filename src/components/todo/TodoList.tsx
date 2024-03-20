import React from "react";
import TodoItem from "@/components/todo/TodoItem";
import styled from "@emotion/styled";
import { ITodoItem } from "@/domain/todo/ITodoItem";

const StyledTodoList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

interface Props {
  todoItems: ITodoItem[];
}

const TodoList = ({ todoItems }: Props) => {
  return (
    <StyledTodoList>
      {todoItems.map(todoItem => (
        <TodoItem key={todoItem.id} todo={todoItem} />
      ))}
    </StyledTodoList>
  );
};

export default TodoList;
