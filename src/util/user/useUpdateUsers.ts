import Users from "@/domain/user/Users";
import { useCustomDispatch } from "@/redux/hooks";
import useLocalStorageSetter from "@/util/useLocalStorageSetter";
import { useCallback } from "react";
import { updateUsers } from "@/redux/usersSlice";

type UpdateOperation = (users: Users) => void;

const useUpdateUsers = (users: Users) => {
  const dispatch = useCustomDispatch();
  const { updateUsersStorage } = useLocalStorageSetter();

  return useCallback((updateOperation: UpdateOperation) => {
    const newUsers = users.copy();
    updateOperation(newUsers);
    dispatch(updateUsers(newUsers));
    updateUsersStorage(newUsers.getAll());
  }, [users, dispatch]);
};

export default useUpdateUsers;
