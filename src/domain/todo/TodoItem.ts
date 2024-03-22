import { ITodoItem } from "@/domain/todo/ITodoItem";

export default class TodoItem implements ITodoItem {
  id: number;
  text: string;
  completed: boolean;
  userId: number;

  private constructor(id: number, text: string, completed: boolean, userId: number) {
    this.id = id;
    this.text = text;
    this.completed = completed;
    this.userId = userId;
  }

  static of(text: string, userId: number): TodoItem {
    return new TodoItem(Date.now(), text, false, userId);
  }

  static fromJSON(data: ITodoItem) {
    return new TodoItem(data.id, data.text, data.completed, data.userId);
  }

  changeText(text: string) {
    this.text = text;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }

  isSameUserId(userId: number): boolean {
    return this.userId === userId;
  }
}
