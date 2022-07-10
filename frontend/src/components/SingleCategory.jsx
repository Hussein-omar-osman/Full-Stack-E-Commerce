import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

const SingleCategory = ({ name, categoryImage, slug }) => {
	return (
		<div className='col-md-3'>
			<div className='ctcrd p-1'>
				<LinkContainer to={`/category/${slug}`}>
					<div className='d-flex justify-content-between align-items-center p-2'>
						<div className='txtn text-dark '>{name}</div>
						<img
							src={`https://res.cloudinary.com/fichua-store/${categoryImage}`}
							height='100'
							width='100'
							alt={name}
							className='rounded-3'
						/>
					</div>
				</LinkContainer>
			</div>
		</div>
	);
};

export default SingleCategory;
