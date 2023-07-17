import { useState } from "react";

const AddTodo = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== "") {
      onAdd({ title, description, completed: false });
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

const ListTodo = ({ todos, onToggle }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(index)}
          />
          <span>{todo.title}</span>
        </li>
      ))}
    </ul>
  );
};

const ShowTodo = ({ todos }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <p>Completed: {todo.completed ? "Yes" : "No"}</p>
        </div>
      ))}
    </div>
  );
};

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleToggleTodo = (index) => {
    setTodos((prevTodos) => {
      //it is callback function
      const updatedTodos = [...prevTodos];
      updatedTodos[index].completed = !updatedTodos[index].completed;
      return updatedTodos;
    });
  };

  return (
    <div>
      <h2>Add Todo</h2>
      <AddTodo onAdd={handleAddTodo} />

      <h2>List Todos</h2>
      <ListTodo todos={todos} onToggle={handleToggleTodo} />

      <h2>Show Todos</h2>
      <ShowTodo todos={todos} />
    </div>
  );
};

export default TodoList;
