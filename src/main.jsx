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
import Demo1 from "./day7/count.jsx";
import ParentView from "./day8/parent.jsx";
import Parent from "./props/parent.jsx";
// import HomeView from "./day9/parent1.jsx";
// import './index.css'

import ParentButton2 from "./day9/button.jsx";
import Parentcolorsize from "./day9/new/parentcolorsize.jsx";
import BtnParent from "./day9/new2/btnparent.jsx";
import ProductView from "./day10/productData.jsx";
import ProductView1 from "./day10/productData1.jsx";
import ProductView5 from "./day10/dataAddcart/dataAddParent.jsx";
import MyComponent from "./day9/new2/imageadd.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
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
    <ParentView />
    <Parent />
    {/* <HomeView /> */}
    <ParentButton2 />
    <Parentcolorsize />
    <BtnParent />
    <ProductView />
    <ProductView1 />
    <ProductView5 />
    <MyComponent />
  </>
);
