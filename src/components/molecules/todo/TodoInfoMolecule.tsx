import React, { ReactElement } from "react";
import { TodoCheckbox } from "@/components/atoms/todo/TodoCheckbox";
import { TodoLabel } from "@/components/atoms/todo/TodoLabel";
import { DestroyButton } from "@/components/atoms/todo/DestroyButton";
import { ITodoItem } from "@/domain/todo/ITodoItem";
import { deleteTodo, toggleTodo } from "@/domain/todo/todoItemsSlice";
import { useCustomDispatch } from "@/redux/hooks";

interface Props {
  todo: ITodoItem;
}

const TodoInfoMolecule = ({ todo }: Props): ReactElement => {
  const dispatch = useCustomDispatch();

  const handleToggle = () => dispatch(toggleTodo(todo.id));
  const handleDelete = () => dispatch(deleteTodo(todo.id));

  return (
    <div>
      <TodoCheckbox type="checkbox" checked={todo.completed} onChange={handleToggle} />
      <TodoLabel checked={todo.completed}>{todo.text}</TodoLabel>
      <DestroyButton onClick={handleDelete}></DestroyButton>
    </div>
  );
};

export default TodoInfoMolecule;
