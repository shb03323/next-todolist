import React, { useState } from "react";
import TodoEditMol from "@/components/molecules/todo/TodoEditMol";
import { FilterType, TodoItemFilter } from "@/domain/todo/FilterType";
import styled from "@emotion/styled";
import { DidisyLi } from "@/components/common/DidisyLi";
import TodoInfoMol from "@/components/molecules/todo/TodoInfoMol";
import TodoItems from "@/domain/todo/TodoItems";
import TodoItem from "@/domain/todo/TodoItem";

interface StyledProps {
  filter: FilterType;
  completed: boolean;
  isEditing: boolean;
}

const StyledLi = styled(DidisyLi)<StyledProps>`
    &:hover > button {
        display: block;
    }

    ${(props) => {
        switch (props.filter) {
            case TodoItemFilter.ALL:
                return "display: block;";
            case TodoItemFilter.ACTIVE:
                return props.completed ? "display: none;" : "display: block;";
            case TodoItemFilter.COMPLETED:
                return props.completed ? "display: block;" : "display: none;";
            default:
                return "display: block;";
        }
    }}

    ${(props) => props.isEditing && `
    border-bottom: none;
    padding: 0;
  `}
`;

interface Props {
  todo: TodoItem;
  todos: TodoItems;
  currentFilter: FilterType;
}

const TodoItemInfo = ({ todo, todos, currentFilter }: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleDoubleClick = () => setIsEditing(true);
  const handleEditDone = () => setIsEditing(false);

  return (
    <StyledLi
      filter={currentFilter}
      completed={todo.completed}
      isEditing={isEditing}
      onDoubleClick={handleDoubleClick}
    >
      {!isEditing && <TodoInfoMol todo={todo} todos={todos} />}
      {isEditing && <TodoEditMol todo={todo} todos={todos} onEditDone={handleEditDone} />}
    </StyledLi>
  );
};

export default TodoItemInfo;
