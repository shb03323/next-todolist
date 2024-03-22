import React, { ReactElement, useState } from "react";
import styled from "@emotion/styled";
import StyledH1 from "@/components/atoms/todo/StyledH1";
import TodoListOrg from "@/components/organisms/todo/TodoListOrg";
import TodoItems from "@/domain/todo/TodoItems";
import { useCustomDispatch, useCustomSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { updateTodoItems } from "@/redux/todoItemsSlice";

const Container = styled.div`
    background: #fff;
    margin: 130px 0 40px 0;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
    0 25px 50px 0 rgba(0, 0, 0, 0.1);
`;

interface Props {
  todoItems: TodoItems;
  userId: number;
}

const TodoListTemplate = ({ todoItems, userId }: Props): ReactElement => {
  const dispatch = useCustomDispatch();
  const todos: TodoItems = useCustomSelector((state: RootState) => state.todoItems);
  const [stateUpdated, setStateUpdated] = useState<boolean>(false);
  if (!stateUpdated) {
    dispatch(updateTodoItems(todoItems));
    setStateUpdated(true);
  }

  return (
    <Container>
      <StyledH1>TODOS</StyledH1>
      <TodoListOrg todos={todos} userId={userId} />
    </Container>
  );
};

export default TodoListTemplate;
