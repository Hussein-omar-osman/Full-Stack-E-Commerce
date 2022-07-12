import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

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
                description: 'Cool Looking table',
                amount: {
                  currency_code: 'USD',
                  value: 200.0,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          navigate('/cart/done');
        },
        onError: (error) => {
          console.log(error);
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
