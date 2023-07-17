// function MyComponent({ isLoggedIn }) {
//   if (isLoggedIn) {
//     return <p>Welcome, User!</p>;
//   } else {
//     return <p>Please log in to continue.</p>;
//   }
// }

// function MyComponent({ isLoggedIn }) {
//   return (
//     <div>
//       {isLoggedIn ? <p>Welcome, User!</p> : <p>Please log in to continue.</p>}
//     </div>
//   );
// }

function MyComponent({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn && <p>Welcome, User!</p>}
      {!isLoggedIn && <p>Please log in to continue.</p>}
    </div>
  );
}
function App5() {
  const isLoggedIn = true;
  //   const isLoggedIn = false;

  return (
    <div>
      <h1>My App</h1>
      <MyComponent isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App5;
