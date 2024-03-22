import { ReactElement } from "react";
import UserTemplate from "@/components/templates/user/UserTemplate";
import Users from "@/domain/user/Users";

interface Props {
  users: Users;
  onToggle: () => void;
  onSelectUser: (userId: number) => void;
}

const UserPage = ({ users, onToggle, onSelectUser }: Props): ReactElement => {
  return (
    <>
      <UserTemplate usersData={users} onToggle={onToggle} onSelectUser={onSelectUser} />
    </>
  );
};

export default UserPage;
