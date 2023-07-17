import { useEffect } from "react";

const UnMounting = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      console.log({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
  }, []);

  return <div>I am a Mouse Move Page</div>;
};

export default UnMounting;



import { useState } from "react";
import UnMounting from "./5.Unmounting";

const ShowHideFifth = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow((state) => !state)}>Toggle</button>
      {show ? <UnMounting /> : <p>No Comp loaded</p>}
    </div>
  );
};
export default ShowHideFifth;
