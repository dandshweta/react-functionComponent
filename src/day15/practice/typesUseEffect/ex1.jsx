import { useEffect, useState } from "react";

const ExampleComponent1 = () => {
  const [dependency, setDependency] = useState(0);
  const [dependency1, setDependency1] = useState(0);
  const [dependency2, setDependency2] = useState(0);

  // Basic Usage
  useEffect(() => {
    console.log("Component mounted");

    // Cleanup function
    return () => {
      console.log("Component unmounted");
    };
  }, []);

  // Dependency Array
  useEffect(() => {
    console.log("Dependency changed");
  }, [dependency]);

  // Cleanup Function
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Interval tick");
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(timer);
      console.log("Interval stopped");
    };
  }, []);

  // Multiple Effects
  useEffect(() => {
    console.log("Effect 1");
  }, [dependency1]);

  useEffect(() => {
    console.log("Effect 2");
  }, [dependency2]);

  return (
    <div>
      <h1>useEffect Examples</h1>
      <button onClick={() => setDependency((prev) => prev + 1)}>
        Change Dependency
      </button>
      <button onClick={() => setDependency1((prev) => prev + 1)}>
        Change Dependency 1
      </button>
      <button onClick={() => setDependency2((prev) => prev + 1)}>
        Change Dependency 2
      </button>
    </div>
  );
};

export default ExampleComponent1;
