// 

export default ConditionalRenderingV4;

import { useState } from "react";
const ListRenderAdd1 = () => {
  const [names, setNames] = useState([]);
  const [newName, setNewName] = useState("");

  const onAddNewName = () => {
    
    setNames((prevState) => [newName, ...prevState]);
    setNewName("");
    setIsActive(true);
  };
//   const handleClick = () => {
//     setIsActive(true);
//   };

  return (
    <div>
      <div>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button onClick={onAddNewName}>Add</button>

        {/* <div>
      <button onClick={handleClick}>Click Me</button> */}

      {isActive ? <p>Something is here!</p> : <p>Nothing in it.</p>}
    {/* </div> */}
      </div>
      <ul>
        {names.map((item, index) => {
          return (
            <li key={index}>
              <div>
                <p>{item}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ConditionalRenderingV4;


{/* <p> {userMessage} ? You entered ${userMessage} : Not added anything</p> */}
{/* <p> {userMessage} ? You entered {userMessage} : Not added anything</p> */}
