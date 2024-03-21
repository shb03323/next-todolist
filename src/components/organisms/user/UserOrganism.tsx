import React, { ReactElement } from "react";
import { useCustomSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { IUser } from "@/domain/user/IUser";
import { DidisyLabel } from "@/components/common/DidisyLabel";
import { DidisyLi } from "@/components/common/DidisyLi";
import { DidisyUl } from "@/components/common/DidisyUl";
import { useRouter } from "next/router";

const UserOrganism = (): ReactElement => {
  const router = useRouter();
  const users: IUser[] = useCustomSelector((state: RootState) => state.users);

  const handleDoubleClick = (userId: number) => {
    router.push(`/todo?userId=${userId}`);
  };

  return (
    <DidisyUl>
      {users.map(user => (
        <DidisyLi key={user.id} onDoubleClick={() => handleDoubleClick(user.id)}>
          <DidisyLabel>{user.name}</DidisyLabel>
        </DidisyLi>
      ))}
    </DidisyUl>
  );
};

export default UserOrganism;
