import React from 'react';
import { Link } from 'react-router-dom';

const SingleCategory = ({ name, categoryImage, slug }) => {
	return (
		<div className='col-md-3'>
			<div className='cardC p-1'>
				<Link to={`/category/${slug}`}>
					<div className='d-flex justify-content-between align-items-center p-2'>
						<div className='flex-column lh-1 imagename'>
							<h6>{name}</h6>
						</div>
						<div>
							<img
								src={`https://res.cloudinary.com/fichua-store/${categoryImage}`}
								height='100'
								width='100'
								alt={name}
							/>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default SingleCategory;
