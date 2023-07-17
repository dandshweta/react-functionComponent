import { useState } from "react";
const FunctionalComponent5 = () => {
  const [state, newState] = useState({
    name: "shweta",
    city: "pune",
  });
  const { name, city } = state;
  return (
    <>
      <p>
        hii my name is {name} and i am from {city}
      </p>
    </>
  );
};
export default FunctionalComponent5;
