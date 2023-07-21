const ChildComponent = ({ increment }) => {
  const handleClick = () => {
    increment(5); // Pass the desired amount to increment
  };

  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={handleClick}>Increment by 5</button>
    </div>
  );
};

export default ChildComponent;
