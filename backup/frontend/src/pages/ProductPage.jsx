import React, { useEffect } from 'react';
import { Footer, SingleProduct } from '../components';
import Coat from '../assets/images/c_t-shirt_men.png';

function ProductPage() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<div className='container mt-5 mb-5'>
				<div className='card pro'>
					<div className='row g-0'>
						<div className='col-md-6 border-end'>
							<div className='d-flex flex-column justify-content-center'>
								<div className='main_image'>
									{' '}
									<img
										src='https://i.imgur.com/TAzli1U.jpg'
										id='main_product_image'
										width='350'
										alt=''
									/>{' '}
								</div>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='p-3 right-side'>
								<div className='d-flex justify-content-between align-items-center'>
									<h3>Sofa</h3>
								</div>
								<div className='mt-2 pr-3 content'>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua
									</p>
								</div>
								<h3>$43.99</h3>

								<div classNameName='rating mt-3'>
									<span classNameName=''>
										<i style={{ color: '#f19c3a' }} className='fa fa-star'></i>
									</span>
									<span classNameName=''>
										<i style={{ color: '#f19c3a' }} className='fa fa-star'></i>
									</span>
									<span classNameName=''>
										<i style={{ color: '#f19c3a' }} className='fa fa-star'></i>
									</span>
									<span classNameName=''>
										<i style={{ color: '#f19c3a' }} className='fa fa-star'></i>
									</span>
									<span classNameName=''>
										<i className='fa fa-star'></i>
									</span>

									<span style={{ marginLeft: '10px' }}>441 reviews</span>
								</div>

								<div className='d-flex flex-row mt-5 gap-3'>
									{' '}
									<button
										style={{ backgroundColor: '#34b3e5', color: '#fff' }}
										className='btn btn-primary mt-1'>
										Buy now
									</button>
									<button className='btn btn-primary mt-1'>Add to Cart</button>{' '}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section className='py-5'>
				<div className='container'>
					<div className='title text-center'>
						<h2 className='position-relative d-inline-block'>
							Related Products
						</h2>
					</div>

					<div className='row g-0'>
						<div className='special-list mt-4 row gx-0 gy-3'>
							<SingleProduct name={'Coat'} price={'$ 49.00'} prodImage={Coat} />
							<SingleProduct name={'Coat'} price={'$ 49.00'} prodImage={Coat} />
							<SingleProduct name={'Coat'} price={'$ 49.00'} prodImage={Coat} />
							<SingleProduct name={'Coat'} price={'$ 49.00'} prodImage={Coat} />
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}

export default ProductPage;
