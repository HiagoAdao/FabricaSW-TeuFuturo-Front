import AccordionSection from "../../components/AccordionSection";
import NavBar from "../../components/NavBar";
import { Container, ContainerAccordions } from "./index.styled";
import ListagemAlunos from "./ListagemAlunos";
import ListagemAtividades from "./ListagemAtividades";
import Ranking from "./Ranking";
import React from "react";

const VisualizarTurma = (props) => {
  const turmaId = window.location.pathname.split("/").pop();

  return (
    <>
      <NavBar title={"Administração 1"} />
      <Container>
        <ContainerAccordions>
          <AccordionSection title={"Alunos"}>
            <ListagemAlunos turmaId={turmaId}/>
          </AccordionSection>
          <AccordionSection title={"Atividades"}>
            <ListagemAtividades turmaId={turmaId}/>
          </AccordionSection>
          <Ranking turmaId={turmaId} />
        </ContainerAccordions>
      </Container>
    </>
  );
};

export default VisualizarTurma;