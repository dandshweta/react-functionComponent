import { useState } from "react";
import ChildColorSize from "./childColorSize.jsx";
const Parentcolorsize = () => {
  const [textcolor, setColor] = useState("");
  const [textsize, setSize] = useState("");

  const handlebtn = () => {
    setColor("red");
    setSize("40px");
  };
  return (
    <div>
      <ChildColorSize changecolor={textcolor} size={textsize} />
      <button onClick={handlebtn}>Click me!</button>
    </div>
  );
};
export default Parentcolorsize;
