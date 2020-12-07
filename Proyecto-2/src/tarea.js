const app = document.getElementById('app');
//menu hamburguesa
const header = document.createElement('header');
const headerMenu = document.createElement('div');
const buttonMenu = document.createElement('button');
const buttonMenuIcon = document.createElement('i');
const buttonMenuClose = document.createElement('button');
const buttonMenuCloseIcon = document.createElement('i');
const headerNav = document.createElement('nav');
const headerNavLinkProductos = document.createElement('a');
const headerNavLinkOfertas = document.createElement('a');
const headerNavLinkContacto = document.createElement('a');
//menu usuario
const headerLogo = document.createElement('figure');
const headerLogoImage = document.createElement('img');
const headerMenuUsuario = document.createElement('div');
const buttonMenuUsuario = document.createElement('button');
const buttonMenuUsuarioIcon = document.createElement('i');
const headerNavUsuario = document.createElement('nav');
const headerNavUsuarioR = document.createElement('a');
const headerNavUsuarioI = document.createElement('a');

buttonMenuIcon.className = 'fas fa-bars';
buttonMenu.type = 'button';
buttonMenu.className = 'btn-link';
buttonMenu.addEventListener('click', () => {
  console.log('Tocaste al menu');
});
buttonMenu.innerHTML = 'Soy un boton';
buttonMenu.appendChild(buttonMenuIcon);

headerMenu.appendChild(buttonMenu);
header.appendChild(headerMenu);

app.appendChild(header);


{/* <header class="Header">
    <div class="Header__MenuHamburguesa">
      <button type="button" class="btn-link">
        <i class="fas fa-bars"></i>
      </button>
      <button type="button" class="Header__MenuHamburguesa--cerrar btn-link">
        <i class="fas fa-times"></i>
      </button>
      <nav class="Header__nav--hamburguesa">
        <a href="">Productos</a>
        <a href="">Categotias</a>
        <a href="">Ofertas</a>
        <a href="">Contacto</a>
        <a href="">Ubicacion</a>
        <a href="">Sobre nosotros</a>
      </nav>
    </div>
    <figure class="Header__logo">
      <img src="./assets/logo.png" alt="">
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
  </header> */}