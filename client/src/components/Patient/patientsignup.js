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
		<section className='signup'>
			<div className='container mt-5'>
				<div className='signup-content'>
					<div className='signup-form'>
						<h2 className='form-title'>Sign up</h2>
						<form method='POST' className='register-form' id='register-form'>
							<div className='form-group'>
								Name : <input type="text" name="name" id="name" autoComplete='off'
								value={user.name}
								onChange={handleInputs}
								placeholder='Enter Your Name'/>
							</div>
							<div className='form-group'>
								Phone No: <input type="number" name="phone" id="phone" autoComplete='off'
								value={user.Phone}
								onChange={handleInputs}
								placeholder='Enter Your Number'/>
							</div>
							<div className='form-group'>
								Age : <input type="number" name="Age" id="Age" autoComplete='off'
								value={user.Age}
								onChange={handleInputs}
								placeholder='Enter Your Age'/>
							</div>
						
							<div className='form-group'>
								E-mail : <input type="text" name="email" id="email" autoComplete='off'
								value={user.email}
								onChange={handleInputs}
								placeholder='Enter Your E-mail'/>
							</div>
			
							<div className='form-group'>
								Password : <input type="password" name="password" id="password" autoComplete='off'
								value={user.password}
								onChange={handleInputs}
								placeholder='Enter Password'/>
							</div>
							<div className='form-group'>
								Confirm password : <input type="password" name="cpassword" id="cpassword" autoComplete='off'
								value={user.cpassword}
								onChange={handleInputs}
								placeholder='Re-enter password'/>
							</div>
								</form>
							<div className='form-group form-button'>
								<input type='submit' name='signup' id='signup' className='form-submit'
								value="Register"
								onClick={PostData}
								/>
							</div>
						<div className='already'>
							<NavLink to="/Patient/login">I am already registered</NavLink>
						</div>
					</div>
				</div>
			</div>
		</section>
	</>
  )
}

export default Patientsignup