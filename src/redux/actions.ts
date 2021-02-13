import { ActionTypes } from "./actionTypes";
import { VisibilityFilterTypes } from "./types";

let nextTodoId = 0;

type AddTodoAction = {
  type: ActionTypes.ADD_TODO;
  payload: {
    id: number;
    content: string;
  };
};

export const addTodo = (content: string): AddTodoAction => ({
  type: ActionTypes.ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
  },
});

type ToggleTodoAction = {
  type: ActionTypes.TOGGLE_TODO;
  payload: {
    id: number;
  };
};

export const toggleTodo = (id: number): ToggleTodoAction => ({
  type: ActionTypes.TOGGLE_TODO,
  payload: { id },
});

type SetFilterAction = {
  type: ActionTypes.SET_FILTER;
  payload: {
    filter: VisibilityFilterTypes;
  };
};

export const setFilter = (filter: VisibilityFilterTypes): SetFilterAction => ({
  type: ActionTypes.SET_FILTER,
  payload: { filter },
});

export type TodoActions = AddTodoAction | ToggleTodoAction | SetFilterAction;
