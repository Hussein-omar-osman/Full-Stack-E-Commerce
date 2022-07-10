import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { MdOutlineArrowForward } from 'react-icons/md';
import { Navigate } from 'react-router-dom';
import { FireWorks } from '../components';

const Success = () => {
	return (
		<Container className='p-4'>
			<FireWorks />
			<h1 className='text-center text-primary'>Success!</h1>
			<Navbar fixed='bottom' className='justify-content-center m-5'>
				<Nav.Item className='nav-wc'>
					<LinkContainer className='' to='/shop'>
						<Button
							className='txt-b'
							onClick={<Navigate to='/shop' replace={true} />}>
							Back to Shop
							<MdOutlineArrowForward className=' ms-2' />
						</Button>
					</LinkContainer>
				</Nav.Item>
			</Navbar>
		</Container>
	);
};

export default Success;
