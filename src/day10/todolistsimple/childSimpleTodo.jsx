const TodoChild = ({ todos }) => {
  console.log("child render");
  return (
    <>
      <h2>Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

export default TodoChild;
