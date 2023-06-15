import { useState } from "react";

const Button = ({ onClick }) => {
  return <button onClick={onClick}>Change Color</button>;
};

const ChildComponent = ({ color }) => {
  return <div style={{ color }}>Hello, world!</div>;
};

const App = () => {
  const [textColor, setTextColor] = useState("black");

  const handleButtonClick = () => {
    const newColor = textColor === "black" ? "red" : "black";
    setTextColor(newColor);
  };

  return (
    <div>
      <Button onClick={handleButtonClick} />
      <ChildComponent color={textColor} />
    </div>
  );
};

export default App;
