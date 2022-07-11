import React from 'react';
import Container from 'react-bootstrap/Container';
import { OrderCard } from '../../components';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import { MdOutlineArrowForward } from 'react-icons/md';
import Card from 'react-bootstrap/Card';
import { Navigate } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';

const Orders = () => {
	return (
		<Container className='p-5'>
			<h1 className='px-4 text-primary'>Your Orders</h1>
			<Container className='mt-4'>
				<OrderCard />
				<OrderCard />
				<OrderCard />
				<Card border='secondary' className='mt-3 pe-5 pt-2'>
					<CardGroup className='justify-content-end align-items-center p-2'>
						<Card.Title className='text-primary pe-3'>Total amount:</Card.Title>
						<Card.Title className='text-dark'>KES 600</Card.Title>
					</CardGroup>
				</Card>
			</Container>

			<Stack
				className='justify-content-between mt-3 px-2'
				direction='horizontal'>
				<Nav.Item className=''>
					<LinkContainer className='' to='/shop'>
						<Button
							variant='outline-primary'
							className='txt-b btn-w'
							onClick={<Navigate to='/shop' replace={true} />}>
							Back
						</Button>
					</LinkContainer>
				</Nav.Item>
				<Nav.Item className=''>
					<LinkContainer className='' to='/cart/billing'>
						<Button className='txt-b'>
							Continue
							<MdOutlineArrowForward className=' ms-2' />
						</Button>
					</LinkContainer>
				</Nav.Item>
			</Stack>
		</Container>
	);
};

export default Orders;
