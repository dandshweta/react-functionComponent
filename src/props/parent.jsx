import Child from "./Child.jsx";
const Parent = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
      <Child name="shweta" age={25} city="latur" />
      <Child name="sneha" age={30} city="mumbai" />
      <Child name="swapnil" age={28} city="pune" />
      <Child name="shri" age={32} city="beed" />
      <Child name="sayali" age={27} city="latur" />
    </div>
  );
};
export default Parent;
