// import React from 'react'

// const Login = () => {
//   return (
//     <button onchange={}>Login</button>
//   )
// }
// export default Login

import React from "react";
import { useHistory } from "react-router-dom";

const MyComponent = () => {
  const history = useHistory();

  const handleClick = () => {
    // Redirect the user to the "about" page when the button is clicked
    history.push("/about");
  };

  return (
    <div>
      <h1>Welcome to My App</h1>
      <button onClick={handleClick}>Go to About Page</button>
    </div>
  );
};

export default MyComponent;
