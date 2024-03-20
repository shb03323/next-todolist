import React from "react";
import styles from "@/components/todo/styles/TodoPage.module.css";
import { FilterType, TodoItemFilter } from "@/domain/todo/FilterType";
import { ITodoItem } from "@/domain/todo/ITodoItem";
import { useCustomSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { UserIdProps } from "@/components/todo/props/UserIdProps";
import styled from "@emotion/styled";

const StyledTodoCount = styled.span`
    float: left;
    text-align: left;
    .strong {
        font-weight: 300;
    }
`;

const TodoCount: React.FC<UserIdProps> = ({ userId }: UserIdProps) => {
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
    <StyledTodoCount>총 <strong>{filteredTodoItems.length}</strong> 개</StyledTodoCount>
  );
};

export default TodoCount;
