import React from 'react';
import Cards from '../components/Cards';
import Hero from '../components/Hero';
// import FeaturedProducts from '../components/FeaturedProducts'
// import RamdomItems from '../components/RandomItems';

const Home = () => {
  return (
    <section className='Home'>
      <Hero />
      <Cards />
      {/* <RamdomItems />
      <FeaturedProducts /> */}
    </section>
  );
}

export default Home;