import AccordionSection from "../../components/AccordionSection";
import NavBar from "../../components/NavBar";
import { Container, Title } from "./index.styled";
import { Colors } from "../../theme/colors";

const VisualizarTurma = (props) => {
  const handleClick = () => {
    props.history.push('/login')
    console.log('teste');
  };

  return (
    <>
      <NavBar title={"Administração 1"} />
      <Container>
        <>
          <AccordionSection title={"Alunos"}>

            <Title>+ Clique para adicionar um novo aluno.</Title>
          </AccordionSection>
          <AccordionSection title={"Atividades"}>
            <Title>+ Clique para adicionar uma nova atividade.</Title>
          </AccordionSection>
          <AccordionSection title={"Ranking de gamificação"}>
            <Title>+ Clique para recalcular ranking.</Title>
          </AccordionSection>
        </>
      </Container>
    </>
  );
};

export default VisualizarTurma;