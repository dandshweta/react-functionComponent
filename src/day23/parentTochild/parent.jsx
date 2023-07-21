import { usecontext } from "react";
const parent = () => {
  const context = usecontext();

  return <div>parent</div>;
};
export default parent;
