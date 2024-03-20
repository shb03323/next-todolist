import React, { useEffect, useRef, useState } from "react";
import { ITodoItem } from "@/domain/todo/ITodoItem";
import { editTodo } from "@/domain/todo/todoItemsSlice";
import { useCustomDispatch } from "@/redux/hooks";
import styled from "@emotion/styled";

const StyledTodoEditInput = styled.input`
    width: calc(100% - 43px);
    padding: 12px 16px;
    margin: 0 0 0 43px;
`;

interface Props {
  todo: ITodoItem;
  onEditDone: (updatedText?: string) => void;
}

const TodoEdit = ({ todo, onEditDone }: Props) => {
  const dispatch = useCustomDispatch();
  const [text, setText] = useState(todo.text);

  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    ref.current!.focus();
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      dispatch(editTodo({ ...todo, text: text, }));
      onEditDone();
    } else if (event.key === "Escape") {
      onEditDone();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <StyledTodoEditInput
      ref={ref}
      value={text}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default TodoEdit;
