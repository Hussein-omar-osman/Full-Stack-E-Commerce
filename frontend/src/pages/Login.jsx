import React, { useEffect } from 'react';
import { Footer } from '../components';
import Coat from '../assets/images/c_t-shirt_men.png';
import { Link } from 'react-router-dom';

function Login() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<div className='container loginContainer'>
				<main className='form-signin text-center'>
					<form>
						<img className='mb-4' src={Coat} alt='' width='72' height='57' />
						<h1 className='h3 mb-3 fw-normal'>Login</h1>

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

						<button className='w-100 btn btn-lg btn-primary' type='submit'>
							Log In
						</button>

						<div className='mt-4'>
							<p>
								Need an Account?{' '}
								<Link to={'/signup'}>
									<span
										style={{
											color: '#34b3e5',
											textDecoration: 'underline',
											cursor: 'pointer',
										}}>
										Register
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

export default Login;
