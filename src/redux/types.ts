import { VISIBILITY_FILTERS } from "../constants";

// visibilityFilter
export type VisibilityFilterTypes = typeof VISIBILITY_FILTERS[keyof typeof VISIBILITY_FILTERS];

// todos
export type TodoState = {
  allIds: Array<number>;
  byIds: { [key: string]: TodoItemState };
};
export type TodoItemState = {
  content: string;
  completed: boolean;
};

// state
export type State = {
  visibilityFilter: VisibilityFilterTypes;
  todos: TodoState;
};
