import { useState } from "react";

const TodoList5 = () => {
  const colorOptions = [
    { color: "red", name: "Red" },
    { color: "green", name: "Green" },
    { color: "blue", name: "Blue" },
  ];

  const [todos, setTodos] = useState([]);

  const [selectedColor, setSelectedColor] = useState("");

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const addTodo = () => {
    if (selectedColor) {
      const newTodo = { text: selectedColor, color: selectedColor };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    }
  };

  return (
    <div>
      <div>
        <select value={selectedColor} onChange={handleColorChange}>
          <option value="">Select Color</option>
          {colorOptions.map((option, index) => (
            <option key={index} value={option.color}>
              {option.name}
            </option>
          ))}
        </select>
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <div>
              <p style={{ color: todo.color }}>{todo.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList5;
