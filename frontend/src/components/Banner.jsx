import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {
	BsFillArrowRightCircleFill,
	BsFillArrowLeftCircleFill,
} from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import { deals } from '../lib/data';

const Banner = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel
			id='carousel'
			className='rounded-3'
			pause
			activeIndex={index}
			onSelect={handleSelect}
			nextIcon={<BsFillArrowRightCircleFill className='banner-icon' />}
			prevIcon={<BsFillArrowLeftCircleFill className='banner-icon' />}>
			{deals.map((deal) => (
				<Carousel.Item interval={9000} className='banner item'>
					<img className='banner-img' src={deal.photo} alt='First slide' />

					<Carousel.Caption className='text-lg-start'>
						<h1 className='text-lg-start text-secondary'>{deal.title}</h1>
						<h4 className='text-lg-start'>{deal.caption}</h4>
						<Button variant='primary mt-2'>Discover</Button>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default Banner;
