import TodoItem from "@/components/organisms/todo/TodoItem";
import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import { ITodoItem } from "@/domain/todo/ITodoItem";
import { useCustomSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { UserIdProps } from "@/components/common/props/UserIdProps";

const ListWrapper = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

const TodoList = ({ userId }: UserIdProps): ReactElement => {
  const todoItems: ITodoItem[] = useCustomSelector((state: RootState) => state.todoItems)
    .filter(todo => todo.userId === userId);

  return (
    <ListWrapper>
      {todoItems.map(todoItem => (
        <TodoItem key={todoItem.id} todo={todoItem} />
      ))}
    </ListWrapper>
  );
};

export default TodoList;
