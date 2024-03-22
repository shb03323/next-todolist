import React from "react";
import { FilterType, TodoItemFilter } from "@/domain/todo/FilterType";
import styled from "@emotion/styled";
import TodoItem from "@/domain/todo/TodoItem";

const StyledSpan = styled.span`
    float: left;
    text-align: left;

    & > strong {
        font-weight: 600;
    }
`;

interface Props {
  todoItemsOfUser: TodoItem[];
  currentFilter: FilterType;
}

const TodoCountMol = ({ todoItemsOfUser, currentFilter }: Props) => {
  const filteredTodoItems = todoItemsOfUser.filter(todo => {
    switch (currentFilter) {
      case TodoItemFilter.ALL:
        return true;
      case TodoItemFilter.ACTIVE:
        return !todo.completed;
      case TodoItemFilter.COMPLETED:
        return todo.completed;
      default:
        return true;
    }
  });

  return (
    <StyledSpan>총 <strong>{filteredTodoItems.length}</strong> 개</StyledSpan>
  );
};

export default TodoCountMol;
