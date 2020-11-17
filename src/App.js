import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./theme/global_style";
import constants from "./config/constants";
import Login from "./views/Login";
import ListagemTurmas from "./views/ListagemTurmas";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path={constants.PAGES.LOGIN} component={Login} />
          <Route exact path={constants.PAGES.HOME} component={Login} />
          <Route path={constants.PAGES.LISTAGEM_TURMAS} component={ListagemTurmas} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
