import React from 'react';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

function Discount() {
  return (
    <section id='offers' className='brs m-3'>
      <div className='tint px-5 brs'>
        <div className='row d-flex align-items-center justify-content-center text-center justify-content-lg-start text-lg-start'>
          <div className='offers-content'>
            <span className='text-secondary'>Discount Up To 20%</span>
            <h2 className='mt-2 mb-2 text-white txt-xl text-lg-start'>
              Grand Sale Offer!
            </h2>
            <div className='mb-4'>
              <span className='text-white'>For all Products</span>
            </div>
            <LinkContainer to={'/shop'}>
              <Button
                variant='primary'
                type='button'
                className='px-4 py-2 text-white '
              >
                Buy Now
              </Button>
            </LinkContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discount;
