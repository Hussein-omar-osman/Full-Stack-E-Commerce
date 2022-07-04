import React from 'react';
import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';
import SingleProduct from '../componets/SingleProduct';
import Coat from '../img/c_t-shirt_men.png';

function AllProducts() {
  return (
    <>
      <Navbar />
      <section id='collection' className='py-5'>
        <div className='container'>
          <div className='title text-center'>
            <h2 className='position-relative d-inline-block'>All Products</h2>
          </div>

          <div className='row g-0'>
            <div className='d-flex flex-wrap justify-content-center mt-5 filter-button-group'>
              <div className='d-flex justify-content-center align-items-center p-2'>
                <h4>Filter-by:</h4>
              </div>
              <button
                type='button'
                className='btn m-2 text-dark active-filter-btn'
              >
                All
              </button>
              <button type='button' className='btn m-2 text-dark'>
                Electronics
              </button>
              <button type='button' className='btn m-2 text-dark'>
                Books
              </button>
              <button type='button' className='btn m-2 text-dark'>
                Fashion
              </button>
              <button type='button' className='btn m-2 text-dark'>
                Sports
              </button>
            </div>

            <div className='special-list mt-4 row gx-0 gy-3'>
              <SingleProduct name={'Coat'} price={'$ 49.00'} prodImage={Coat} />
              <SingleProduct name={'Coat'} price={'$ 49.00'} prodImage={Coat} />
              <SingleProduct name={'Coat'} price={'$ 49.00'} prodImage={Coat} />
              <SingleProduct name={'Coat'} price={'$ 49.00'} prodImage={Coat} />
              <SingleProduct name={'Coat'} price={'$ 49.00'} prodImage={Coat} />
              <SingleProduct name={'Coat'} price={'$ 49.00'} prodImage={Coat} />
              <SingleProduct name={'Coat'} price={'$ 49.00'} prodImage={Coat} />
            </div>
          </div>
        </div>
      </section>
      <nav aria-label='Page navigation example'>
        <ul class='pagination justify-content-center'>
          <li class='page-item disabled'>
            <a class='page-link'>Previous</a>
          </li>
          <li class='page-item'>
            <a class='page-link' href='#'>
              1
            </a>
          </li>
          <li class='page-item'>
            <a class='page-link' href='#'>
              2
            </a>
          </li>
          <li class='page-item'>
            <a class='page-link' href='#'>
              3
            </a>
          </li>
          <li class='page-item'>
            <a class='page-link' href='#'>
              Next
            </a>
          </li>
        </ul>
      </nav>
      <Footer />
    </>
  );
}

export default AllProducts;
