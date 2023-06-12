import React, { useState } from 'react'
import './doctorRegister.css'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
const DoctorSignup = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState({
		name: "",
		email: "",
		phone: "",
		experience: "",
		qualification: "",
		registration_number: "",
		fees: "",
		rating: "",
		speciality: "",
		location: "",
		password: "",
		cpassword: ""
	});
	let name, value;
	const handleInputs = (e) => {
		console.log(e);
		name = e.target.name;
		//console.log(name);
		value = e.target.value;
		setUser({ ...user, [name]: value });
	}
	//Connecting to backend
	const PostData = async (e) => {
		e.preventDefault();

		const { name, email, phone, password, cpassword, experience, qualification, speciality, location, fees, registration_number, rating } = user;

		const res = await fetch("/registerDoc", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				name: name, email: email, phone: phone, password: password, cpassword: cpassword, experience: experience,
				qualification: qualification, location: location, speciality: speciality, fees: fees, registration_number: registration_number, rating: rating,
			})
		});
		// console.log(user)//to check !
		const data = await res.json();
		if (res.status === 422 || !data) {
			window.alert("Invalid Registration");
			console.log("Invalid Registration");
		}
		else {
			window.alert("Registration Successful");
			console.log("Successful Registration");
			navigate("/login", { replace: true });
			// history.push("/login");
		}

	}
	return (
		<>
			<div className='maindivdoctorregister'>
				<div className='wrapper'>
					<div class="title">Registration</div>
					<form method='POST' className='form' id='register-form'>
						<div className='user-details'>
							<div className='doctorregisterinput'>
								<span class="details">Full Name</span>
								<input className='input' type="text" name="name" id="name" autoComplete='off'
									value={user.name}
									onChange={handleInputs}
									placeholder='Enter Your Name' />
							</div>
							<div className='doctorregisterinput'>
								<span class="details">Phone Number</span><input className='input' type="number" name="phone" id="phone" autoComplete='off'
									value={user.phone}
									onChange={handleInputs}
									placeholder='Enter Your Number' />
							</div>
							<div className='doctorregisterinput'>
								<span class="details">Email</span>
								 <input className='input' type="text" name="email" id="email" autoComplete='off' required
									value={user.email}
									onChange={handleInputs}
									placeholder='Enter Your E-mail'  />
							</div>
							<div className='doctorregisterinput'>
								<span class="details">Experience</span> <input className='input' type="text" name="experience" id="experience" autoComplete='off' required
									value={user.experience}
									onChange={handleInputs}
									placeholder='eg:4 Years' />
							</div>

							{/* <div className='doctorregisterinput'>
								Rating : <input className='input' type="text" name="rating" id="rating" autoComplete='off'
								value={user.rating}
								onChange={handleInputs}
								placeholder='eg:4 Years'/>
							</div> */}

							<div className='doctorregisterinput'>
								<span class="details">Registration Number</span> <input className='input' type="text" name="registration_number" id="registration_number" autoComplete='off' required
									value={user.registration_number}
									onChange={handleInputs}
									placeholder='eg:4 Years' />
							</div>

							<div className='doctorregisterinput'>
								<span class="details">Fees</span> <input className='input' type="text" name="fees" id="fees" autoComplete='off' required
									value={user.fees}
									onChange={handleInputs}
									placeholder='eg:4 Years' />
							</div>
							<div className='doctorregisterinput'>
								<span class="details">Qualification</span> <input className='input' type="text" name="qualification" id="qualification" autoComplete='off' required
									value={user.qualification}
									onChange={handleInputs}
									placeholder='MBBS' />
							</div>
							<div className='doctorregisterinput'>
								<span class="details">Speciality</span> <input className='input' type="text" name="speciality" id="speciality" autoComplete='off' required
									value={user.speciality}
									onChange={handleInputs}
									placeholder='General Physician' />
							</div>

							<div className='doctorregisterinput'>
								<span class="details">Location</span> <input className='input' type="text" name="location" id="location" autoComplete='off' required
									value={user.location}
									onChange={handleInputs}
									placeholder='Location' />
							</div>


							<div className='doctorregisterinput'>
								<span class="details">Password</span> <input className='input' type="password" name="password" id="password" autoComplete='off' required
									value={user.password}
									onChange={handleInputs}
									placeholder='Enter Password' />
							</div>
							<div className='doctorregisterinput'>
								<span class="details">Confirm Password</span> 
								<input className='input' type="password" name="cpassword" id="cpassword" autoComplete='off' required
									value={user.cpassword}
									onChange={handleInputs}
									placeholder='Re-enter password' />
							</div>
						</div>
						<div className='button'>
							<input type='submit' name='signup' id='signup' className='input'
								value="Register"
								onClick={PostData}
							/>
						</div>
						<div className='already'>
							<NavLink to="/doctor/login">I am already registered</NavLink>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default DoctorSignup