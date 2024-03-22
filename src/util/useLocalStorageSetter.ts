import { ITodoItem } from "@/domain/todo/ITodoItem";
import { ITodoItems } from "@/domain/todo/ITodoItems";
import { IUser } from "@/domain/user/IUser";
import { IUsers } from "@/domain/user/IUsers";

const useLocalStorageSetter = () => {
  const updateTodoItemsStorage = (todoItems: ITodoItem[]) => {
    const data: ITodoItems = { todoItems: todoItems };
    localStorage.setItem("todo-items", JSON.stringify(data));
  };

  const updateUsersStorage = (users: IUser[]) => {
    const data: IUsers = { users: users };
    localStorage.setItem("users", JSON.stringify(data));
  };

  return { updateTodoItemsStorage, updateUsersStorage };
};

export default useLocalStorageSetter;
