import React from "react";
import styles from "@/pages/todo/styles/TodoPage.module.css";
import { FilterType, TodoItemFilter } from "@/domain/todo/FilterType";
import { ITodoItem } from "@/domain/todo/ITodoItem";
import { useCustomSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { UserIdProps } from "@/pages/todo/props/UserIdProps";

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
    <span className={styles.todoCount}>총 <strong>{filteredTodoItems.length}</strong> 개</span>
  );
};

export default TodoCount;
