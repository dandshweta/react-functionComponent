import { useState } from "react";

const CreateForm1 = () => {
  const [inputValue, changeValue] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("OnInputChange", { name, value });
    changeValue(e.target.value);
  };

  return (
    <div>
      <h2>----Register-----</h2>
      <form>
        <div>
          <label>Name</label>
          <input
            name="name"
            placeholder="Enter full name"
            type="text"
            value={inputValue.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            name="email"
            placeholder="Enter email address"
            type="email"
            value={inputValue.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            name="phone"
            placeholder="Enter phone number"
            type="text"
            value={inputValue.phone}
            onChange={handleChange}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default CreateForm1;
