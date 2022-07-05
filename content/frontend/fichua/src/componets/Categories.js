import React from 'react';
import { Link } from 'react-router-dom';

function Categories() {
  return (
    <div className='container mt-5'>
      <div className='title text-center'>
        <h2 className='position-relative d-inline-block'>Categories</h2>
      </div>
      <div className='d-flex justify-content-center mt-3'>
        {' '}
        <span className='textC text-center text-muted'>
          Finding Best Products Now in Your Fingertips
        </span>
      </div>
      <div className='row mt-2 g-4'>
        <div className='col-md-3'>
          <div className='cardC p-1'>
            <div className='d-flex justify-content-between align-items-center p-2'>
              <div className='flex-column lh-1 imagename'>
                {' '}
                <span>Mobile</span> <span>Phones</span>{' '}
              </div>
              <Link to={'/category/Mobile-Phones'}>
                <div>
                  {' '}
                  <img
                    src='https://i.imgur.com/b9zkoz0.jpg'
                    height='100'
                    width='100'
                    alt=''
                  />{' '}
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className='col-md-3'>
          <div className='cardC p-2'>
            <div className='d-flex justify-content-between align-items-center p-2'>
              <div className='flex-column lh-1 imagename'>
                {' '}
                <span>Head</span> <span>Phones</span>{' '}
              </div>
              <Link to={'/category/Head-Phones#Head-Phones'}>
                <div>
                  {' '}
                  <img
                    src='https://i.imgur.com/SHWASPG.png'
                    height='100'
                    width='100'
                    alt=''
                  />{' '}
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* <Link to={'/category/'}></Link> */}
        <div className='col-md-3'>
          <div className='cardC p-2'>
            <div className='d-flex justify-content-between align-items-center p-2'>
              <div className='flex-column lh-1 imagename'>
                {' '}
                <span>Smart</span> <span>Watches</span>{' '}
              </div>
              <div>
                {' '}
                <img
                  src=' https://i.imgur.com/Ya0OXCv.png'
                  height='100'
                  width='100'
                  alt=''
                />{' '}
              </div>
            </div>
          </div>
        </div>
        {/* <Link to={'/category/'}></Link> */}
        <div className='col-md-3'>
          <div className='cardC p-2'>
            <div className='d-flex justify-content-between align-items-center p-2'>
              <div className='flex-column lh-1 imagename'>
                {' '}
                <span>Air</span> <span>Purifiers</span>{' '}
              </div>
              <div>
                {' '}
                <img
                  src='https://i.imgur.com/2gvGwbh.png'
                  height='80'
                  width='80'
                  alt=''
                />{' '}
              </div>
            </div>
          </div>
        </div>
        {/* <Link to={'/category/'}></Link> */}
        <div className='col-md-3'>
          <div className='cardC p-2tr5'>
            <div className='d-flex justify-content-between align-items-center p-2'>
              <div className='flex-column lh-1 imagename'>
                {' '}
                <span>Vacuum</span> <span>Cleaners</span>{' '}
              </div>
              <div>
                {' '}
                <img
                  src='https://i.imgur.com/UMQJpSG.png'
                  height='100'
                  width='100'
                  alt=''
                />{' '}
              </div>
            </div>
          </div>
        </div>
        {/* <Link to={'/category/'}></Link> */}
        <div className='col-md-3'>
          <div className='cardC p-2'>
            <div className='d-flex justify-content-between align-items-center p-2'>
              <div className='flex-column lh-1 imagename'>
                {' '}
                <span>Washing</span> <span>Machines</span>{' '}
              </div>
              <div>
                {' '}
                <img
                  src='https://i.imgur.com/e9CyhXR.png'
                  height='100'
                  width='100'
                  alt=''
                />{' '}
              </div>
            </div>
          </div>
        </div>
        {/* <Link to={'/category/'}></Link> */}
        <div className='col-md-3'>
          <div className='cardC p-2'>
            <div className='d-flex justify-content-between align-items-center p-2'>
              <div className='flex-column lh-1 imagename'>
                {' '}
                <span>Smart</span> <span>Televisions</span>{' '}
              </div>
              <div>
                {' '}
                <img
                  src=' https://i.imgur.com/Zq8VigZ.png'
                  height='100'
                  width='100'
                  alt=''
                />{' '}
              </div>
            </div>
          </div>
        </div>
        {/* <Link to={'/category/'}></Link> */}
        <div className='col-md-3'>
          <div className='cardC p-2'>
            <div className='d-flex justify-content-between align-items-center p-2'>
              <div className='flex-column lh-1 imagename'>
                {' '}
                <span>Laptops</span>{' '}
              </div>
              <div>
                {' '}
                <img
                  src='https://i.imgur.com/6pK5oZl.jpg'
                  height='100'
                  width='100'
                  alt=''
                />{' '}
              </div>
            </div>
          </div>
        </div>
        {/* <Link to={'/category/'}></Link> */}
      </div>
    </div>
  );
}

export default Categories;
