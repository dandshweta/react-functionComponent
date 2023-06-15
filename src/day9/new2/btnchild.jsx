import { useState } from "react";

const BtnChild = ({ changecolor, size }) => {
  const [showImage, setShowImage] = useState(false);

  const handleClick = () => {
    setShowImage(true);
  };

  return (
    <div>
      <div style={{ color: changecolor, fontSize: size }} onClick={handleClick}>
        <p>Shweta</p>
      </div>
      {showImage && <img src="./img/nature.jpg" alt="Image" />}
    </div>
  );
};

export default BtnChild;
