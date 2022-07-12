import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import Toastify from 'toastify-js';
import jwt_decode from 'jwt-decode';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { MdOutlineArrowForward } from 'react-icons/md';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function Signup() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [conPassword, setConPassword] = useState('');
	const { setAuthToken, setUser } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(name);
		console.log(email);
		console.log(password);
		console.log(conPassword);
		if (password !== conPassword || password.length < 8) {
			Toastify({
				text: 'Password must match & have more than 8 chars',
				duration: 2000,

				// close: true,
				gravity: 'bottom', // `top` or `bottom`
				position: 'center', // `left`, `center` or `right`
				stopOnFocus: true, // Prevents dismissing of toast on hover
				style: {
					background: 'red',
				},
				onClick: function () {}, // Callback after click
			}).showToast();
		} else {
			const options = {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json; charset=UTF-8',
				},
				body: JSON.stringify({
					name: name,
					email: email,
					password: password,
				}),
			};
			let res = await fetch('/api/auth/register/', options);
			let data = await res.json();
			console.log(data);

			if (res.status === 200) {
				Toastify({
					text: 'Account created',
					duration: 2000,
					gravity: 'bottom', // `top` or `bottom`
					position: 'center', // `left`, `center` or `right`
					stopOnFocus: true, // Prevents dismissing of toast on hover
					style: {
						background: 'green',
					},
					onClick: function () {}, // Callback after click
				}).showToast();
				const options2 = {
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json; charset=UTF-8',
					},
					body: JSON.stringify({ email: email, password: password }),
				};
				let res2 = await fetch(
					'https://fichuastore.herokuapp.com/api/auth/jwt/create/',
					options2
				);
				let data2 = await res2.json();
				setAuthToken(data2);
				setUser(jwt_decode(data2.access));
				localStorage.setItem('authToken', JSON.stringify(data2));
				localStorage.setItem('user', JSON.stringify(jwt_decode(data2.access)));
				navigate('/shop/');
			} else {
				Toastify({
					text: 'Username and email is taken',
					duration: 2000,
					gravity: 'bottom', // `top` or `bottom`
					position: 'center', // `left`, `center` or `right`
					stopOnFocus: true, // Prevents dismissing of toast on hover
					style: {
						background: 'red',
					},
					onClick: function () {}, // Callback after click
				}).showToast();
			}
		}
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Container className='justify-content-center px-5 py-3 w-50'>
			<h1 className='text-primary px-5 py-1 text-center txt-xl'>Register</h1>
			<Form
				onSubmit={handleSubmit}
				className='px-5 flex flex-column align-items-center'>
				<FloatingLabel
					controlId='floatingInputGrid'
					label='Name'
					className='mb-3'>
					<Form.Control
						className='border-secondary'
						id='floatingInput'
						type='text'
						placeholder='John Doe'
						value={name}
						name='name'
						onChange={(e) => setName(e.target.value)}
					/>
				</FloatingLabel>
				<FloatingLabel
					controlId='floatingInputGrid'
					label='Email'
					className='mb-3'>
					<Form.Control
						className='border-secondary'
						id='floatingInput'
						type='email'
						placeholder='name@example.com'
						value={email}
						name='email'
						onChange={(e) => setEmail(e.target.value)}
					/>
				</FloatingLabel>
				<FloatingLabel
					controlId='floatingInputGrid'
					label='Password'
					className='mb-3'>
					<Form.Control
						className=' border-secondary'
						type='password'
						id='floatingPassword'
						placeholder='Password'
						value={password}
						name='password'
						onChange={(e) => setPassword(e.target.value)}
					/>
				</FloatingLabel>
				<FloatingLabel
					controlId='floatingInputGrid'
					label='Confirm Password'
					className='mb-3'>
					<Form.Control
						className=' border-secondary'
						type='password'
						id='floatingPassword'
						placeholder='Confirm Password'
						value={conPassword}
						name='password'
						onChange={(e) => setConPassword(e.target.value)}
					/>
				</FloatingLabel>
				<Navbar sticky='bottom' className='justify-content-between'>
					<Nav.Item className=''>
						<LinkContainer className='' to='/login'>
							<Button
								variant='outline-secondary'
								className='txt-b text-primary bg-light'>
								Have an account? Login
							</Button>
						</LinkContainer>
					</Nav.Item>
					<Nav.Item className=''>
						<Button className='txt-b text-white' type='submit'>
							Sign up
							<MdOutlineArrowForward className=' ms-2' />
						</Button>
					</Nav.Item>
				</Navbar>
			</Form>
		</Container>
	);
}

export default Signup;
