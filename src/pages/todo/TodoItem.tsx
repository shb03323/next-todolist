import styles from "@/pages/todo/styles/TodoPage.module.css";
import { deleteTodo, toggleTodo } from "@/domain/todo/todoItemsSlice";
import React, { useEffect, useRef } from "react";
import { useCustomDispatch, useCustomSelector } from "@/redux/hooks";
import { TodoItemProps } from "@/pages/todo/props/TodoItemProps";
import TodoEdit from "@/pages/todo/TodoEdit";
import { FilterType, TodoItemFilter } from "@/domain/todo/FilterType";

const TodoItem: React.FC<TodoItemProps> = ({ todo }: TodoItemProps) => {
  const currentFilter = useCustomSelector(state => state.filter);
  const dispatch = useCustomDispatch();

  const liRef = useRef<HTMLLIElement>(null);
  const editInputRef = useRef<HTMLInputElement>(null);

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

  const handleDoubleClick = () => {
    if (liRef.current) {
      liRef.current.classList.add(styles.editing);
    }
    if (editInputRef.current) {
      editInputRef.current.value = todo.text;
      editInputRef.current.focus();
    }
  };

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
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
