// import { useState } from "react";
// const Demo = () => {
//   const [] input, changedinput ] = useState({
//     name: "",
//     address: "",
//     hobbies: "",
//     education: "",
//     language: "",
//   });
// const inputHandle=(e)=>{
//     const {name,value}=e.target;
//     console.log("name &value",{name,value})
//     changedinput({
//         [name]:value;
//         console.log(changedinput);
//     })

// }
//   return (
//     <div>
//       <h2>User Info</h2>
//       <div>
//         <label>Name:</label>
//         <input
//           type="text"
//           name="username"
//           value="input.value"
//           placeholder="Enter name"
//           onChange={inputHandle}
//         ></input>
//       </div>
//       <div>
//         <label>Address:</label>
//         <input
//           type="text"
//           name="address"
//           value="input.address"
//           placeholder="Enter address"
//           onChange={inputHandle}
//         ></input>
//       </div>
//     </div>
//   );
// };
// export default Demo;

import { useState } from "react";

const Demo = () => {
  const [input, setInput] = useState({
    name: "",
    address: "",
    hobbies: "",
    education: "",
    language: "",
  });

  const inputHandle = (e) => {
    const { name, value } = e.target;
    console.log("name & value", { name, value });
    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>User Info</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={input.name}
          placeholder="Enter name"
          onChange={inputHandle}
        ></input>
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={input.address}
          placeholder="Enter address"
          onChange={inputHandle}
        ></input>
      </div>
    </div>
  );
};

export default Demo;
