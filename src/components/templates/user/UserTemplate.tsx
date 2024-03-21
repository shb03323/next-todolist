import { ReactElement } from "react";
import { DidisyMainContainer } from "@/components/common/DidisyMainContainer";
import UserInputMolecule from "@/components/molecules/user/UserInputMolecule";
import UserOrganism from "@/components/organisms/user/UserOrganism";

const UserTemplate = (): ReactElement => {
  return (
    <DidisyMainContainer>
      <UserInputMolecule />
      <UserOrganism />
    </DidisyMainContainer>
  );
};

export default UserTemplate;
