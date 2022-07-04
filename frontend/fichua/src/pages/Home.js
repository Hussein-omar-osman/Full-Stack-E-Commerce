import React from 'react';
import Footer from '../componets/Footer';
import Newsletter from '../componets/Newsletter';
import Navbar from '../componets/Navbar';
import Collection from '../componets/Collection';
import Carasel from '../componets/Carasel';
import Discount from '../componets/Discount';
import Categories from '../componets/Categories';

function Home() {
  return (
    <>
      <Navbar />
      <Carasel />
      <Collection />
      <Discount />
      <Categories />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
