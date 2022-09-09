import React from "react";
import Todo from "./Todo";
import { connect } from 'react-redux';
import { State } from "../redux/types"
import { getTodosByVisibilityFilter, TodoItem } from "../redux/selectors";

type TodoListProps = {
  todos: Array<TodoItem>;
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map((todo: any, index: any) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
          })
        : "No todos, yay!"}
    </ul>
  );
};

const mapStateToProps = (state: State): TodoListProps => {
  const { visibilityFilter } = state
  const todos  = getTodosByVisibilityFilter(state, visibilityFilter)
  return { todos }
}
export default connect(mapStateToProps)(TodoList);
