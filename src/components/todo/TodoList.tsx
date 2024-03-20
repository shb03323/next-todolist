import styles from "@/components/todo/styles/TodoPage.module.css";
import React from "react";
import TodoItem from "@/components/todo/TodoItem";
import { TodoListProps } from "@/components/todo/props/TodoListProps";

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
