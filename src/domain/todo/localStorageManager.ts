import { ITodoItem } from "@/domain/todo/ITodoItem";
import { ITodoItems } from "@/domain/todo/ITodoItems";

export function loadLocalStorage(): ITodoItem[] {
  if (typeof window !== "undefined") {
    const loadedData = localStorage.getItem("todo-items");
    if (loadedData !== null) {
      const parsedData: ITodoItems = JSON.parse(loadedData);
      return parsedData.todoItems;
    }
  }
  return [];
}

export function updateLocalStorage(todoItems: ITodoItem[]) {
  const data: ITodoItems = { todoItems: todoItems };
  localStorage.setItem("todo-items", JSON.stringify(data));
}
