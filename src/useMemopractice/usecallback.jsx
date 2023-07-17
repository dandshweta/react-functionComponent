import { useState, useCallback } from "react";

const ExampleUseCallback = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={handleButtonClick}>Increment</button>
    </div>
  );
};

export default ExampleUseCallback;
