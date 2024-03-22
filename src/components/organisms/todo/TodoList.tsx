import TodoItemInfo from "@/components/organisms/todo/TodoItemInfo";
import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import TodoItems from "@/domain/todo/TodoItems";
import { FilterType } from "@/domain/todo/FilterType";

const ListWrapper = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

interface Props {
  todos: TodoItems;
  currentFilter: FilterType;
  userId: number;
}

const TodoList = ({ todos, currentFilter, userId }: Props): ReactElement => {
  return (
    <ListWrapper>
      {todos.getTodoItemsOf(userId).map(todoItem => (
        <TodoItemInfo key={todoItem.id} todo={todoItem} todos={todos} currentFilter={currentFilter} />
      ))}
    </ListWrapper>
  );
};

export default TodoList;
