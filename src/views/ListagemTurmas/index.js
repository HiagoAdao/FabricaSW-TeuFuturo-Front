import React from "react";
import NavBar from "../../components/NavBar";
import { Container } from "./index.styled";

const ListagemTurmas = (props) => {
  return (
    <>
      <NavBar title={"Lista de turmas"} />
      <Container>
        <h1>Página para Listagem de Turmas</h1>
      </Container>
    </>
  );
};

export default ListagemTurmas;