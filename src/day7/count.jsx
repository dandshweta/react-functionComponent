import { useState } from "react";
const Demo1 = () => {
  const [counter, outputvalue] = useState(0);
  const onchange = () => {
    outputvalue = counter + 1;
  };

  return (
    <div>
      <p>counter</p>
      <button onClick={onchange}></button>
    </div>
  );
};
export default Demo1;
