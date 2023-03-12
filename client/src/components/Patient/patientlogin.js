import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './patientlogin.css'
import { bake_cookie,read_cookie,delete_cookie} from 'sfcookies'
const cookie_key='ashutosh'
const cookie_key1='tammana'
const cookie_key2='harshita'

const Patientlogin = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState({
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
	const login = async (e) => {
		e.preventDefault();
		const { email, password } = user;
		const res = await fetch("/signin", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		});
		const data = await res.json();
		if (res.status === 400 || !data) {
			window.alert("Login Unsuccessful");
			console.log("Login Unsuccessful");
		}
		else {
			window.alert("Login Successful");
			console.log("Login Successful");
			console.log(data)
			bake_cookie(cookie_key,data.email);
			bake_cookie(cookie_key1,data.phone);
			bake_cookie(cookie_key2,data.name);
			console.log(read_cookie(cookie_key));
			navigate("/PatientMain", { replace: true });
		}
	};
	return (
		<>
			<section className='signin'>
				{/* <div className='container-mt-5'> */}
				{/* <div className='signin-content'> */}
				<div className='signin-form'>
					<h1 className='form-title'>Login</h1>
					<form method='POST' className='register-form' id='register-form'>

						<div className='form-group'>
							E-mail {" "}: <input type="email" name="email" id="email" autoComplete='off'
								placeholder='Enter Your E-mail' value={user.email} onChange={handleInputs} />
						</div>

						<div className='form-group'>
							Password : <input type="password" name="password" id="password" autoComplete='off'
								placeholder='Enter Password' value={user.password} onChange={handleInputs} />
						</div>

					</form>
					<div className='form-group form-button'>
						<input type='submit' name='signin' id='signin' className='form-submit'
							value="Login" onClick={login} />
					</div>
					<div className='not-registered' >
						<NavLink to="/patient/signup">Don't have an account</NavLink>
					</div>
				</div>

				{/* </div> */}

				{/* </div> */}

			</section>
		</>
	)
}

export default Patientlogin