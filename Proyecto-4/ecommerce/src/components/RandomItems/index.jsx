import React from 'react';
import { Link } from 'react-router-dom';
import Ramdom1 from './../../assets/ramdom1.svg';
import Ramdom2 from './../../assets/ramdom2.svg';
import Ramdom3 from './../../assets/ramdom3.svg';
import './styles.css';

const RamdomItems = () => {
  return (
    <section className='RamdomItems'>
      <div className='RamdomItems__item item--1'>
        <figure className='RamdomItems__item--back'>
          <img src={Ramdom1} alt="" />
        </figure>
        <div className='RamdomItems__item--front'>
          <h6>New year</h6>
          <h4>Lookbook</h4>
          <Link to='/' className='btn-white'>
            Conocer más
          </Link>
        </div>
      </div>

      <div className='RamdomItems__item item--2'>
        <div className='RamdomItems__item--front'>
          <h6>Algo random</h6>
          <h4>60% off</h4>
        </div>
        <figure className='RamdomItems__item--back'>
          <img src={Ramdom2} alt="" className='item--back--image' />
        </figure>
      </div>

      <div className='RamdomItems__item item--3'>
        <figure className='RamdomItems__item--back'>
          <img src={Ramdom3} alt="" className='item--back--image' />
        </figure>
        <div className='RamdomItems__item--front'>
          <h6>Algo random</h6>
          <h4>Shop men</h4>
        </div>
      </div>
    </section>
  );
}

export default RamdomItems;