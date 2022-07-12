import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

const PayPal = () => {
  const paypal = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, error) => {
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                description: 'From kenya +254',

                amount: {
                  currency_code: 'USD',
                  value: 500.0,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          Toastify({
            text: 'Payment successful',
            duration: 4000,
            gravity: 'bottom', // `top` or `bottom`
            position: 'center', // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: 'green',
            },
          }).showToast();
          navigate('/cart/done');
        },
        onError: (error) => {
          console.log(error);
          Toastify({
            text: 'Error occured during payment',
            duration: 4000,
            gravity: 'bottom', // `top` or `bottom`
            position: 'center', // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: 'red',
            },
          }).showToast();
        },
      })
      .render(paypal.current);
  }, []);
  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
};

export default PayPal;
