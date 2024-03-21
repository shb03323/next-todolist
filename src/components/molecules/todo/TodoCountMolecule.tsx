import React from "react";
import { FilterType, TodoItemFilter } from "@/domain/todo/FilterType";
import { ITodoItem } from "@/domain/todo/ITodoItem";
import { useCustomSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { UserIdProps } from "@/components/common/props/UserIdProps";
import styled from "@emotion/styled";

const StyledSpan = styled.span`
    float: left;
    text-align: left;

    & > strong {
        font-weight: 600;
    }
`;

const TodoCountMolecule = ({ userId }: UserIdProps) => {
  const todoItems: ITodoItem[] = useCustomSelector((state: RootState) => state.todoItems)
    .filter(todo => todo.userId === userId);
  const currentFilter: FilterType = useCustomSelector((state: RootState) => state.filter);

  const filteredTodoItems = todoItems.filter(todo => {
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

export default TodoCountMolecule;
