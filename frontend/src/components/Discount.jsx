import React from 'react';
import { Link } from 'react-router-dom';

function Discount() {
	return (
		<section id='offers' className='py-5 rounded-3'>
			<div className='container'>
				<div className='row d-flex align-items-center justify-content-center text-center justify-content-lg-start text-lg-start'>
					<div className='offers-content'>
						<span className='text-white'>Discount Up To 20%</span>
						<h2 className='mt-2 mb-2 text-white'>Grand Sale Offer!</h2>
						<div className='mb-4'>
							<span className='text-white'>To All Products</span>
						</div>
						<Link to={'/products'}>
							<button className='outline-primary'>Buy Now</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Discount;
