import React, { useState, useEffect, useRef } from 'react';
import {
	PayPalScriptProvider,
	PayPalHostedFieldsProvider,
	PayPalHostedField,
	usePayPalHostedFields,
} from '@paypal/react-paypal-js';

const CUSTOM_FIELD_STYLE = {};
const INVALID_COLOR = {
	color: '#dc3545',
};

const SubmitPayment = ({ customStyle }) => {
	const [paying, setPaying] = useState(false);
	const cardHolderName = useRef(null);
	const hostedField = usePayPalHostedFields();

	const handleClick = () => {
		if (!hostedField?.cardFields) {
			const childErrorMessage =
				'Unable to find any child components in the <PayPalHostedFieldsProvider />';
			action(ERROR)(childErrorMessage);
			throw new Error(childErrorMessage);
		}
		const isFormInvalid =
			Object.values(hostedField.cardFields.getState().fields).some(
				(field) => !field.isValid
			) || !cardHolderName?.current?.value;

		if (isFormInvalid) {
			return alert('The payment form is invalid');
		}
		setPaying(true);
		hostedField.cardFields
			.submit({ cardHolderName: cardHolderName?.current?.value })
			.then((data) => {
				fetch('api/user/billing', { method: 'post' })
					.then((response) => response.json())
					.then((data) => {
						console.log(data);
					})
					.catch((err) => {
						console.log(err);
					})
					.finally(() => {
						setPaying(false);
					});
				console.log(data);
			})
			.catch((err) => {
				setPaying(false);
				console.log(err);
			});
	};

	return (
		<>
			<input
				id='card-holder'
				ref={cardHolderName}
				className='card-field'
				style={{ ...customStyle, outline: 'none' }}
				type='text'
				placeholder='Full name'
			/>
			<button
				className={`btn${paying ? '' : ' btn-primary'}`}
				style={{ float: 'right' }}
				onClick={handleClick}>
				{paying ? <div className='spinner tiny' /> : 'Pay'}
			</button>
		</>
	);
};

function PayPalCheckout() {
	const [clientToken, setClientToken] = useState(null);

	useEffect(() => {
		(async () => {
			const response = await (
				await fetch(
					'https://braintree-sdk-demo.herokuapp.com/api/paypal/hosted-fields/auth'
				)
			).json();
			setClientToken(response?.client_token || response?.clientToken);
		})();
	}, []);

	return (
		<>
			{clientToken ? (
				<PayPalScriptProvider
					options={{
						'client-id':
							'AdOu-W3GPkrfuTbJNuW9dWVijxvhaXHFIRuKrLDwu14UDwTTHWMFkUwuu9D8I1MAQluERl9cFOd7Mfqe',
						components: 'buttons,hosted-fields',
						'data-client-token': clientToken,
						intent: 'capture',
						vault: false,
					}}>
					<PayPalHostedFieldsProvider
						styles={{
							'.valid': { color: '#28a745' },
							'.invalid': { color: '#dc3545' },
							input: { 'font-family': 'monospace', 'font-size': '16px' },
						}}
						createOrder={function () {
							return fetch('api/checkout/paypal/', {
								method: 'post',
								headers: {
									'Content-Type': 'application/json',
								},
								body: JSON.stringify({
									purchase_units: [
										{
											amount: {
												value: '2', // Here change the amount if needed
												currency_code: 'USD', // Here change the currency if needed
											},
										},
									],
									intent: 'capture',
								}),
							})
								.then((response) => response.json())
								.then((order) => {
									// Your code here after create the order
									return order.id;
								})
								.catch((err) => {
									alert(err);
								});
						}}>
						<PayPalHostedField
							id='card-number'
							className='card-field'
							style={CUSTOM_FIELD_STYLE}
							hostedFieldType='number'
							options={{
								selector: '#card-number',
								placeholder: '4111 1111 1111 1111',
							}}
						/>
						<PayPalHostedField
							id='cvv'
							className='card-field'
							style={CUSTOM_FIELD_STYLE}
							hostedFieldType='cvv'
							options={{
								selector: '#cvv',
								placeholder: '123',
								maskInput: true,
							}}
						/>
						<PayPalHostedField
							id='expiration-month-1'
							style={CUSTOM_FIELD_STYLE}
							className='card-field'
							hostedFieldType='expirationMonth'
							options={{
								selector: '#expiration-month-1',
								placeholder: 'MM',
							}}
						/>
						<PayPalHostedField
							id='expiration-year-1'
							style={CUSTOM_FIELD_STYLE}
							className='card-field'
							hostedFieldType='expirationYear'
							options={{
								selector: '#expiration-year-1',
								placeholder: 'YYYY',
							}}
						/>
						<SubmitPayment customStyle={{}} />
					</PayPalHostedFieldsProvider>
				</PayPalScriptProvider>
			) : (
				<h1>Loading token...</h1>
			)}
		</>
	);
}

export default PayPalCheckout;
