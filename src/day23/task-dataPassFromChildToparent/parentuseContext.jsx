import { useState } from "react";
import { ContextProvider } from "./context1";
import Child1 from "./child1";
const ParentuseContext = () => {
  const [name, setName] = useState("");

  return (
    <ContextProvider value={{ name, setName }}>
      <div>Parent{name}</div>
      <div>
        <Child1 />
      </div>
    </ContextProvider>
  );
};
export default ParentuseContext;
