import TodoItems from "@/domain/todo/TodoItems";
import { useCustomDispatch } from "@/redux/hooks";
import { updateTodoItems } from "@/redux/todoItemsSlice";
import { useCallback } from "react";
import useLocalStorageSetter from "@/util/useLocalStorageSetter";

type UpdateOperation = (todos: TodoItems) => void;

const useUpdateTodos = (todos: TodoItems) => {
  const dispatch = useCustomDispatch();
  const { updateTodoItemsStorage } = useLocalStorageSetter();

  return useCallback((updateOperation: UpdateOperation) => {
    const newTodos = todos.copy();
    updateOperation(newTodos);
    dispatch(updateTodoItems(newTodos));
    updateTodoItemsStorage(newTodos.getAll());
  }, [todos, dispatch]);
};

export default useUpdateTodos;
