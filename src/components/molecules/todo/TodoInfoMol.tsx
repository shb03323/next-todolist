import React, { ReactElement, useState } from "react";
import { TodoCheckbox } from "@/components/atoms/todo/TodoCheckbox";
import { TodoLabel } from "@/components/atoms/todo/TodoLabel";
import { TodoDestroyButton } from "@/components/atoms/todo/TodoDestroyButton";
import TodoItem from "@/domain/todo/TodoItem";
import TodoItems from "@/domain/todo/TodoItems";
import styled from "@emotion/styled";
import useUpdateTodos from "@/util/todo/useUpdateTodos";

const Container = styled.div`
    &:hover > button {
        display: block;
    }
`;

interface Props {
  todo: TodoItem;
  todos: TodoItems;
}

const TodoInfoMol = ({ todo, todos }: Props): ReactElement => {
  const updateTodos = useUpdateTodos(todos);
  const [checked, setChecked] = useState<boolean>(todo.completed);

  const handleToggle = () => {
    updateTodos((newTodos: TodoItems) => newTodos.toggleCompleted(todo));
    setChecked(!checked);
  };

  const handleDelete = () => {
    updateTodos((newTodos: TodoItems) => newTodos.remove(todo));
  };

  return (
    <Container>
      <TodoCheckbox type="checkbox" checked={checked} onChange={handleToggle} />
      <TodoLabel checked={todo.completed}>{todo.text}</TodoLabel>
      <TodoDestroyButton onClick={handleDelete}></TodoDestroyButton>
    </Container>
  );
};

export default TodoInfoMol;
