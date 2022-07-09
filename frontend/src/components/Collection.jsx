import React, { useState } from 'react';
import SingleProduct from './SingleProduct';
import { bestProducts, featuredProducts, newProducts } from './CollectionData';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';

function Collection() {
	const [selected, setSelected] = useState('Best Sellers');

	return (
		<section id='collection' className='py-5 px-3'>
			<div className=''>
				<h1 className='txt-xl text-lg-center'>New Collection</h1>

				<div className='row g-0'>
					<div className='d-flex flex-wrap justify-content-center mt-5 filter-button-group'>
						<Nav fill variant='pills'>
							<Nav.Item>
								<Button
									type='button'
									variant='primary'
									className={`m-2 cbtn ${
										selected === 'Best Sellers' ? 'active-filter-btn' : ''
									}`}
									onClick={() => setSelected('Best Sellers')}>
									Best Sellers
								</Button>
							</Nav.Item>
							<Nav.Item>
								<Button
									variant='primary'
									type='button'
									className={`m-2 cbtn ${
										selected === 'Featured' ? 'active-filter-btn' : ''
									}`}
									onClick={() => setSelected('Featured')}>
									Featured
								</Button>
							</Nav.Item>
							<Nav.Item>
								<Button
									variant='primary'
									type='button'
									className={`m-2 cbtn ${
										selected === 'New Arrival' ? 'active-filter-btn' : ''
									}`}
									onClick={() => setSelected('New Arrival')}>
									New Arrivals
								</Button>
							</Nav.Item>
							<Nav.Item>
								<LinkContainer to={'/shop'}>
									<Button variant='primary' type='button' className='m-2 cbtn'>
										All
									</Button>
								</LinkContainer>
							</Nav.Item>
						</Nav>
					</div>

					{selected === 'Best Sellers' && (
						<div className='special-list mt-4 row gx-0 gy-3'>
							{bestProducts.map((prod) => (
								<SingleProduct
									key={prod.id}
									name={prod.name}
									price={prod.price}
									prodImage={prod.proImage}
								/>
							))}
						</div>
					)}
					{selected === 'Featured' && (
						<div className='special-list mt-4 row gx-0 gy-3'>
							{featuredProducts.map((prod) => (
								<SingleProduct
									name={prod.name}
									price={prod.price}
									prodImage={prod.proImage}
								/>
							))}
						</div>
					)}
					{selected === 'New Arrival' && (
						<div className='special-list mt-4 row gx-0 gy-3'>
							{newProducts.map((prod) => (
								<SingleProduct
									name={prod.name}
									price={prod.price}
									prodImage={prod.proImage}
								/>
							))}
						</div>
					)}
				</div>
			</div>
		</section>
	);
}

export default Collection;
