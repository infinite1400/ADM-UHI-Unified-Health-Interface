import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./patientlogin.css";
const PatientEdit = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    Age: "",
    phone: "",
    email: "",
    password: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const edit = async (e) => {
    e.preventDefault();
    const { name, Age, phone, email, password } = user;
    const res = await fetch("/patientEdit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        Age: Age,
        phone: phone,
        email: email,
        password: password,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("Error !!");
      console.log("Error !!");
    } else {
      window.alert("Details Updated Successfully");
      console.log("Details Updated Successfully");
      navigate("../", { replace: true });
    }
  };
  return (
    <>
      <section className="signin">
        {/* <div className='container-mt-5'> */}
        {/* <div className='signin-content'> */}
        <div className="signin-form">
          <h1 className="form-title">Login</h1>
          <form method="POST" className="register-form" id="register-form">
            <div className="form-group">
              Name :{" "}
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                placeholder="Enter Your E-mail"
                value={user.name}
                onChange={handleInputs}
              />
            </div>
            <div className="form-group">
              Age :{" "}
              <input
                type="number"
                name="Age"
                id="Age"
                autoComplete="off"
                placeholder="Enter Your E-mail"
                value={user.Age}
                onChange={handleInputs}
              />
            </div>
            <div className="form-group">
              Phone :{" "}
              <input
                type="number"
                name="phone"
                id="phone"
                autoComplete="off"
                placeholder="Enter Your E-mail"
                value={user.phone}
                onChange={handleInputs}
              />
            </div>
            <div className="form-group">
              E-mail :{" "}
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                placeholder="Enter Your E-mail"
                value={user.email}
                onChange={handleInputs}
              />
            </div>

            <div className="form-group">
              Password :{" "}
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                placeholder="Enter Password"
                value={user.password}
                onChange={handleInputs}
              />
            </div>
          </form>
          <div className="form-group form-button">
            <input
              type="submit"
              name="edit"
              id="edit"
              className="form-submit"
              value="Edit"
              onClick={edit}
            />
          </div>
        </div>

        {/* </div> */}

        {/* </div> */}
      </section>
    </>
  );
};

export default PatientEdit;