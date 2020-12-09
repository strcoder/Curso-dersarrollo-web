import React from 'react';
import { Link } from 'react-router-dom';
import Image from './../../assets/Rin-Seat.png';
import './styles.css';

const Hero = () => {
  return (
    <div className='Hero'>
      <div className='Hero__titles'>
        <h1>Apasionados por los autos</h1>
        <h2>Encuentra los mejores accesorios y productos para tu auto</h2>
      </div>
      <div className='Hero__images'>
        <figure>
          <img src={Image} alt="Llanta" />
        </figure>
        <Link to='/header' title='Si no es ahora será mañana' className='btn'>Comienza ahora</Link>
      </div>
    </div>
  );
}

export default Hero;