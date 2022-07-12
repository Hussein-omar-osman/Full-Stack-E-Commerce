import React, { useEffect, useState } from 'react';
import { Footer, SingleProduct, Spinner } from '../../components';
import Container from 'react-bootstrap/Container';
import useFetch from '../../services/useFetch';

const allProdUrl = 'https://fichuastore.herokuapp.com/api/shop/products/';
const fashionUrl =
  'https://fichuastore.herokuapp.com/api/shop/certain_category/40b8f7a9-afd1-402a-a8cb-0b0b8bd7e08c/';
const elecrtonicsUrl =
  'https://fichuastore.herokuapp.com/api/shop/certain_category/a6f1350d-02ef-4486-b363-32ac51deb5d8/';
const outdoorsUrl =
  'https://fichuastore.herokuapp.com/api/shop/certain_category/bc89c934-2dd5-4a49-9435-0201d6be2af8/';
const beautyUrl =
  'https://fichuastore.herokuapp.com/api/shop/certain_category/d27f5d2d-2b7c-4ff2-b9ed-7f5eae0cc2a5/';

const Shop = () => {
  const [categoryUrl, setCategoryUrl] = useState(allProdUrl);
  const { data: products, loading, error } = useFetch(categoryUrl);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // if (loading) return <Spinner />;

  // if (error) console.log(error);

  return (
    <Container fluid>
      <section className=''>
        <div className='container'>
          <h1 className='text-primary text-center mt-5'>Shop</h1>

          <div className='row g-0'>
            <div className='d-flex flex-wrap justify-content-center mt-3 mb-2 filter-button-group'>
              <button
                type='button'
                className='btn m-2 text-white active-filter-btn'
                onClick={(e) => setCategoryUrl(allProdUrl)}
              >
                All
              </button>
              <button
                type='button'
                className='btn m-2 text-dark'
                onClick={(e) => setCategoryUrl(elecrtonicsUrl)}
              >
                Electronics
              </button>
              <button
                type='button'
                className='btn m-2 text-dark'
                onClick={(e) => setCategoryUrl(beautyUrl)}
              >
                Beauty
              </button>
              <button
                type='button'
                className='btn m-2 text-dark'
                onClick={(e) => setCategoryUrl(outdoorsUrl)}
              >
                Outdoors
              </button>
              <button
                type='button'
                className='btn m-2 text-dark'
                onClick={(e) => setCategoryUrl(fashionUrl)}
              >
                Fashion
              </button>
            </div>

            {loading ? (
              <Spinner />
            ) : (
              <div className='gw'>
                {products.map((item) => (
                  <SingleProduct
                    name={item.name}
                    photo={item.photo}
                    price={item.price}
                    slug={item.slug}
                    id={item.id}
                  />
                ))}
              </div>
            )}

            {error && (
              <h3 style={{ color: 'red' }}>Error occured {error.message}</h3>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </Container>
  );
};

export default Shop;
