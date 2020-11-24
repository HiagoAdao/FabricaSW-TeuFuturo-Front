import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../config/context/auth";

const PrivateRoute = ({ component: Component, authorizationRoute, ...rest }) => {
  const { usuario } = useContext(AuthContext);

  const isAutorizado = () => {
    const validRoutes = usuario.perfil.permissoes.app.find(route => {
      return route === authorizationRoute;
    });
    return !!validRoutes;
  };

  const renderComponentWithAuth = (props) => {
    return (
      !!(usuario && Object.keys(usuario).length)
        ? isAutorizado() ? <Component {...props} /> : <></>
        : <Redirect to="/login" />
    )
  };

  return (
    <Route
      {...rest}
      render={props => renderComponentWithAuth(props)}
    />
  );
}

export default PrivateRoute;