import React, { useState, useEffect } from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Admin from './pages/Admin';

export default function App() {

  const [repositories, setRepositories] = useState([
    { id: 1, name: 'sala-1' },
    { id: 2, name: 'sala-2' },
    { id: 3, name: 'sala-3' }
  ]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.github.com/');
      const data = await response.json();
      console.log(data);
    }

    fetchData();
    // setRepositories(data);    
  }, []); // Vazio indica ComponentDidMount

  useEffect(() => {
    const filtered = repositories.filter(repo => repo.favorite);

    document.title = `#TeuFuturo`
  }, [repositories]);

  function handleAddRepository() {
    setRepositories([
      ...repositories,
      { id: Math.random(), name: 'Novo repo' }
    ]);
  };

  function handleFavorite(id) {
    const newRepositories = repositories.map(repo => {
      return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo
    })

    setRepositories(newRepositories);
  };

  return (
    <Router>
      <GlobalStyle />
      {/* <Header /> */}
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/admin" exact component={Admin} />
      </Switch>
    </Router>
  );
}

{/* <h1>#TeuFuturo</h1>
<ul>
  {repositories.map(repo => (
    <li key={repo.id}>
      {repo.name}
      {repo.favorite && <span>(Favorito)</span>}
      <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
    </li>
  ))}
</ul>
<button onClick={handleAddRepository}>
  Adicionar repositório
</button> */}
