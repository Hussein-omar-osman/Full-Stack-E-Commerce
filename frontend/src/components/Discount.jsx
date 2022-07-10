import React from 'react';
import { Link } from 'react-router-dom';

function Discount() {
	return (
		<section id='offers' class='py-5'>
			<div class='container'>
				<div class='row d-flex align-items-center justify-content-center text-center justify-content-lg-start text-lg-start'>
					<div class='offers-content'>
						<span class='text-white'>Discount Up To 20%</span>
						<h2 class='mt-2 mb-2 text-white'>Grand Sale Offer!</h2>
						<div className='mb-4'>
							<span class='text-white'>To All Products</span>
						</div>
						<Link to={'/products'}>
							<button class='btn'>Buy Now</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Discount;
