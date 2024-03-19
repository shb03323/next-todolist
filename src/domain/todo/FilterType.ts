export const TodoItemFilter = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
} as const;

export type FilterType = (typeof TodoItemFilter)[keyof typeof TodoItemFilter];
