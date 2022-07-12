import React, { useEffect, useState } from 'react';
import { Footer, SingleProduct } from '../../components';
import Container from 'react-bootstrap/Container';

const Shop = () => {
	const [products, setProducts] = useState([]);

	const fetchProducts = async () => {
		let res = await fetch(
			'https://fichuastore.herokuapp.com/api/shop/products/'
		);
		let data = await res.json();
		console.log(data);
		setProducts(data);
	};

	useState(() => {
		fetchProducts();
	}, []);

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
								className='btn m-2 text-white active-filter-btn'>
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

						<div className='gw'>
							{products.map((item) => (
								<SingleProduct
									name={item.name}
									photo={item.photo}
									price={item.price}
									slug={item.slug}
								/>
							))}
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
