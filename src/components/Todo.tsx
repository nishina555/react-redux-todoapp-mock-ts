import React from "react";
import cx from "classnames";
import { TodoItemState } from "../redux/types";

type TodoProps = {
  todo: TodoItemState;
};

const Todo: React.FC<TodoProps> = ({ todo }) => (
  <li
    className="todo-item"
    onClick={() => {} /** dispatches action to toggle todo */}
  >
    {todo && todo.completed ? "👌" : "👋"}{" "}
    <span
      className={cx(
        "todo-item__text",
        todo && todo.completed && "todo-item__text--completed"
      )}
    >
      {todo.content}
    </span>
  </li>
);

export default Todo;
