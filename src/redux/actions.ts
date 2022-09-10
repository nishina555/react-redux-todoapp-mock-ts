import { ActionTypes } from "./actionTypes";
import { VisibilityFilterTypes } from "./types";
import { createAction } from "@reduxjs/toolkit";

let nextTodoId = 0;

type AddTodoAction = {
  type: ActionTypes.ADD_TODO;
  payload: {
    id: number;
    content: string;
  };
};

export const addTodo = createAction(
  ActionTypes.ADD_TODO,
  (content: string) => (
    {
      payload: {
        id: ++nextTodoId,
        content,
      }
    }
  )
)

type ToggleTodoAction = {
  type: ActionTypes.TOGGLE_TODO;
  payload: {
    id: number;
  };
};

export const toggleTodo = createAction(
  ActionTypes.TOGGLE_TODO,
  (id: number) => (
    {
      payload: {
        id,
      },
    }
  )
);

type SetFilterAction = {
  type: ActionTypes.SET_FILTER;
  payload: {
    filter: VisibilityFilterTypes;
  };
};

export const setFilter = createAction(
  ActionTypes.SET_FILTER,
  (filter: VisibilityFilterTypes) => (
    {
      payload: { filter },
    }
  )
);

export type TodoActions = AddTodoAction | ToggleTodoAction | SetFilterAction;
