import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../app/store';

function Categories() {
	// const categories = useStore((state) => state.categories);
	// const loading = useStore((state) => state.loading);
	// const hasErrors = useStore((state) => state.hasErrors);
	// const fetchCategories = useStore((state) => state.fetchCategories);

	// if (loading) {
	// 	return <p>Loading</p>;
	// }
	// if (hasErrors) {
	// 	return <p>cannot read data</p>;
	// }

	return (
		<div className='container mt-5'>
			<div className='title text-center'>
				<h2 className='position-relative d-inline-block'>Categories</h2>
			</div>
			<div className='d-flex justify-content-center mt-3'>
				{' '}
				<span className='textC text-center text-muted'>
					Finding Best Products Now in Your Fingertips
				</span>
			</div>
			<div className='row mt-2 g-4'>
				{/* <button onClick={fetchCategories}>get category</button> */}
				<div className='col-md-3'>
					{/* {categories.map((category) => (
						<p key={category}>{category}</p>
					))} */}
					<Link to={'/category/Mobile-Phones'}>
						<div className='cardC p-1'>
							<div className='d-flex justify-content-between align-items-center p-2'>
								<div className='flex-column lh-1 imagename'>
									<h6>Mobile Phones</h6>
								</div>
								<div>
									<img
										src='https://i.imgur.com/b9zkoz0.jpg'
										height='100'
										width='100'
										alt=''
									/>
								</div>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Categories;
