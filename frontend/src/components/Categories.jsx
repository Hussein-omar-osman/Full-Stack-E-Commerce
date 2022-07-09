import React from 'react';
import { useStore } from '../app/store';
import SingleCategory from './SingleCategory';
import Spinner from './Spinner';

function Categories() {
	const categories = useStore((state) => state.categories);
	const loading = useStore((state) => state.loading);
	const hasErrors = useStore((state) => state.hasErrors);
	const fetchCategories = useStore((state) => state.fetchCategories);

	if (loading) {
		return <Spinner />;
	}

	if (hasErrors) {
		return <p>cannot read Categories</p>;
	}

	return (
		<div className='container mt-5'>
			<div className='title text-center'>
				<h2 className='position-relative d-inline-block'>Categories</h2>
			</div>
			<div className='d-flex justify-content-center mt-3'>
				<span className='textC text-center text-muted'>
					Finding Best Products Now in Your Fingertips
				</span>
			</div>
			<button onClick={fetchCategories}>get category</button>
			<div className='row mt-2 g-4'>
				{categories.map((category) => (
					<SingleCategory
						key={category.id}
						slug={category.slug}
						name={category.name}
						categoryImage={category.image}
					/>
				))}
			</div>
		</div>
	);
}

export default Categories;
