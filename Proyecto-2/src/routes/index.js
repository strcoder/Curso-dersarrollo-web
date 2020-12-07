import Products from '../pages/Products';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
import Header from './../components/Header';
import Home from './../pages/Home';

const routes = {
  '/': Home,
  '/products': Products,
};

const router = async () => {
  const header = null || document.getElementById('Header');
  const app = null || document.getElementById('app');

  header.innerHTML = await Header();

  const hash = getHash();
  const route = await resolveRoutes(hash);
  const render = routes[route] ? routes[route] : `<h1>Not Found</h1>`

  app.innerHTML = await render();
}

export default router;