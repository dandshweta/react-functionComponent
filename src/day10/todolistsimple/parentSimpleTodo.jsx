import { useState } from "react";
import TodoChild from "./childSimpleTodo";

const TodosParent = () => {
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setTodos(e.target.value);
  };
  const addTodo = () => {
    setTodos([todos]);
  };

  return (
    <div>
      <input type="text" value="todoInput" onChange={handleChange}></input>
      <button onClick={addTodo}>Add Todo</button>
      <TodoChild todoList={todos} />
    </div>
  );
};

export default TodosParent;
