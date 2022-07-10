import React, { useEffect } from 'react';
import {
	Banner,
	Categories,
	Collection,
	Discount,
	Footer,
	Newsletter,
} from '../components';
import Container from 'react-bootstrap/Container';

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Container className='mt-3' fluid>
			<Banner />
			<Collection />
			<Discount />
			<Categories />
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default Home;
