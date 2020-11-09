import React, { useState, useEffect } from 'react';
import { Header, Container, Title, Body, styledLi, Titulo } from './styles';
import {StyledButton} from '../../components';
import icon from '../../assets/img/iconTF.svg';
    
import axios from 'axios';
import local from '../../config/constants';

const baseURL = local.url;

const Admin = () => {
  const [turmas, setTurmas] = useState([
    { id: 1, name: 'Administração 1' },
    { id: 2, name: 'Ciência da computação 1' },
    { id: 3, name: 'Medicina 1' }
  ]);

  useEffect(() => {
    axios.get(`${baseURL}/turmas`)
    .then((response) => {
      console.log('API Response', response.data.data)
      setTurmas(response.data.data)
    })
    .catch((error) => console.error('Erro no GET', error))
  }, [])

  function showView() {

  }

  return (
      <Container>
        <Header>
          <img src={icon} alt={'icon'} />
          <Title>Lista de turmas</Title>
        </Header>
        <Body>
          <Titulo>Nome da turma</Titulo>
          <ui>
            {turmas.map((turma, index) => (
              <styledLi key={index}>
                {turma.nome}
                <button onClick={() => showView()}>Visualizar</button>
              </styledLi>
            ))}
          </ui>
          <StyledButton>
            <h1>Adicionar turma</h1>
          </StyledButton>
        </Body>
      </Container>
  )
}

export default Admin;
