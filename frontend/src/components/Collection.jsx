import React, { useState } from 'react';
import SingleProduct from './SingleProduct';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import useFetch from '../services/useFetch';
import { Spinner } from '.';

const bestSellerUrl =
  'https://fichuastore.herokuapp.com/api/shop/similar_items/a6f1350d-02ef-4486-b363-32ac51deb5d8/';
const fearuredUrl =
  'https://fichuastore.herokuapp.com/api/shop/similar_items/bc89c934-2dd5-4a49-9435-0201d6be2af8/';
const newArrivalUrl =
  'https://fichuastore.herokuapp.com/api/shop/similar_items/d27f5d2d-2b7c-4ff2-b9ed-7f5eae0cc2a5/';

function Collection() {
  const [selected, setSelected] = useState('Best Sellers');
  const [collectionUrl, setCollectionUrl] = useState(bestSellerUrl);
  const { data, loading, error } = useFetch(collectionUrl);
  console.log(data);

  return (
    <section id='collection' className='py-5 px-3'>
      <div className=''>
        <h1 className='txt-xl text-lg-center'>New Collection</h1>

        <div className='row g-0'>
          <div className='d-flex flex-wrap justify-content-center mt-5 filter-button-group'>
            <Nav fill variant='pills'>
              <Nav.Item>
                <Button
                  type='button'
                  variant='primary'
                  className={`m-2 cbtn ${
                    selected === 'Best Sellers' ? 'active-filter-btn' : ''
                  }`}
                  onClick={() => {
                    setSelected('Best Sellers');
                    setCollectionUrl(bestSellerUrl);
                  }}
                >
                  Best Sellers
                </Button>
              </Nav.Item>
              <Nav.Item>
                <Button
                  variant='primary'
                  type='button'
                  className={`m-2 cbtn ${
                    selected === 'Featured' ? 'active-filter-btn' : ''
                  }`}
                  onClick={() => {
                    setSelected('Featured');
                    setCollectionUrl(fearuredUrl);
                  }}
                >
                  Featured
                </Button>
              </Nav.Item>
              <Nav.Item>
                <Button
                  variant='primary'
                  type='button'
                  className={`m-2 cbtn ${
                    selected === 'New Arrival' ? 'active-filter-btn' : ''
                  }`}
                  onClick={() => {
                    setSelected('New Arrival');
                    setCollectionUrl(newArrivalUrl);
                  }}
                >
                  New Arrivals
                </Button>
              </Nav.Item>
              <Nav.Item>
                <LinkContainer to={'/shop'}>
                  <Button variant='primary' type='button' className='m-2 cbtn'>
                    All
                  </Button>
                </LinkContainer>
              </Nav.Item>
            </Nav>
          </div>
          {loading ? (
            <Spinner />
          ) : (
            <div className='gw mt-4'>
              {data.map((prod) => (
                <SingleProduct key={prod.id} product={prod} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Collection;
