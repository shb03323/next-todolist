import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import TodoItem from "@/domain/todo/TodoItem";
import TodoItems from "@/domain/todo/TodoItems";
import useUpdateTodos from "@/util/todo/useUpdateTodos";

const StyledInput = styled.input`
    color: #acacac;
    width: calc(100% - 75px);
    padding: 15px 15px 15px 60px;
    font-size: inherit;
    line-height: 1.2;
    border: none;
`;

interface Props {
  todo: TodoItem;
  todos: TodoItems;
  onEditDone: () => void;
}

const TodoEditMol = ({ todo, todos, onEditDone }: Props) => {
  const updateTodos = useUpdateTodos(todos);
  const [text, setText] = useState(todo.text);

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current!.focus();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      updateTodos((newTodos: TodoItems) => newTodos.changeText(todo, text));
      onEditDone();
    } else if (event.key === "Escape") {
      onEditDone();
    }
  };

  return (
    <StyledInput
      ref={ref}
      value={text}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onBlur={onEditDone}
    />
  );
};

export default TodoEditMol;
