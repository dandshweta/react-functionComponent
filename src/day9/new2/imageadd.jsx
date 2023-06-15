import myImage from "./img/nature.jpg";

function MyComponent() {
  return (
    <div>
      <h1>Welcome</h1>
      <img src={myImage} alt="My Image" />
    </div>
  );
}

export default MyComponent;
