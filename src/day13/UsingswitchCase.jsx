function MyComponent({ status }) {
  let message;

  switch (status) {
    case "loading":
      message = "Loading...";
      break;
    case "success":
      message = "Data loaded successfully!";
      break;
    case "error":
      message = "Error loading data.";
      break;
    default:
      message = "Unknown status.";
  }

  return (
    <div>
      <h1>My App</h1>
      <p>Status: {message}</p>
    </div>
  );
}

// Usage:
function App6() {
  const status = "success"; // or 'loading', 'error', etc.
  return (
    <div>
      <MyComponent status={status} />
    </div>
  );
}
export default App6;
