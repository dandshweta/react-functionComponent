const ChildTodo = ({ todoList }) => {
  return (
    <>
      <h2>Todos</h2>
      {todoList.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

export default ChildTodo;
