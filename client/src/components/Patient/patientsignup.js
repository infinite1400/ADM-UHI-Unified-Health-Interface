import React ,{useState} from 'react'
import './patientsignup.css'
import {Navigate, NavLink,useNavigate} from 'react-router-dom'
const Patientsignup = () => {
	const navigate=useNavigate();
	const [user,setUser]=useState({
		name:"",
		email:"",
		phone:"",
		Age:"",
		password:"",
		cpassword:""
	});
	let name,value;
	const handleInputs=(e)=>{
		console.log(e);
		name=e.target.name;
		//console.log(name);
		value=e.target.value;
		setUser({... user,[name]:value});
	}
	//Connecting to backend
	const PostData=async(e)=>{
		e.preventDefault();

		const {name,Age,email,phone,password,cpassword}=user;

		const res=await fetch("/register",{
			method:"POST",
			headers:{
				"Content-Type":"application/json"
			},
			body:JSON.stringify({
				name:name,Age:Age,email:email,phone:phone,password:password,cpassword:cpassword
			})
		});

		const data=await res.json();
		if(res.status===422 || !data){
				window.alert("Invalid Registration");
				console.log("Invalid Registration");
		}
		else{
			window.alert("Registration Successful");
				console.log("Successful Registration");
				navigate("/Patient/login",{ replace :true});
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
									placeholder='Enter Your E-mail' />
							</div>
							<div className='doctorregisterinput'>
								<span class="details">Age</span> 
								<input className='input' type="number" name="Age" id="Age" autoComplete='off' required
									value={user.Age}
									onChange={handleInputs}
									placeholder='Enter your Age' />
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
							<NavLink to="/patient/login">I am already registered</NavLink>
						</div>
					</form>
				</div>
			</div>
	</>
  )
}

export default Patientsignup