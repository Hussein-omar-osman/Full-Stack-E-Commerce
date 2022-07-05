import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductPage from './pages/ProductPage';
import SingleCategory from './pages/SingleCategory';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='products' element={<AllProducts />} />
        <Route path='login' element={<Login />} />
        <Route path='category/:name' element={<SingleCategory />} />
        <Route path='signup' element={<Signup />} />
        <Route path='product' element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
