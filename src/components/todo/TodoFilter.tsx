import React, { useRef } from "react";
import styles from "@/components/todo/styles/TodoPage.module.css";
import { TodoItemFilter } from "@/domain/todo/FilterType";
import { UserIdProps } from "@/components/todo/props/UserIdProps";
import useTodoFilterHandler from "@/components/todo/events/useTodoFilterHandler";
import TodoCount from "@/components/todo/TodoCount";

const TodoFilter: React.FC<UserIdProps> = ({ userId }: UserIdProps) => {
  const allTagRef = useRef<HTMLAnchorElement>(null);
  const activeTagRef = useRef<HTMLAnchorElement>(null);
  const completedTagRef = useRef<HTMLAnchorElement>(null);

  const { handleFilterChange } = useTodoFilterHandler(allTagRef, activeTagRef, completedTagRef);

  return (
    <div className={styles.countContainer}>
      <TodoCount userId={userId} />
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
