import { useState } from "react";
import BtnChild from "./btnChild.jsx";
import imageSrc from "./img/nature.jpg";

const BtnParent = () => {
  const [textcolor, setColor] = useState("");
  const [textsize, setSize] = useState("");
  const [showImage, setShowImage] = useState(false);

  const handleTextClick = () => {
    setShowImage(true);
  };

  const handleButtonClick = () => {
    setColor("red");
    setSize("40px");
  };

  return (
    <div>
      <BtnChild
        changecolor={textcolor}
        size={textsize}
        onClick={handleTextClick}
      />
      {showImage && <img src={imageSrc} alt="Image" />}
      <button onClick={handleButtonClick}>Click me!</button>
    </div>
  );
};

export default BtnParent;
