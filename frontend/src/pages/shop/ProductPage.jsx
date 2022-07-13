import React, { useEffect, useState } from 'react';
import { Footer, SingleProduct } from '../../components';
import '../../styles/extra.css';
import useFetch from '../../services/useFetch';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductPage() {
  const [mainProd, setMainProd] = useState({});

  const { id } = useParams();

  // console.log(mainProd);
  // console.log(data);

  useEffect(() => {
    window.scrollTo(0, 0);

    axios
      .get(`https://fichuastore.herokuapp.com/api/shop/product/${id}/`)
      .then((response) => {
        setMainProd(response.data);
      });
  }, [id]);

  const { data } = useFetch(
    `https://fichuastore.herokuapp.com/api/shop/similar_items/${mainProd.category}/`
  );
  return (
    <>
      <div className='container mt-5 mb-5'>
        <div className='card pro'>
          <div className='row g-0'>
            <div className='col-md-6 border-end'>
              <div className='d-flex flex-column justify-content-center'>
                <div className='main_image'>
                  {' '}
                  <img
                    src={`https://res.cloudinary.com/fichua-store/${mainProd.photo}`}
                    id='main_product_image'
                    width='350'
                    alt=''
                  />{' '}
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='p-3 right-side'>
                <div className='d-flex justify-content-between align-items-center'>
                  <h3>{mainProd.name}</h3>
                </div>
                <div className='mt-2 pr-3 content'>
                  <p>{mainProd.details}</p>
                </div>
                <h3>Ksh. {mainProd.price}</h3>

                <div className='rating mt-3'>
                  <span className=''>
                    <i style={{ color: '#f19c3a' }} className='fa fa-star'></i>
                  </span>
                  <span className=''>
                    <i style={{ color: '#f19c3a' }} className='fa fa-star'></i>
                  </span>
                  <span className=''>
                    <i style={{ color: '#f19c3a' }} className='fa fa-star'></i>
                  </span>
                  <span className=''>
                    <i style={{ color: '#f19c3a' }} className='fa fa-star'></i>
                  </span>
                  <span className=''>
                    <i className='fa fa-star'></i>
                  </span>

                  <span style={{ marginLeft: '10px' }}>441 reviews</span>
                </div>

                <div className='d-flex flex-row mt-5 gap-3'>
                  {' '}
                  <button
                    style={{ backgroundColor: '#34b3e5', color: '#fff' }}
                    className='btn btn-primary mt-1'
                  >
                    Buy now
                  </button>
                  <button className='btn btn-primary mt-1'>Add to Cart</button>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='py-5'>
        <div className='container'>
          <div className='title text-center'>
            <h2 className='position-relative d-inline-block'>
              Related Products
            </h2>
          </div>

          <div className='container special-list'>
            <div className='row'>
              {data.map((item) => {
                return (
                  <div key={item.id} className='col-lg-3'>
                    <SingleProduct product={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ProductPage;
