import { useState } from "react";
const CreateForm = () => {
  const [inputValue, changeValue] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    username: "",
    gender: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("OnInputChange", { name, value });
    changeValue({
      [name]: value,
    });
  };
  return (
    <div>
      <h2>Register</h2>
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
            type="number"
            value={inputValue.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address</label>
          <input
            name="address"
            placeholder="Enter home address"
            type="text"
            value={inputValue.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Username</label>
          <input
            name="username"
            placeholder="Enter username"
            type="text"
            value={inputValue.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <p>Gender</p>
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            value={inputValue.gender}
            onChange={handleChange}
            required
          ></input>
          <label>Female</label>
          <input
            type="radio"
            name="gender"
            value={inputValue.gender}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            placeholder="Enter password"
            type="password"
            value={inputValue.password}
            onChange={handleChange}
            required
          />
        </div>
      </form>
    </div>
  );
};
export default CreateForm;
