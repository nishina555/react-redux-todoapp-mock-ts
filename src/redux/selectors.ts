import { State } from "./types";

export type TodoItem = {
  content: string;
  completed: boolean;
  id: number;
};

export const getTodoList = (store: State): Array<number> =>
  store && store.todos ? store.todos.allIds : [];

export const getTodoById = (store: State, id: number): TodoItem => {
  return { ...store.todos.byIds[id], id };
};

export const getTodos = (store: State): Array<TodoItem> =>
  getTodoList(store).map((id) => getTodoById(store, id));
