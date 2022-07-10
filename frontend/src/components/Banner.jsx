import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {
	BsFillArrowRightCircleFill,
	BsFillArrowLeftCircleFill,
} from 'react-icons/bs';
import Button from 'react-bootstrap/Button';

import HeroOne from '../assets/images/hero-one.png';
import HeroTwo from '../assets/images/hero-two.png';
import HeroThree from '../assets/images/hero-three.png';

const Banner = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel
			pause
			activeIndex={index}
			onSelect={handleSelect}
			nextIcon={<BsFillArrowRightCircleFill className='banner-icon' />}
			prevIcon={<BsFillArrowLeftCircleFill className='banner-icon' />}>
			<Carousel.Item interval={9000}>
				<img className='banner-img' src={HeroOne} alt='First slide' />

				<Carousel.Caption className='text-lg-start'>
					<h2 className='text-lg-start'>First slide label</h2>
					<p className='text-lg-start'>
						Nulla vitae elit libero, a pharetra augue mollis interdum.
					</p>
					<Button variant='outline-light'>Show more</Button>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={9000}>
				<img src={HeroTwo} alt='Second slide' className='banner-img' />

				<Carousel.Caption className='text-lg-start'>
					<h2 className=''>Second slide label</h2>
					<p className=''>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
					<Button variant='outline-light'>Show more</Button>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={9000}>
				<img className='banner-img' src={HeroThree} alt='Third slide' />

				<Carousel.Caption className='text-lg-start'>
					<h2 className='text-lg-start'>Third slide label</h2>
					<p className='text-lg-start'>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
					<Button variant='outline-light'>Show more</Button>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default Banner;
