import { useState } from "react";

const ConditionalRenderingV3 = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>

      {isActive ? <p>Something is here!</p> : <p>Nothing in it.</p>}
    </div>
  );
};

export default ConditionalRenderingV3;
