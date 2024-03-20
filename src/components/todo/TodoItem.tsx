import styles from "@/components/todo/styles/TodoPage.module.css";
import React, { useEffect, useRef } from "react";
import { useCustomSelector } from "@/redux/hooks";
import { TodoItemProps } from "@/components/todo/props/TodoItemProps";
import TodoEdit from "@/components/todo/TodoEdit";
import { FilterType, TodoItemFilter } from "@/domain/todo/FilterType";
import useTodoItemHandler from "@/components/todo/events/useTodoItemHandler";

const TodoItem: React.FC<TodoItemProps> = ({ todo }: TodoItemProps) => {
  const currentFilter = useCustomSelector(state => state.filter);

  const liRef = useRef<HTMLLIElement>(null);
  const editInputRef = useRef<HTMLInputElement>(null);

  const { handleDoubleClick, handleToggle, handleDelete } = useTodoItemHandler(todo, liRef, editInputRef);

  useEffect(() => {
    filterTodo(currentFilter);
  }, [currentFilter, todo.completed]);

  const filterTodo = (currentFilter: FilterType) => {
    if (liRef.current) {
      switch (currentFilter) {
        case TodoItemFilter.ALL:
          liRef.current.style.display = "block";
          break;
        case TodoItemFilter.ACTIVE:
          if (todo.completed) {
            liRef.current.style.display = "none";
          } else {
            liRef.current.style.display = "block";
          }
          break;
        case TodoItemFilter.COMPLETED:
          if (todo.completed) {
            liRef.current.style.display = "block";
          } else {
            liRef.current.style.display = "none";
          }
      }
    }
  };

  return (
    <li ref={liRef} className={todo.completed ? styles.completed : styles.active} onDoubleClick={handleDoubleClick}>
      <div className={styles.view}>
        <input className={styles.toggle} type="checkbox" checked={todo.completed} onChange={handleToggle} />
        <label className="label">{todo.text}</label>
        <button className={styles.destroy} onClick={handleDelete}></button>
      </div>
      <TodoEdit todo={todo} editInputRef={editInputRef} todoLiRef={liRef} />
    </li>
  );
};

export default TodoItem;
