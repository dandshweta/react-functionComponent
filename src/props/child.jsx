import "../App.css";
const Child = (Props) => {
  return (
    <div className="card">
      <p className="para">{Props.name}</p>
      <p>{Props.city}</p>
      <p>Age: {Props.age}</p>
    </div>
  );
};

export default Child;
