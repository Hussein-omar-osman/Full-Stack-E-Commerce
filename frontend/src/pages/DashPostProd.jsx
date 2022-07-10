import React, { useState } from 'react';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

function DashPostProd() {
  const [imgData, setImgData] = useState('');
  const [postData, setPostData] = useState({
    name: '',
    price: '',
    stock: '',
    features: '',
    description: '',
    img: '',
  });
  // console.log(postData);

  const handlePost = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let file of imgData) {
      formData.append('file', file);
    }
    formData.append('upload_preset', 'fichua_products');

    const data = await fetch(
      'https://api.cloudinary.com/v1_1/dxbahdy2n/image/upload',
      {
        method: 'POST',
        body: formData,
      }
    );
    const jData = await data.json();
    console.log(data);
    console.log(jData);
    setPostData((prev) => ({ ...prev, img: jData.secure_url }));

    if (data.status === 200) {
      console.log('now you can post your rest of the data');
      const { name, price, description, features, stock } = postData;
      const content = {
        name: name,
        vendor_id: 1,
        img: jData.secure_url,
        price: price,
        stock: stock,
        description: description,
        category_id: 1,
        features: features,
      };
      const option = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(content),
      };
      const res = await fetch(
        'http://localhost:8000/api/shop/post/product/',
        option
      );
      const data = await res.json();
      if (res.status === 200) {
        Toastify({
          text: 'Success',
          duration: 3000,
          gravity: 'bottom', // `top` or `bottom`
          position: 'center', // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: 'green',
          },
        }).showToast();
      } else {
        Toastify({
          text: 'Error occured when posting the product details',
          duration: 3000,
          // close: true,
          gravity: 'bottom', // `top` or `bottom`
          position: 'center', // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: 'red',
          },
        }).showToast();
      }
    } else {
      console.log('Image Upload was unsucesssful');
      Toastify({
        text: 'Error occured when uploading the product image',
        duration: 3000,
        // close: true,
        gravity: 'bottom', // `top` or `bottom`
        position: 'center', // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: 'red',
        },
      }).showToast();
    }
  };

  return (
    <div className='container pt-3 pb-2'>
      <h6>Post a Product</h6>
      <form onSubmit={(e) => handlePost(e)}>
        <div className='form-floating mb-3'>
          <input
            type='text'
            className='form-control'
            id='floatingText'
            placeholder='Name'
            name='name'
            required
            value={postData.name}
            onChange={(e) =>
              setPostData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <label htmlFor='floatingText'>Name</label>
        </div>
        <div className='form-floating mb-3'>
          <input
            type='number'
            className='form-control'
            id='floatingPrice'
            placeholder='Price'
            name='price'
            required
            value={postData.price}
            onChange={(e) =>
              setPostData((prev) => ({ ...prev, price: e.target.value }))
            }
          />
          <label htmlFor='floatingPrice'>Price</label>
        </div>
        <div className='form-floating mb-3'>
          <input
            type='number'
            className='form-control'
            id='floatingStock'
            placeholder='Stock'
            name='stock'
            required
            value={postData.stock}
            onChange={(e) =>
              setPostData((prev) => ({ ...prev, stock: e.target.value }))
            }
          />
          <label htmlFor='floatingStock'>Stock</label>
        </div>
        <div className='form-floating mb-3'>
          <textarea
            className='form-control'
            id='floatingFea'
            placeholder='Features'
            required
            value={postData.features}
            onChange={(e) =>
              setPostData((prev) => ({ ...prev, features: e.target.value }))
            }
          ></textarea>
          <label htmlFor='floatingFea'>Features</label>
        </div>
        <div className='form-floating mb-3'>
          <textarea
            className='form-control'
            id='floatingDes'
            placeholder='Description'
            required
            value={postData.description}
            onChange={(e) =>
              setPostData((prev) => ({ ...prev, description: e.target.value }))
            }
          ></textarea>
          <label htmlFor='floatingDesc'>Description</label>
        </div>

        <div className='mb-3'>
          <label htmlFor='formFile' className='form-label'>
            Upload an Image
          </label>
          <input
            className='form-control'
            type='file'
            required
            id='formFile'
            onChange={(e) => setImgData(e.target.files)}
          />
        </div>
        <button className='btn btn-primary-outline'>Post</button>
      </form>

      {/* <img src={imgUrl} alt='' /> */}
    </div>
  );
}

export default DashPostProd;
