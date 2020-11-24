import React from "react";
import NavBar from "../../components/NavBar";
import { ContainerTurma, Container, ContainerAccordions } from "./index.styled";
import ListagemAlunos from "./ListagemAlunos";
import ListagemAtividades from "./ListagemAtividades";
import Ranking from "./Ranking";

const VisualizarTurma = (props) => {
  const turmaId = window.location.pathname.split("/").pop();

  return (
    <>
      <NavBar title={"Administração 1"} />
      <ContainerTurma>
        <Container>
          <ContainerAccordions>
            <ListagemAlunos turmaId={turmaId}/>
          </ContainerAccordions>
          <ContainerAccordions>
            <ListagemAtividades turmaId={turmaId}/>
          </ContainerAccordions>
          <ContainerAccordions>
            <Ranking turmaId={turmaId} />
          </ContainerAccordions>
        </Container>
      </ContainerTurma>
    </>
  );
};

export default VisualizarTurma;