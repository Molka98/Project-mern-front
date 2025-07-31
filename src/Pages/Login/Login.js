import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../JS/Actions/user";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
	const [user, setUser] = useState({});
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handleUser = (e) => {
		e.preventDefault();
		dispatch(login(user));
		navigate("/profile");
	};

	return (
		<div>
			<Form.Label>Email address</Form.Label>
			<Form.Control
				type='email'
				name='email'
				placeholder='Enter email'
				onChange={handleChange}
			/>
			<Form.Label>Password</Form.Label>
			<Form.Control
				type='text'
				name='password'
				placeholder='Enter password'
				onChange={handleChange}
			/>
			<Link to='/profile'>
				<Button variant='primary' type='submit' onClick={handleUser}>
					register
				</Button>
			</Link>
		</div>
	);
};

export default Login;