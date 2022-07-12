import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { LinkContainer } from 'react-router-bootstrap';

function SingleProduct({ id, slug, name, price, photo }) {
	return (
		<div className='m-1 p-2 bg-light rounded-3' id={id}>
			<LinkContainer to={`/product/${slug}`}>
				<div className=''>
					<div className='special-img collection-img position-relative'>
						<img
							src={`https://res.cloudinary.com/fichua-store/${photo}`}
							className='w-100 rounded-3'
							alt=''
							style={{ width: '360px', height: '240px', objectFit: 'cover' }}
						/>
					</div>
					<div className='text-start'>
						<p className='fw-bold text-capitalize my-1'>{name}</p>
						<div className='rating'>
							<span className='text-secondary'>
								<FontAwesomeIcon icon={solid('star')} />
							</span>
							<span className='text-secondary'>
								<FontAwesomeIcon icon={solid('star')} />
							</span>
							<span className='text-secondary'>
								<FontAwesomeIcon icon={solid('star')} />
							</span>
							<span className=''>
								<FontAwesomeIcon icon={solid('star')} />
							</span>
							<span className=''>
								<FontAwesomeIcon icon={solid('star')} />
							</span>
						</div>
						<div>
							<span className='fw-bold text-lg-start'>
								<span className='fw-light'>KES</span> {price}
							</span>
						</div>
					</div>
				</div>
			</LinkContainer>
		</div>
	);
}

export default SingleProduct;
