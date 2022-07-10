import React from 'react';
// import Coat from '../assets/images/c_t-shirt_men.png';
// import Suit from '../assets/images/suit.jpg';
// import T_Shirt from '../assets/images/tShirt.jpg';
import { Link } from 'react-router-dom';

function SingleProduct({ name, price, prodImage }) {
	// let imgScr;
	// if (name === 'Coat') {
	// 	imgScr = Coat;
	// } else if (name === 'Suit') {
	// 	imgScr = Suit;
	// } else {
	// 	imgScr = T_Shirt;
	// }
	return (
		<div className='col-md-6 col-lg-4 col-xl-3 p-2 best'>
			<div className='special-img collection-img position-relative'>
				<Link to={'/product'}>
					<img
						src={prodImage}
						className='w-100'
						alt=''
						style={{ width: '350px', height: '305px', objectFit: 'cover' }}
					/>
				</Link>
			</div>
			<div className='text-center'>
				<div className='rating mt-3'>
					<span className='text-primary'>
						<i className='fas fa-star cl'></i>
					</span>
					<span className='text-primary'>
						<i className='fas fa-star cl'></i>
					</span>
					<span className='text-primary'>
						<i className='fas fa-star cl'></i>
					</span>
					<span className=''>
						<i class='fa fa-star ucl'></i>
					</span>
					<span className=''>
						<i class='fa fa-star ucl'></i>
					</span>
				</div>
				<p className='text-capitalize my-1'>{name}</p>

				<div>
					<span className='fw-bold'>{price}</span>
				</div>
				<button className='btn btn-primary mt-3'>Add to Cart</button>
			</div>
		</div>
	);
}

export default SingleProduct;
