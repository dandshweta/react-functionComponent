import { useState } from "react";

const InputBox = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <p>{inputValue ? `You entered: ${inputValue}` : "Not added anything"}</p>
    </div>
  );
};

export default InputBox;
