import React from "react";
import cx from "classnames";
import { VISIBILITY_FILTERS } from "../constants";
import { setFilter } from "../redux/visibilityFilterSlice";
import { State, VisibilityFilterTypes } from "../redux/types";
import { AppDispatch } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";

const VisibilityFilters: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const activeFilter: VisibilityFilterTypes = useSelector(
    (state: State) => state.visibilityFilter
  );
  return (
    <div className="visibility-filters">
      {(Object.keys(VISIBILITY_FILTERS) as Array<
        keyof typeof VISIBILITY_FILTERS
      >).map((filterKey) => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={cx(
              "filter",
              currentFilter === activeFilter && "filter--active"
            )}
            onClick={() => dispatch(setFilter(currentFilter))}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};

export default VisibilityFilters;
