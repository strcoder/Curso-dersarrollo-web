import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './../../assets/logo.png';
import './styles.css';


const Header = () => {
  return (
    <header className='Header'>
      <figure className='Header__logo'>
        <img src={Logo} alt="logo" className='Header__logo--image' />
      </figure>
      <nav className='Header__nav'>
        <Link to='/' className='Header__nav--item'>
          Tienda
        </Link>
        <Link to='/' className='Header__nav--item'>
          Blog
        </Link>
        <Link to='/' className='Header__nav--item'>
          Contacto
        </Link>
        <Link to='/' className='Header__nav--button outline'>
          Registrate
        </Link>
        <Link to='/' className='Header__nav--button'>
          Iniciar sesión
        </Link>
      </nav>
    </header>
  );
}

export default Header;