import { useContext } from "react";
import { Context } from "./context1";

const Child2 = () => {
  const { name, setName } = useContext(Context);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h3>child2</h3>
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Enter data"
      />
    </div>
  );
};

export default Child2;
