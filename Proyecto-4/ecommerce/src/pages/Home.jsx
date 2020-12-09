import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts'
import RamdomItems from '../components/RandomItems';

const Home = () => {
  return (
    <section className='Home'>
      <Hero />
      <RamdomItems />
      <FeaturedProducts />
    </section>
  );
}

export default Home;