import { addTodo, toggleTodo } from "../actions";
import { TodoState } from "../types";
import { createReducer } from "@reduxjs/toolkit";

const initialState: TodoState = {
  allIds: [],
  byIds: {},
};

const todos = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodo, (state, action) => {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false,
          },
        },
      };
    })
    .addCase(toggleTodo, (state, action) => {
      const id = action.payload.id;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed,
          },
        },
      };
    });
});

export default todos;
