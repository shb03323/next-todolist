import React, { useEffect, useRef, useState } from "react";
import { ITodoItem } from "@/domain/todo/ITodoItem";
import { editTodo } from "@/domain/todo/todoItemsSlice";
import { useCustomDispatch } from "@/redux/hooks";
import styled from "@emotion/styled";

const StyledInput = styled.input`
    color: #acacac;
    width: calc(100% - 75px);
    padding: 15px 15px 15px 60px;
    font-size: inherit;
    line-height: 1.2;
    border: none;
`;

interface Props {
  todo: ITodoItem;
  onEditDone: () => void;
}

const TodoEditMolecule = ({ todo, onEditDone }: Props) => {
  const dispatch = useCustomDispatch();
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
      dispatch(editTodo({ ...todo, text: text }));
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
      // onBlur={onEditDone}
    />
  );
};

export default TodoEditMolecule;
