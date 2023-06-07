import React from "react";
import ReactDOM from "react-dom/client";

// import FCCounter from "./day6-functionalComponent/form.jsx";

import CreateForm1 from "./day6-functionalComponent/form1.jsx";
import CreateForm from "./day6-functionalComponent/form.jsx";

// import "./ex.style.css";

// import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <FCCounter /> */}
    <CreateForm />
    <CreateForm1 />
  </React.StrictMode>
);
