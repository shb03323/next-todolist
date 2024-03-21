import React, { ReactElement } from "react";
import TodoInputMolecule from "@/components/molecules/todo/TodoInputMolecule";
import TodoList from "@/components/organisms/todo/TodoList";
import TodoFilter from "@/components/organisms/todo/TodoFilter";
import { UserIdProps } from "@/components/common/props/UserIdProps";

const TodoOrganism = ({ userId }: UserIdProps): ReactElement => {
  return (
    <main>
      <TodoInputMolecule userId={userId} />
      <TodoList userId={userId} />
      <TodoFilter userId={userId} />
    </main>
  );
};

export default TodoOrganism;
