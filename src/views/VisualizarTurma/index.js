import AccordionSection from "../../components/AccordionSection";
import NavBar from "../../components/NavBar";
import { Container, ContainerAccordions } from "./index.styled";
import ButtonLinkStyled from "../../components/Link";
import ListagemAlunos from "./ListagemAlunos";
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
            <ButtonLinkStyled
              title={"+ Clique para adicionar uma nova atividade."}
            />
          </AccordionSection>
          <Ranking turmaId={turmaId} />
        </ContainerAccordions>
      </Container>
    </>
  );
};

export default VisualizarTurma;