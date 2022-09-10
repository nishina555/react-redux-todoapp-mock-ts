import { VISIBILITY_FILTERS } from "../../constants";
import { VisibilityFilterTypes } from "../types";
import { setFilter } from "../actions";
import { createReducer } from "@reduxjs/toolkit";

const initialState = VISIBILITY_FILTERS.ALL as VisibilityFilterTypes;

const visibilityFilter = createReducer(initialState, (builder) => {
  builder.addCase(setFilter, (state, action) => {
    return action.payload.filter;
  });
});

export default visibilityFilter;
