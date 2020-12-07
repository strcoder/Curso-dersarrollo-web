import Logo from './../../assets/logo.png';

const Header = () => {
  const view = `
    <header class="Header">
      <div class="Header__MenuHamburguesa">
        <button type="button" class="btn-link">
          <i class="fas fa-bars"></i>
        </button>
        <button type="button" class="Header__MenuHamburguesa--cerrar btn-link">
          <i class="fas fa-times"></i>
        </button>
        <nav class="Header__nav--hamburguesa">
          <a href="#/products/">Productos</a>
          <a href="">Categotias</a>
          <a href="">Ofertas</a>
          <a href="">Contacto</a>
          <a href="">Ubicacion</a>
          <a href="">Sobre nosotros</a>
        </nav>
      </div>
      <figure class="Header__logo">
        <img src=${Logo} alt="">
      </figure>
      <div class="Header__MenuUsuario">
        <button type="button" class="btn-menu-usuario btn-link">
          <i class="fas fa-user"></i>
        </button>
        <nav class="Header__nav--usuario">
          <a href="">Registrarse</a>
          <a href="">Iniciar sesion</a>
        </nav>
      </div>
    </header>
  `;

  return view;
}

export default Header;
