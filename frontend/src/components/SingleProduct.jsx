import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { LinkContainer } from 'react-router-bootstrap';

function SingleProduct({ id, name, price, prodImage }) {
	return (
		<div
			className='col-md-6 col-lg-4 col-xl-3 p-2 bg-light border-1 border-primary'
			id={id}>
			<LinkContainer to={'/product'}>
				<div className=''>
					<div className='special-img collection-img position-relative'>
						<img
							src={prodImage}
							className='w-100'
							alt=''
							style={{ width: '350px', height: '305px', objectFit: 'cover' }}
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
