import { ActionTypes } from "../actionTypes";
import { TodoActions } from "../actions";
import { TodoState } from "../types";

const initialState: TodoState = {
  allIds: [],
  byIds: {},
};

export default function (state = initialState, action: TodoActions) {
  switch (action.type) {
    case ActionTypes.ADD_TODO: {
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
    }
    case ActionTypes.TOGGLE_TODO: {
      const { id } = action.payload;
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
    }
    default:
      return state;
  }
}
