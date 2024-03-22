import React, { ReactElement, useState } from "react";
import TodoInputMol from "@/components/molecules/todo/TodoInputMol";
import TodoList from "@/components/organisms/todo/TodoList";
import TodoFilter from "@/components/organisms/todo/TodoFilter";
import TodoItems from "@/domain/todo/TodoItems";
import { FilterType, TodoItemFilter } from "@/domain/todo/FilterType";

interface Props {
  todos: TodoItems;
  userId: number;
}

const TodoListOrg = ({ todos, userId }: Props): ReactElement => {
  const [currentFilter, setCurrentFilter] = useState<FilterType>(TodoItemFilter.ALL);

  return (
    <main>
      <TodoInputMol todos={todos} userId={userId} />
      <TodoList todos={todos} currentFilter={currentFilter} userId={userId} />
      <TodoFilter todoItemsOfUser={todos.getTodoItemsOf(userId)} currentFilter={currentFilter} setFilter={setCurrentFilter} />
    </main>
  );
};

export default TodoListOrg;
