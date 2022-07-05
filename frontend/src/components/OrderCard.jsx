import React from 'react';
import Card from 'react-bootstrap/Card';
import HeroOne from '../assets/images/hero-one.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { MdClose } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import CardGroup from 'react-bootstrap/CardGroup';

const OrderCard = () => {
	return (
		<Card
			border='secondary'
			className='mb-2 border-top-0 border-end-0 border-start-0 rounded-0 align-items-center'>
			<Container className='p-3 justify-content-between'>
				<Row>
					<Col xs={1}>
						<img className='order-img' src={HeroOne} alt='First slide' />
					</Col>
					<Col xs={5} className='ctr'>
						<CardGroup className='justify-content-between align-items-center'>
							<Card.Title className='text-primary'>Product One</Card.Title>
							<Card.Text className='text-dark'>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
						</CardGroup>
					</Col>
					<Col xs={3} className='ctr'>
						<CardGroup className='align-items-center justify-content-between'>
							<Button variant='outline-dark'>
								<AiOutlineMinus />
							</Button>
							<Card.Subtitle className='text-muted p-3'>0</Card.Subtitle>
							<Button>
								<AiOutlinePlus />
							</Button>
						</CardGroup>
					</Col>
					<Col xs={2} className='ctr'>
						<CardGroup className='justify-content-center align-items-center'>
							<Card.Subtitle className='text-muted'>KES 20000</Card.Subtitle>
						</CardGroup>
					</Col>
					<Col xs={1} className='ctr'>
						<CardGroup className='justify-content-end align-items-end'>
							<Button variant='outline-danger'>
								<MdClose />
							</Button>
						</CardGroup>
					</Col>
				</Row>
			</Container>
		</Card>
	);
};

export default OrderCard;

{
	/* <Row className='align-items-center w-100 justify-content-between'>
	<Col md={1}></Col>
	<Col md={5}>
		<Card.Body></Card.Body>
	</Col>
	<Col md={2}></Col>
	<Col md={2} className='justify-content-center'></Col>
	<Col className='align-items-end justify-content-end'></Col>
</Row>; */
}

// <Stack
// 	className='justify-content-center'
// 	direction='horizontal'
// 	gap={4}></Stack>;

{
	/* <Container className='align-items-center pb-2' fluid></Container>; */
}
