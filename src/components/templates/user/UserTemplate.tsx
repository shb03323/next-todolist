import { ReactElement, useState } from "react";
import { DidisyMainContainer } from "@/components/common/DidisyMainContainer";
import UserInputMolecule from "@/components/molecules/user/UserInputMolecule";
import UserListOrg from "@/components/organisms/user/UserListOrg";
import Users from "@/domain/user/Users";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useCustomDispatch } from "@/redux/hooks";
import { updateUsers } from "@/redux/usersSlice";

interface Props {
  usersData: Users;
  onToggle: () => void;
  onSelectUser: (userId: number) => void;
}

const UserTemplate = ({ usersData, onToggle, onSelectUser }: Props): ReactElement => {
  const dispatch = useCustomDispatch();
  const users = useSelector((state: RootState) => state.users);
  const [stateUpdated, setStateUpdated] = useState<boolean>(false);
  if (!stateUpdated) {
    dispatch(updateUsers(usersData));
    setStateUpdated(true);
  }

  return (
    <DidisyMainContainer>
      <UserInputMolecule users={users} />
      <UserListOrg users={users} onToggle={onToggle} onSelectUser={onSelectUser} />
    </DidisyMainContainer>
  );
};

export default UserTemplate;
