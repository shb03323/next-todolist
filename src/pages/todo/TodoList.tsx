import styles from "@/pages/todo/styles/TodoPage.module.css";
import React from "react";
import TodoItem from "@/pages/todo/TodoItem";
import { TodoListProps } from "@/pages/todo/props/TodoListProps";

const TodoList: React.FC<TodoListProps> = ({ todoItems }: TodoListProps) => {
  return (
    <ul id="todoList" className={styles.todoList}>
      {todoItems.map(todoItem => (
        <TodoItem key={todoItem.id} todo={todoItem} />
      ))}
    </ul>
  );
};

export default TodoList;
