import AccordionSection from "../../components/AccordionSection";
import NavBar from "../../components/NavBar";
import { Container} from "./index.styled";
import ButtonLinkStyled from "../../components/Link";
import ListagemAlunos from "./ListagemAlunos";
import React from "react";

const VisualizarTurma = (props) => {
  const turmaId = window.location.pathname.split("/").pop();

  return (
    <>
      <NavBar title={"Administração 1"} />
      <Container>
        <>
          <AccordionSection title={"Alunos"}>
            <ListagemAlunos turmaId={turmaId}/>
          </AccordionSection>
          <AccordionSection title={"Atividades"}>
            <ButtonLinkStyled
              title={"+ Clique para adicionar uma nova atividade."}
            />
          </AccordionSection>
          <AccordionSection title={"Ranking de gamificação"}>
            <ButtonLinkStyled
              title={"+ Clique para recalcular ranking."}
            />
          </AccordionSection>
        </>
      </Container>
    </>
  );
};

export default VisualizarTurma;