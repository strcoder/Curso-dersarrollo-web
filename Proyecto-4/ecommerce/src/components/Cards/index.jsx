import React from 'react';
import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './styles.css';

const Cards = () => {
  return (
    <section className='Cards'>
      <h2>We have the plan for you to give you best</h2>
      <div className='Cards__list'>
        <div className='Cards__list--item'>
          <i className='item--icon'>
            <FaQuestion />
          </i>
          <p><strong>Problem solver</strong></p>
          <p>We have the best services for you to make and this is one of the best service</p>
          <Link to='/' className='btn-link'>Read More</Link>
        </div>

        <div className='Cards__list--item'>
          <i className='item--icon'>
            <FaQuestion />
          </i>
          <p><strong>Problem solver</strong></p>
          <p>We have the best services for you to make and this is one of the best service</p>
          <Link to='/' className='btn-link'>Read More</Link>
        </div>

        <div className='Cards__list--item'>
          <i className='item--icon'>
            <FaQuestion />
          </i>
          <p><strong>Problem solver</strong></p>
          <p>We have the best services for you to make and this is one of the best service</p>
          <Link to='/' className='btn-link'>Read More</Link>
        </div>
      </div>
    </section>
  );
}

export default Cards;