import Child2 from "./subchild1";

const Child1 = () => {
  return (
    <div>
      <h2>child1</h2>
      <Child2 />
    </div>
  );
};

export default Child1;
