import { useEffect, useState } from "react";
import { IUser } from "@/domain/user/IUser";
import { IUsers } from "@/domain/user/IUsers";
import { ITodoItem } from "@/domain/todo/ITodoItem";
import { ITodoItems } from "@/domain/todo/ITodoItems";

const useLocalStorageLoader = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadUsersStorage = (): IUser[] => {
    if (typeof window === "undefined") {
      return [];
    }
    const loadedData = localStorage?.getItem("users");
    if (loadedData !== null) {
      const parsedData: IUsers = JSON.parse(loadedData);
      return parsedData.users;
    }
    return [];
  };

  const loadTodoItemsStorage = (): ITodoItem[] => {
    const loadedData = localStorage.getItem("todo-items");
    if (loadedData !== null) {
      const parsedData: ITodoItems = JSON.parse(loadedData);
      return parsedData.todoItems;
    }
    return [];
  };

  useEffect(() => {
    setIsLoading(typeof window === "undefined");
  }, []);

  return {
    isLoading: isLoading,
    loadUsers: loadUsersStorage,
    loadTodoItems: loadTodoItemsStorage,
  };
};

export default useLocalStorageLoader;
