import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Footer, SingleProduct } from '../../components';
import Coat from '../../assets/images/c_t-shirt_men.png';

function SingleCategory() {
	const { name } = useParams();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<section id={name} className='py-5'>
				<div className='container'>
					<div className='title text-center'>
						<h2 className='position-relative d-inline-block'>{name}</h2>
					</div>

					<div className='row g-0'>
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
		</>
	);
}

export default SingleCategory;
