import ChildView from "./2.child";

const ParentView = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
      <ChildView name="Ajit" city="Mumbai" />
      <ChildView name="Sohail" city="Bhopal" />
      <ChildView name="Khusi" city="Bhopal" />
      <ChildView name="Reetika" city="Delhi" />
      <ChildView name="Arun" city="Morena" />
      <ChildView name="Varun" city="Delhi" />
      <ChildView name="Sachin" city="Bangalore" />
      <ChildView name="Deepak" city="Bihar" />
      <ChildView name="Manasvi" city="Bhopal" />
    </div>
  );
};

export default ParentView;


const ChildView = (meraProps) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: 140,
        width: 100,
        padding: 12,
        boxShadow: "silver 0px 0px 1px 1px",
      }}
    >
      <p>
        {meraProps.name} from {meraProps.city}
      </p>
    </div>
  );
};

export default ChildView;
