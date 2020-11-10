import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./theme/global_style";
import constants from "./config/constants";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path={constants.PAGES.LOGIN} component={Login} />
          <Route exact path={constants.PAGES.HOME} component={Login} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
