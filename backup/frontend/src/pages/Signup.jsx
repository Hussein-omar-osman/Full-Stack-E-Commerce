import React, { useEffect } from 'react';
import { Footer } from '../components';
import { Link } from 'react-router-dom';

function Signup() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<div className='container loginContainer'>
				<main className='form-signin text-center'>
					<form>
						<h1 className='h3 mb-3 fw-normal'>Register</h1>

						<div className='form-floating'>
							<input
								type='text'
								className='form-control'
								id='floatingInput'
								placeholder='username'
							/>
							<label for='floatingInput'>Username</label>
						</div>
						<br></br>
						<div className='form-floating'>
							<input
								type='email'
								className='form-control'
								id='floatingInput'
								placeholder='name@example.com'
							/>
							<label for='floatingInput'>Email address</label>
						</div>
						<br></br>
						<div className='form-floating'>
							<input
								type='password'
								className='form-control'
								id='floatingPassword'
								placeholder='Password'
							/>
							<label for='floatingPassword'>Password</label>
						</div>
						<br></br>
						<div className='form-floating'>
							<input
								type='password'
								className='form-control'
								id='floatingPassword'
								placeholder='Password'
							/>
							<label for='floatingPassword'>Password</label>
						</div>
						<br></br>

						<button className='w-100 btn btn-lg btn-primary' type='submit'>
							Sign Up
						</button>

						<div className='mt-4'>
							<p>
								Have an Account?{' '}
								<Link to={'/login'}>
									<span
										style={{
											color: '#34b3e5',
											textDecoration: 'underline',
											cursor: 'pointer',
										}}>
										Login
									</span>
								</Link>
							</p>
						</div>
					</form>
				</main>
			</div>
			<Footer />
		</>
	);
}

export default Signup;
