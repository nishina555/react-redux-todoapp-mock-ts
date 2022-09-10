import React, { useState } from "react";
import { addTodo } from "../redux/todosSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";

const AddTodo: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [input, setInput] = useState("");

  const updateInput = (input: string) => {
    setInput(input);
  };

  const handleAddTodo = () => {
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div>
      <input onChange={(e) => updateInput(e.target.value)} value={input} />
      <button className="add-todo" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
