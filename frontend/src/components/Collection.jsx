import React, { useState } from 'react';
import SingleProduct from './SingleProduct';
import { bestProducts, featuredProducts, newProducts } from './CollectionData';
import { Link } from 'react-router-dom';

function Collection() {
	const [selected, setSelected] = useState('Best Sellers');

	return (
		<section id='collection' className='py-5'>
			<div className='container'>
				<div className='title text-center'>
					<h2 className='position-relative d-inline-block'>New Collection</h2>
				</div>

				<div className='row g-0'>
					<div className='d-flex flex-wrap justify-content-center mt-5 filter-button-group'>
						<button
							type='button'
							className={`btn m-2 text-dark ${
								selected === 'Best Sellers' ? 'active-filter-btn' : ''
							}`}
							onClick={() => setSelected('Best Sellers')}>
							Best Sellers
						</button>
						<button
							type='button'
							className={`btn m-2 text-dark ${
								selected === 'Featured' ? 'active-filter-btn' : ''
							}`}
							onClick={() => setSelected('Featured')}>
							Featured
						</button>
						<button
							type='button'
							className={`btn m-2 text-dark ${
								selected === 'New Arrival' ? 'active-filter-btn' : ''
							}`}
							onClick={() => setSelected('New Arrival')}>
							New Arrival
						</button>
						<Link to={'/products'}>
							<button type='button' className='btn m-2 text-dark'>
								All
							</button>
						</Link>
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
