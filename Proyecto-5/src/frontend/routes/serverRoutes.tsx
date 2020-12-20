import Home from '../pages/Home';

const serverRoutes = () => {
  return [
    {
      exact: true,
      path: '/',
      component: Home,
    },
  ]
}

export default serverRoutes;