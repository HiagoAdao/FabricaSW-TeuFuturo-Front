import React, { useState, useMemo } from "react";
import { GlobalStyle } from "./theme/global_style";
import AuthContext from "./config/context/auth";
import Routes from "./routes";

function App() {
  const [ usuario, setUsuario ] = useState(null);
  const providerValue = useMemo(() => ({ usuario, setUsuario }), [ usuario, setUsuario ]);

  return (
    <>
      <GlobalStyle />
      <AuthContext.Provider value={providerValue} >
        <Routes />
      </AuthContext.Provider>
    </>
  );
}

export default App;
