import React, { useState } from "react";
import { DidisyInput } from "@/components/common/DidisyInput";
import koreanInputPrevent from "@/util/events/koreanInputPrevent";
import TodoItem from "@/domain/todo/TodoItem";
import TodoItems from "@/domain/todo/TodoItems";
import useUpdateTodos from "@/util/todo/useUpdateTodos";

interface Props {
  todos: TodoItems;
  userId: number;
}

const TodoInputMol = ({ todos, userId }: Props) => {
  const updateTodos = useUpdateTodos(todos);
  const [text, setText] = useState<string>("");

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (koreanInputPrevent(event)) return;
      if (text.trim() !== "") {
        updateTodos((newTodos: TodoItems) => newTodos.add(TodoItem.of(text, userId)));
        setText("");
      }
    }
  };

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <DidisyInput
      placeholder="할일을 추가해주세요"
      onKeyDown={handleKeyPress}
      onChange={changeInput}
      value={text}
    />
  );
};

export default TodoInputMol;
