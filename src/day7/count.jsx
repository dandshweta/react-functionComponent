import { useState } from "react";
const Demo1 = () => {
  const [counter, outputvalue] = useState(0);
  console.log("counter value:", counter);
  const onchange = () => {
    outputvalue(counter + 1);
    // outputvalue(counter + 4);

    // outputvalue((lastState) => {
    //   return lastState + 1;
    // });

    // outputvalue((lastState) => {
    //   return lastState + 2;
    // });
  };

  return (
    <div>
      <p>counter{counter}</p>
      <button onClick={onchange}> changevalue</button>
    </div>
  );
};
export default Demo1;
