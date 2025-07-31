import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { register } from "../../JS/Actions/user";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
	const [newUser, setNewUser] = useState({});
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleChange = (e) => {
		setNewUser({ ...newUser, [e.target.name]: e.target.value });
	};

	const handleUser = (e) => {
		e.preventDefault();
		dispatch(register(newUser));
		navigate("/profile");
	};

	return (
		<div>
			<Form.Label>Name</Form.Label>
			<Form.Control
				type='text'
				name='name'
				placeholder='Enter name'
				onChange={handleChange}
			/>
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
			<Form.Label>Phone</Form.Label>
			<Form.Control
				type='number'
				name='phone'
				placeholder='Enter number'
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

export default Register;