import React, { useState } from "react";
import { useCustomSelector } from "@/redux/hooks";
import { TodoItemProps } from "@/components/todo/props/TodoItemProps";
import TodoEdit from "@/components/todo/TodoEdit";
import { FilterType, TodoItemFilter } from "@/domain/todo/FilterType";
import styled from "@emotion/styled";
import { DidisyLiTag } from "@/components/common/DidisyLiTag";
import TodoInfoMolecule from "@/components/todo/TodoInfoMolecule";

interface Props {
  filter: FilterType;
  completed: boolean;
  isEditing: boolean;
}

const TodoLiTag = styled(DidisyLiTag)<Props>`
    &:hover {
        .destroyButton {
            display: block;
        }
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

const TodoItem: React.FC<TodoItemProps> = ({ todo }: TodoItemProps) => {
  const currentFilter = useCustomSelector(state => state.filter);
  const [isEditing, setIsEditing] = useState(false);

  const handleDoubleClick = () => setIsEditing(true);
  const handleEditDone = () => setIsEditing(false);

  return (
    <TodoLiTag
      filter={currentFilter}
      completed={todo.completed}
      isEditing={isEditing}
      onDoubleClick={handleDoubleClick}>
      {!isEditing && <TodoInfoMolecule todo={todo} />}
      {isEditing && <TodoEdit todo={todo} onEditDone={handleEditDone} />}
    </TodoLiTag>
  );
};

export default TodoItem;
