import React from "react";
import ReactDOM from "react-dom/client";

// import FCCounter from "./day6-functionalComponent/form.jsx";

import CreateForm1 from "./day6-functionalComponent/form1.jsx";
import CreateForm from "./day6-functionalComponent/form.jsx";
import SimpleForm from "./day6-functionalComponent/sreadop.jsx";
// import "./ex.style.css";
import ClassComp from "./practice/class-component.jsx";
import Counter from "./day7/State.jsx";
import Counter1 from "./day7/State.jsx";

import State2 from "./day7/State2.jsx";
import Demo from "./day7/Demo.jsx";
import Demo1 from "./day7/Demo.jsx";

// import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <FCCounter /> */}
    <CreateForm />
    <SimpleForm />
    <ClassComp />
    <CreateForm1 />
    <Counter />
    <State2 />
    <Counter1 />

    <Demo />
    <Demo1 />
  </React.StrictMode>
);
