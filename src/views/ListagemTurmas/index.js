import AccordionSection from "../../components/Accordion";
import Header from "../../components/Header";
import { Container, ButtonName, Title } from "./index.styled";
import ButtonStyled from "../../components/ButtonStyled";

const ListagemTurmas = (props) => {
  return (
    <>
      <Header />
      <Container>
        <>
          <Title>Nome da turma</Title>
          <AccordionSection title={"Administração 1"} />
        </>
        <ButtonStyled
            onClick={() => console.log('click')}
            size={{width: "340px", height: "55px"}}
          >
            <ButtonName>Adicionar turma</ButtonName>
        </ButtonStyled>
      </Container>
    </>
  );
};

export default ListagemTurmas;