import React from "react";
import "./index.css";

export const Inputs = () => {
  const [data, setData] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  return (
    <>
      <div className="forms">
        <input
          className="searchfield"
          type="text"
          name="firstname"
          value={data.firstname}
          onChange={handleChange}
          placeholder="First Name"
        />

        <input
          className="searchfield"
          type="text"
          name="lastname"
          value={data.lastname}
          onChange={handleChange}
          placeholder="Last Name"
        />

        <input
          className="searchfield"
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Email"
        />
      </div>

      <div
        style={{
          alignItems: "start",
          textAlign: "left",
          marginTop:'10px' 
        }}
      >
        <strong>Name:</strong> {data.firstname} {data.lastname} <br />
        <strong>Email:</strong> {data.email}
      </div>
    </>
  );
};
