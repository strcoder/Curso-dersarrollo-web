const resolveRoutes = (route) => {
  if (route.length <= 3) {
    const validate = route === '/' ? route : '/:id';
    return validate
  }
  return `/${route}`
}

export default resolveRoutes;