import React ,{useState} from 'react'
import './doctorRegister.css'
import {Navigate, NavLink,useNavigate} from 'react-router-dom'
const DoctorSignup = () => {
	const navigate=useNavigate();
	const [user,setUser]=useState({
		name:"",
		email:"",
		phone:"",
        experience:"",
        qualification:"",
		registration_number:"",
		fees:"",
		rating:"",
        speciality:"",
        location:"",
		password:"",
		cpassword:""
	});
	let name,value;
	const handleInputs=(e)=>{
		console.log(e);
		name=e.target.name;
		//console.log(name);
		value=e.target.value;
		setUser({ ...user,[name]:value});
	}
	//Connecting to backend
	const PostData=async(e)=>{
		e.preventDefault();

		const {name,email,phone,password,cpassword,experience,qualification,speciality,location,fees,registration_number,rating}=user;

		const res=await fetch("/registerDoc",{
			method:"POST",
			headers:{
				"Content-Type":"application/json"
			},
			body:JSON.stringify({
				name:name,email:email,phone:phone,password:password,cpassword:cpassword,experience:experience,
				qualification:qualification,location:location,speciality:speciality,fees:fees,registration_number:registration_number,rating:rating,
			})
		});
        // console.log(user)//to check !
		const data=await res.json();
		if(res.status===422 || !data){
				window.alert("Invalid Registration");
				console.log("Invalid Registration");
		}
		else{
			window.alert("Registration Successful");
				console.log("Successful Registration");
				navigate("/login",{ replace :true});
			// history.push("/login");
		}

	}

  return (
    <>
		<section className='signup'>
			<div className='container mt-5'>
				<div className='signup-content'>
					<div className='signup-form'>
						<h2 className='form-title'>Register</h2>
						<form method='POST' className='register-form' id='register-form'>
							<div className='form-group'>
								Name : <input type="text" name="name" id="name" autoComplete='off'
								value={user.name}
								onChange={handleInputs}
								placeholder='Enter Your Name'/>
							</div>
							<div className='form-group'>
								Phone No: <input type="number" name="phone" id="phone" autoComplete='off'
								value={user.phone}
								onChange={handleInputs}
								placeholder='Enter Your Number'/>
							</div>
							<div className='form-group'>
								E-mail : <input type="text" name="email" id="email" autoComplete='off'
								value={user.email}
								onChange={handleInputs}
								placeholder='Enter Your E-mail'/>
							</div>
                            <div className='form-group'>
								Experience : <input type="text" name="experience" id="experience" autoComplete='off'
								value={user.experience}
								onChange={handleInputs}
								placeholder='eg:4 Years'/>
							</div>

							{/* <div className='form-group'>
								Rating : <input type="text" name="rating" id="rating" autoComplete='off'
								value={user.rating}
								onChange={handleInputs}
								placeholder='eg:4 Years'/>
							</div> */}

							<div className='form-group'>
								Registration_No : <input type="text" name="registration_number" id="registration_number" autoComplete='off'
								value={user.registration_number}
								onChange={handleInputs}
								placeholder='eg:4 Years'/>
							</div>

							<div className='form-group'>
								Fees : <input type="text" name="fees" id="fees" autoComplete='off'
								value={user.fees}
								onChange={handleInputs}
								placeholder='eg:4 Years'/>
							</div>
                            <div className='form-group'>
								Qualification : <input type="text" name="qualification" id="qualification" autoComplete='off'
								value={user.qualification}
								onChange={handleInputs}
								placeholder='MBBS'/>
							</div>
                            <div className='form-group'>
								Speciality : <input type="text" name="speciality" id="speciality" autoComplete='off'
								value={user.speciality}
								onChange={handleInputs}
								placeholder='General Physician'/>
							</div>

                            <div className='form-group'>
								Location : <input type="text" name="location" id="location" autoComplete='off'
								value={user.location}
								onChange={handleInputs}
								placeholder='Location'/>
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
							<NavLink to="/doctor/login">I am already registered</NavLink>
						</div>
					</div>
				</div>
			</div>
		</section>
	</>
  )
}

export default DoctorSignup