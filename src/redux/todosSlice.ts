import { createSlice } from "@reduxjs/toolkit";
import { TodoState } from "../redux/types";

let nextTodoId = 0;

const initialState: TodoState = {
  allIds: [],
  byIds: {},
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      const content = action.payload;
      let id = ++nextTodoId;
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
    },
    toggleTodo(state, action) {
      const id = action.payload;
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
    },
  },
});

export const { addTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
