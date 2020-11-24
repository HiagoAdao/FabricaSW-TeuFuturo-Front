const isAutorizado = (permissoes, authorizationRoute) => {
  const validRoutes = permissoes.app.find(route => {
    return route === authorizationRoute;
  });
  return !!validRoutes;
};

export default isAutorizado;