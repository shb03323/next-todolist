import React, { ReactElement } from "react";
import { DidisyLabel } from "@/components/common/DidisyLabel";
import { DidisyLi } from "@/components/common/DidisyLi";
import { DidisyUl } from "@/components/common/DidisyUl";
import Users from "@/domain/user/Users";

interface Props {
  users: Users;
  onToggle: () => void;
  onSelectUser: (userId: number) => void;
}

const UserListOrg = ({ users, onToggle, onSelectUser }: Props): ReactElement => {
  const handleDoubleClick = (userId: number) => {
    onSelectUser(userId);
    onToggle();
  };

  return (
    <DidisyUl>
      {users.getAll().map(user => (
        <DidisyLi key={user.id} onDoubleClick={() => handleDoubleClick(user.id)}>
          <DidisyLabel>{user.name}</DidisyLabel>
        </DidisyLi>
      ))}
    </DidisyUl>
  );
};

export default UserListOrg;
