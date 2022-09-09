import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { toggleTodo } from "../redux/actions";
import { TodoActions } from '../redux/actions';
import { TodoItem } from "../redux/selectors";

type TodoProps = {
  todo: TodoItem;
  toggleTodo: (id: number) => TodoActions
};

const Todo: React.FC<TodoProps> = ({ todo, toggleTodo }) => (
  <li
    className="todo-item"
    onClick={() => toggleTodo(todo.id) }
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

export default connect(
  null,
  { toggleTodo }
)(Todo);
