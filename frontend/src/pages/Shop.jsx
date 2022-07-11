import React, { useEffect } from 'react';
import { Footer, SingleProduct } from '../components';
import Coat from '../assets/images/c_t-shirt_men.png';
import Container from 'react-bootstrap/Container';

const Shop = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Container fluid>
			<section className=''>
				<div className='container'>
					<h1 className='text-primary text-center'>Shop</h1>

					<div className='row g-0'>
						<div className='d-flex flex-wrap justify-content-center mt-5 filter-button-group'>
							<button
								type='button'
								className='btn m-2 text-dark active-filter-btn'>
								All
							</button>
							<button type='button' className='btn m-2 text-dark'>
								Electronics
							</button>
							<button type='button' className='btn m-2 text-dark'>
								Books
							</button>
							<button type='button' className='btn m-2 text-dark'>
								Fashion
							</button>
							<button type='button' className='btn m-2 text-dark'>
								Sports
							</button>
						</div>

						<div className='special-list mt-4 row gx-0 gy-3'>
							<SingleProduct name={'Coat'} price={'$ 49.00'} prodImage={Coat} />
							<SingleProduct name={'Coat'} price={'$ 49.00'} prodImage={Coat} />
							<SingleProduct name={'Coat'} price={'$ 49.00'} prodImage={Coat} />
							<SingleProduct name={'Coat'} price={'$ 49.00'} prodImage={Coat} />
							<SingleProduct name={'Coat'} price={'$ 49.00'} prodImage={Coat} />
							<SingleProduct name={'Coat'} price={'$ 49.00'} prodImage={Coat} />
							<SingleProduct name={'Coat'} price={'$ 49.00'} prodImage={Coat} />
						</div>
					</div>
				</div>
			</section>
			<nav aria-label='Page navigation example'>
				<ul className='pagination justify-content-center'>
					<li className='page-item disabled'>
						<a className='page-link' href='/'>
							Previous
						</a>
					</li>
					<li className='page-item'>
						<a className='page-link' href='/'>
							1
						</a>
					</li>
					<li className='page-item'>
						<a className='page-link' href='/'>
							2
						</a>
					</li>
					<li className='page-item'>
						<a className='page-link' href='/'>
							3
						</a>
					</li>
					<li className='page-item'>
						<a className='page-link' href='/'>
							Next
						</a>
					</li>
				</ul>
			</nav>
			<Footer />
		</Container>
	);
};

export default Shop;
