import React, { useState, useEffect } from 'react';
import { Header, Container, Title, Body, styledLi, } from './styles';
import {StyledButton} from '../../components';
import icon from '../../assets/img/iconTF.svg';
    
const Admin = () => {
  const [turmas, setTurmas] = useState([
    { id: 1, name: 'Administração 1' },
    { id: 2, name: 'Ciência da computação 1' },
    { id: 3, name: 'Medicina 1' }
  ]);

  function showView() {

  }

  return (
      <Container>
        <Header>
          <img src={icon} alt={'icon'} />
          <Title>Lista de turmas</Title>
        </Header>
        <Body>
          <ui>
            {turmas.map(turma => (
              <styledLi key={turma.id}>
                {turma.name}
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
