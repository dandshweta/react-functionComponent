import { useState, useEffect } from "react";

function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This function will be called after the component renders

    // Update the document title with the current count
    document.title = `Count: ${count}`;

    // Clean up function
    // return () => {
    // This function will be called before the component unmounts or re-renders
    // It can be used for any necessary cleanup

    // Reset the document title
    //   document.title = "React App";
    // };
  }, [count]); // Only re-run the effect if the count value changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default ExampleComponent;
