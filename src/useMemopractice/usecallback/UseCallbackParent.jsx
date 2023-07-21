// import { useState } from "react";

// const UsecallbackParent = () => {
//   const [add, setAdd] = useState(0);

//   const onClickHandler = () => {
//     setAdd((prev) => prev + 1);
//   };

//   return (
//     <>
//       <div>UsecallbackParent</div>
//       <p>{add}</p>
//       <button onClick={onClickHandler}>add</button>
//     </>
//   );
// };

// export default UsecallbackParent;

import { useState, useCallback } from "react";
import ChildComponent from "./UseCallbackChild";

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(
    (amount) => {
      setCount((prevCount) => prevCount + amount);
    },
    [setCount]
  );

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Count: {count}</p>
      <ChildComponent increment={incrementCount} />
    </div>
  );
};

export default ParentComponent;
