// import { useState } from "react";
// import Button2 from "./child1.Layout";

// const Button2 = () => {
//   const [textColor, setColor] = useState("black");
//   const handleBtnClick = () => {
//     const newColor
//     setColor(newColor);
//   };

//   return (
//     <div>
//       <Button onClick={handleBtnClick} />
//       <ChildComponent color={textColor} />
//     </div>
//   );
// };

// export default Button2;

import { useState } from "react";
import ChildComponent from "./buttonchildComponent.jsx";

const ParentButton2 = () => {
  const [textcolor, setColor] = useState("");

  const handleBtnClick = (newcolor) => {
    setColor(newcolor);
  };

  return (
    <div>
      <ChildComponent changecolor={textcolor} />
      <button onClick={() => handleBtnClick("red")}>Click 1</button>
      <button onClick={() => handleBtnClick("blue")}>Click 2</button>
      <button onClick={() => handleBtnClick("green")}>Click 3</button>
    </div>
  );
};

export default ParentButton2;
