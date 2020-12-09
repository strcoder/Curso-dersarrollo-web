import React from 'react';
import partes from '../../assets/partes.png';
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import './stiles.css';

//ToDo arreglar boton de las flechitas
const FeaturedProducts = () => {
  return (
    <React.Fragment>
    <h3>Feature Items</h3>
      <section className='FeaturedProducts'>
        <button className='arrow'>
          <AiFillCaretLeft/>
        </button>
        <div className='carousel__item'>
            <figure className='carousel__img'>
              <img src={partes} alt='' />
            </figure>
            <div className='carousel__titles'>
              <h4>Titulo</h4>
              <h5>Descripción</h5>
            </div>
        </div>
        <div className='carousel__item'>
            <figure className='carousel__img'>
              <img src={partes} alt='' />
            </figure>
            <div className='carousel__titles'>
              <h4>Titulo</h4>
              <h5>Descripción</h5>
            </div>
        </div>
        <div className='carousel__item'>
            <figure className='carousel__img'>
              <img src={partes} alt='' />
            </figure>
            <div className='carousel__titles'>
              <h4>Titulo</h4>
              <h5>Descripción</h5>
            </div>
        </div>
        <div className='carousel__item'>
            <figure className='carousel__img'>
              <img src={partes} alt='' />
            </figure>
            <div className='carousel__titles'>
              <h4>Titulo</h4>
              <h5>Descripción</h5>
            </div>
        </div>
        <button className='arrow'>
        <AiFillCaretRight/>
        </button>
      </section>
    </React.Fragment>
  );
}

export default FeaturedProducts;