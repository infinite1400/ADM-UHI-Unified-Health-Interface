import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./doctorlogin.css";
const DoctorEdit = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    registration_number: "",
    location: "",
    qualification: "",
    speciality: "",
    experience: "",
    fees: "",
    rating: "",
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
    const {
      name,
      email,
      phone,
      registration_number,
      location,
      qualification,
      speciality,
      experience,
      fees,
      rating,
      password,
    } = user;
    const res = await fetch("/doctorEdit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        registration_number: registration_number,
        location: location,
        qualification: qualification,
        speciality: speciality,
        experience: experience,
        fees: fees,
        rating: rating,
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
          <h1 className="form-title">Edit Your Details</h1>
          <form method="POST" className="register-form" id="register-form">
            <div className="form-group">
              Name :{" "}
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                value={user.name}
                onChange={handleInputs}
                placeholder="Enter Your Name"
              />
            </div>
            <div className="form-group">
              Phone No:{" "}
              <input
                type="number"
                name="phone"
                id="phone"
                autoComplete="off"
                value={user.phone}
                onChange={handleInputs}
                placeholder="Enter Your Number"
              />
            </div>
            <div className="form-group">
              E-mail :{" "}
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="off"
                value={user.email}
                onChange={handleInputs}
                placeholder="Enter Your E-mail"
              />
            </div>
            <div className="form-group">
              Experience :{" "}
              <input
                type="number"
                name="experience"
                id="experience"
                autoComplete="off"
                value={user.experience}
                onChange={handleInputs}
                placeholder="eg:4 Years"
              />
            </div>

            <div className="form-group">
              Registration_No :{" "}
              <input
                type="text"
                name="registration_number"
                id="registration_number"
                autoComplete="off"
                value={user.registration_number}
                onChange={handleInputs}
                placeholder="eg:4 Years"
              />
            </div>
            <div className="form-group">
              Fees :{" "}
              <input
                type="number"
                name="fees"
                id="fees"
                autoComplete="off"
                value={user.fees}
                onChange={handleInputs}
                placeholder="eg:4 Years"
              />
            </div>
            <div className="form-group">
              Qualification :{" "}
              <input
                type="text"
                name="qualification"
                id="qualification"
                autoComplete="off"
                value={user.qualification}
                onChange={handleInputs}
                placeholder="MBBS"
              />
            </div>
            <div className="form-group">
              Speciality :{" "}
              <input
                type="text"
                name="speciality"
                id="speciality"
                autoComplete="off"
                value={user.speciality}
                onChange={handleInputs}
                placeholder="General Physician"
              />
            </div>

            <div className="form-group">
              Location :{" "}
              <input
                type="text"
                name="location"
                id="location"
                autoComplete="off"
                value={user.location}
                onChange={handleInputs}
                placeholder="Location"
              />
            </div>
            <div className="form-group">
              Ratings :{" "}
              <input
                type="number"
                name="rating"
                id="rating"
                autoComplete="off"
                value={user.rating}
                onChange={handleInputs}
                placeholder="Enter Ratings"
              />
            </div>

            <div className="form-group">
              Password :{" "}
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                value={user.password}
                onChange={handleInputs}
                placeholder="Enter Password"
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

export default DoctorEdit;