import { useState } from "react";
import TodoChild from "./ChildTodo.jsx";

const ParentTodos = () => {
  const [todos, setTodos] = useState([]);

  const [todoInput, setTodoInput] = useState("");

  const handleChange = (e) => {
    setTodoInput(e.target.value);
  };

  const addTodo = () => {
    setTodos([...todos, todoInput]);
    setTodoInput("");
  };

  return (
    <div>
      <input type="text" value={todoInput} onChange={handleChange} />

      <button onClick={addTodo}>Add Todo</button>
      <TodoChild todoList={todos} />
    </div>
  );
};

export default ParentTodos;
