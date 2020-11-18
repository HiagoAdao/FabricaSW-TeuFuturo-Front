import AccordionSection from "../../components/Accordion";
import Table from "../../components/Table";
import Header from "../../components/Header";
import { Container, Title, TitleContainer } from "./index.styled";
import { Colors } from "../../theme/colors";

const VisualizarTurma = (props) => {
  const handleClick = () => {
    props.history.push('/login')
    console.log('teste');
  };

  return (
    <>
      <Header title={"Administração 1"} />
      <Container>
        <>
          <AccordionSection title={"Alunos"}>

            <TitleContainer>
              <Title>Nome</Title>
              <Title>Email</Title>
              <Title></Title>
            </TitleContainer>

            <Table
              title={"Exemplo"} 
              secondTitle={"exemplo@imed.edu.br"}

              onClick={handleClick}
              buttonText={"Inativar"}
              buttonColor={Colors.red}
            />
            <Table
              title={"Exemplo"} 
              secondTitle={"exemplo@imed.edu.br"}

              onClick={handleClick}
              buttonText={"Inativar"}
              buttonColor={Colors.red}
            />

            <Title>+ Clique para adicionar um novo aluno.</Title>
          </AccordionSection>
          <AccordionSection title={"Atividades"}>
          <TitleContainer>
              <Title>Nome</Title>
              <Title>Descrição</Title>
              <Title>Peso da atividade</Title>
            </TitleContainer>

            <Table
              title={"Maquete arduino"} 
              secondTitle={"Visualizar descrição"}
              buttonText={"5"}
            />
            <Table
              title={"Calculadora python"} 
              secondTitle={"Visualizar descrição"}
              buttonText={"3"}
            />

            <Title>+ Clique para adicionar uma nova atividade.</Title>
          </AccordionSection>
          <AccordionSection title={"Ranking de gamificação"}>
            <TitleContainer>
              <Title>Nome</Title>
              <Title>Email</Title>
              <Title>Pontuação</Title>
            </TitleContainer>

            <Table
              title={"Exemplo"} 
              secondTitle={"exemplo@imed.edu.br"}
              buttonText={"29"}
            />
            <Table
              title={"Pontuação"} 
              secondTitle={"exemplo@imed.edu.br"}
              buttonText={"29"}
            />
            <h2>Ultima atualização: 22/10</h2>

            <Title>+ Clique para recalcular ranking.</Title>
          </AccordionSection>
        </>
      </Container>
    </>
  );
};

export default VisualizarTurma;