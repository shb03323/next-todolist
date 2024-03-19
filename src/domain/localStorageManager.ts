import { ITodoItem } from "@/domain/todo/ITodoItem";
import { ITodoItems } from "@/domain/todo/ITodoItems";
import { IUser } from "@/domain/user/IUser";
import { IUsers } from "@/domain/user/IUsers";

const loadTodoItemsStorage = (): ITodoItem[] => {
  if (typeof window !== "undefined") {
    const loadedData = localStorage.getItem("todo-items");
    if (loadedData !== null) {
      const parsedData: ITodoItems = JSON.parse(loadedData);
      return parsedData.todoItems;
    }
  }
  return [];
}

const updateTodoItemsStorage = (todoItems: ITodoItem[]) => {
  const data: ITodoItems = { todoItems: todoItems };
  localStorage.setItem("todo-items", JSON.stringify(data));
}

const loadUsersStorage = (): IUser[] => {
  if (typeof window !== "undefined") {
    const loadedData = localStorage.getItem("users");
    if (loadedData !== null) {
      const parsedData: IUsers = JSON.parse(loadedData);
      return parsedData.users;
    }
  }
  return [];
}

const updateUsersStorage = (users: IUser[]) => {
  const data: IUsers = { users: users };
  localStorage.setItem("users", JSON.stringify(data));
};

export { loadTodoItemsStorage, updateTodoItemsStorage, loadUsersStorage, updateUsersStorage };
