import React, { ReactElement } from "react";
import { UserIdProps } from "@/components/common/props/UserIdProps";
import styled from "@emotion/styled";
import StyledH1 from "@/components/atoms/todo/StyledH1";
import TodoOrganism from "@/components/organisms/todo/TodoOrganism";

const Container = styled.div`
    background: #fff;
    margin: 130px 0 40px 0;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
    0 25px 50px 0 rgba(0, 0, 0, 0.1);
`;

const TodoListTemplate = ({ userId }: UserIdProps): ReactElement => {
  return (
    <Container>
      <StyledH1>TODOS</StyledH1>
      <TodoOrganism userId={userId} />
    </Container>
  );
};

export default TodoListTemplate;
