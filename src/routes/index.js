import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import constants from "../config/constants";
import PrivateRoute from "./PrivateRoute";
import Login from "../views/Login";
import ListagemTurmas from "../views/ListagemTurmas";
import VisualizarTurma from "../views/VisualizarTurma";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={constants.PAGES.LOGIN} component={Login} />
        <Route exact path={constants.PAGES.HOME} component={Login} />
        <PrivateRoute
          exact
          path={constants.PAGES.LISTAGEM_TURMAS}
          component={ListagemTurmas}
          authorizationRoute={"/turmas"}
        />
        <PrivateRoute
          exact
          path={constants.PAGES.TURMA}
          component={VisualizarTurma}
          authorizationRoute={"/turma/{id}"}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
