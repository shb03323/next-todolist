import { ITodoItem } from "@/domain/todo/ITodoItem";
import { useCustomDispatch, useCustomSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import React, { ReactElement, useRef } from "react";
import styles from "@/pages/todo/styles/TodoPage.module.css";
import { setFilter } from "@/domain/todo/filterSlice";
import { FilterType, TodoItemFilter } from "@/domain/todo/FilterType";
import { UserIdProps } from "@/pages/todo/props/UserIdProps";

const TodoFilter: React.FC<UserIdProps> = ({ userId }: UserIdProps) => {
  const todoItems: ITodoItem[] = useCustomSelector((state: RootState) => state.todoItems)
    .filter(todo => todo.userId === userId);
  const currentFilter: FilterType = useCustomSelector((state: RootState) => state.filter);
  const dispatch = useCustomDispatch();

  const allTagRef = useRef<HTMLAnchorElement>(null);
  const activeTagRef = useRef<HTMLAnchorElement>(null);
  const completedTagRef = useRef<HTMLAnchorElement>(null);

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

  const handleFilterChange = (filter: FilterType) => {
    dispatch(setFilter(filter));
    allTagRef.current!.classList.remove(styles.selected);
    activeTagRef.current!.classList.remove(styles.selected);
    completedTagRef.current!.classList.remove(styles.selected);
    switch (filter) {
      case "all":
        allTagRef.current!.classList.add(styles.selected);
        break;
      case "active":
        activeTagRef.current!.classList.add(styles.selected);
        break;
      case "completed":
        completedTagRef.current!.classList.add(styles.selected);
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.countContainer}>
      <span className={styles.todoCount}>총 <strong>{filteredTodoItems.length}</strong> 개</span>
      <ul className={styles.filters}>
        <li>
          <a ref={allTagRef}
             className={`${styles.all} ${styles.selected}`}
             onClick={() => handleFilterChange(TodoItemFilter.ALL)}
             href="#">
            전체보기
          </a>
        </li>
        <li>
          <a ref={activeTagRef}
             className={styles.active}
             onClick={() => handleFilterChange(TodoItemFilter.ACTIVE)}
             href="#active">
            해야할 일
          </a>
        </li>
        <li>
          <a ref={completedTagRef}
             className={styles.completed}
             onClick={() => handleFilterChange(TodoItemFilter.COMPLETED)}
             href="#completed">
            완료한 일
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TodoFilter;
