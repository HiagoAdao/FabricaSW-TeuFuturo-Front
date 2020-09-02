import React, { useState, useEffect, } from 'react';

export default function App() {

  const [repositories, setRepositories] = useState([
    { id: 1, name: 'repo-1' },
    { id: 2, name: 'repo-2' },
    { id: 3, name: 'repo-3' }
  ]);

  useEffect(async () => {
    const response = await fetch('https://api.github.com/');
    const data = await response.json();

    // setRepositories(data);    
  }, []); // Vazio indica ComponentDidMount

  useEffect(() => {
    const filtered = repositories.filter(repo => repo.favorite);

    document.title = `Você tem ${filtered.length} favoritos`
  }, [repositories]);

  function handleAddRepository() {
    setRepositories([
      ...repositories,
      { id: Math.random(), name: 'Novo repo' }
    ]);
  }

  function handleFavorite(id) {
    const newRepositories = repositories.map(repo => {
      return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo
    })

    setRepositories(newRepositories);
  }

  return (
    <>
      <h1>#TeuFuturo</h1>
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
      </button>
    </>
  );
}