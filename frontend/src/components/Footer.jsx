import React from 'react';

function Footer() {
	return (
		<footer className='bg-dark py-5 rounded-3'>
			<div className='container'>
				<div className='row text-white g-4'>
					<div className='col-md-6 col-lg-3'>
						<a
							className='text-uppercase text-decoration-none brand text-white'
							href='index.html'>
							Fichua Store
						</a>
						<p className='text-secondary mt-3'>We describe ourselves here</p>
					</div>

					<div className='col-md-6 col-lg-3'>
						<h5 className='fw-light'>Links</h5>
						<ul className='list-unstyled'>
							<li className='my-3'>
								<a href='/' className='text-secondary text-decoration-none'>
									<i className='fas fa-chevron-right me-1'></i> Home
								</a>
							</li>
							<li className='my-3'>
								<a href='/' className='text-secondary text-decoration-none'>
									<i className='fas fa-chevron-right me-1'></i> All Products
								</a>
							</li>
							<li className='my-3'>
								<a href='/' className='text-secondary text-decoration-none'>
									<i className='fas fa-chevron-right me-1'></i> Log in
								</a>
							</li>
							<li className='my-3'>
								<a href='/' className='text-secondary text-decoration-none'>
									<i className='fas fa-chevron-right me-1'></i> Sign up
								</a>
							</li>
						</ul>
					</div>

					<div className='col-md-6 col-lg-3'>
						<h5 className='fw-light mb-3'>Contact Us</h5>
						<div className='d-flex justify-content-start align-items-start my-2'>
							<span className='me-3'>
								<i className='fas fa-map-marked-alt'></i>
							</span>
							<span className='fw-light text-secondary'>Nairobi, Kenya</span>
						</div>
						<div className='d-flex justify-content-start align-items-start my-2'>
							<span className='me-3'>
								<i className='fas fa-envelope'></i>
							</span>
							<span className='fw-light text-secondary'>
								fichuastore@gmail.com
							</span>
						</div>
						<div className='d-flex justify-content-start align-items-start my-2'>
							<span className='me-3'>
								<i className='fas fa-phone-alt'></i>
							</span>
							<span className='fw-light text-secondary'>+254 0000000</span>
						</div>
					</div>

					<div className='col-md-6 col-lg-3'>
						<h5 className='fw-light mb-3'>Follow Us</h5>
						<div>
							<ul className='list-unstyled d-flex'>
								<li>
									<a
										href='/'
										className='text-secondary text-decoration-none fs-4 me-4'>
										<i className='fab fa-facebook-f'></i>
									</a>
								</li>
								<li>
									<a
										href='/'
										className='text-secondary text-decoration-none fs-4 me-4'>
										<i className='fab fa-twitter'></i>
									</a>
								</li>
								<li>
									<a
										href='/'
										className='text-secondary text-decoration-none fs-4 me-4'>
										<i className='fab fa-instagram'></i>
									</a>
								</li>
								<li>
									<a
										href='/'
										className='text-secondary text-decoration-none fs-4 me-4'>
										<i className='fab fa-pinterest'></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
