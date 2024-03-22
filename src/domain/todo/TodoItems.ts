import { ITodoItems } from "@/domain/todo/ITodoItems";
import TodoItem from "@/domain/todo/TodoItem";
import { ITodoItem } from "@/domain/todo/ITodoItem";

export default class TodoItems implements ITodoItems {
  todoItems: TodoItem[] = [];

  constructor() {
  }

  loadData(data: ITodoItem[]) {
    this.todoItems = data.map(iTodoItem => TodoItem.fromJSON(iTodoItem));
  }

  copy(): TodoItems {
    const todoItems = new TodoItems();
    todoItems.loadData(this.todoItems);
    return todoItems;
  }

  add(todoItem: TodoItem): void {
    this.todoItems.push(todoItem);
  }

  remove(todoItem: TodoItem): void {
    const copiedTodoItem = this.getSameTodoItem(todoItem);
    const index = this.todoItems.indexOf(copiedTodoItem);
    if (index !== -1) {
      this.todoItems.splice(index, 1);
    }
  }

  toggleCompleted(todoItem: TodoItem): void {
    const copiedTodoItem = this.getSameTodoItem(todoItem);
    copiedTodoItem.toggleCompleted();
  }

  changeText(todoItem: TodoItem, text: string): void {
    const copiedTodoItem = this.getSameTodoItem(todoItem);
    copiedTodoItem.changeText(text);
  }

  private getSameTodoItem(todoItem: TodoItem) {
    return this.todoItems.filter(todo => todo.id === todoItem.id)[0];
  }

  getTodoItemsOf(userId: number) {
    return this.todoItems.filter(todo => todo.isSameUserId(userId));
  }

  getAll() {
    return this.copy().todoItems;
  }
};
