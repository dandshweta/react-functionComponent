import { useState } from "react";

const ConditionalRenderingV5 = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      {inputValue !== "" ? (
        <p>Entered: {inputValue}</p>
      ) : (
        <p>Please enter something.</p>
      )}
    </div>
  );
};

export default ConditionalRenderingV5;
