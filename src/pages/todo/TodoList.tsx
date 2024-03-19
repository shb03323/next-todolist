import styles from "@/styles/TodoPage.module.css";
import { ReactElement, useEffect } from "react";
import TodoItem from "@/pages/todo/TodoItem";
import { TodoRootState } from "@/domain/todo/store";
import { useCustomDispatch, useCustomSelector } from "@/domain/todo/hooks";
import { ITodoItem } from "@/domain/todo/ITodoItem";
import { loadLocalStorage } from "@/domain/todo/localStorageManager";
import { addTodo } from "@/domain/todo/todoItemsSlice";

const TodoList = (): ReactElement => {
//   useEffect(() => {
//     const storedTodoItems: ITodoItem[] = loadLocalStorage();
//     const dispatch = useCustomDispatch();
//     for (const todoItem of storedTodoItems) {
//       dispatch(addTodo({
//         id: todoItem.id,
//         text: todoItem.text,
//         completed: todoItem.completed,
//       }));
//     }
//   }, []);

  const todoItems: ITodoItem[] = useCustomSelector((state: TodoRootState) => state.todoItems);
  return (
    <ul id="todoList" className={styles.todoList}>
      {todoItems.map(todoItem => (
        <TodoItem key={todoItem.id} todo={todoItem} />
      ))}
    </ul>
  );
};

export default TodoList;
