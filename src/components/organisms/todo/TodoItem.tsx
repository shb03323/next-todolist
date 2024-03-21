import React, { useState } from "react";
import { useCustomSelector } from "@/redux/hooks";
import TodoEditMolecule from "@/components/molecules/todo/TodoEditMolecule";
import { FilterType, TodoItemFilter } from "@/domain/todo/FilterType";
import styled from "@emotion/styled";
import { DidisyLi } from "@/components/common/DidisyLi";
import TodoInfoMolecule from "@/components/molecules/todo/TodoInfoMolecule";
import { ITodoItem } from "@/domain/todo/ITodoItem";

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
  todo: ITodoItem;
}

const TodoItem = ({ todo }: Props) => {
  const currentFilter = useCustomSelector(state => state.filter);
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
      {!isEditing && <TodoInfoMolecule todo={todo} />}
      {isEditing && <TodoEditMolecule todo={todo} onEditDone={handleEditDone} />}
    </StyledLi>
  );
};

export default TodoItem;
