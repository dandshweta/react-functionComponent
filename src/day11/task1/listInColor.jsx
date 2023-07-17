import { useState } from "react";
const ListColor = () => {
  const List = [
    { color: "red", name: "Red" },
    { color: "green", name: "Green" },
    { color: "blue", name: "Blue" },
  ];
  return (
    <div>
      <div>
        <select>
          <option value="">Select Color</option>

          <option></option>
        </select>
        <button>Add Todo</button>
      </div>
      <ul>
        <li>
          <div>
            <p style=""></p>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default ListColor;
