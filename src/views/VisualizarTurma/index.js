import AccordionSection from "../../components/AccordionSection";
import NavBar from "../../components/NavBar";
import { Container} from "./index.styled";
import ButtonLinkStyled from "../../components/Link";
import ListagemAlunos from "./ListagemAlunos";
import React, { useState } from "react";
import ModalInclusaoAluno from "./ListagemAlunos/ModalAdicaoAluno";

const VisualizarTurma = (props) => {
  const turmaId = window.location.pathname.split("/").pop();
  const [renderModalInclusaoAluno, setRenderModalInclusaoAluno] = useState(false);

  return (
    <>
      <NavBar title={"Administração 1"} />
      <Container>
        <>
          <AccordionSection title={"Alunos"}>
            <ListagemAlunos turmaId={turmaId}/>
            <ButtonLinkStyled
              title={"+ Clique para adicionar um novo aluno."}
              onClick={() => setRenderModalInclusaoAluno(true)}
            />
            {
              renderModalInclusaoAluno &&
              <ModalInclusaoAluno
                turmaId={turmaId}
                onClose={() => setRenderModalInclusaoAluno(false)}
              />
            }
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