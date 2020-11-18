import Header from "../../components/Header";
import { Container, ButtonName, Title, ButtonContainer } from "./index.styled";
import ButtonStyled from "../../components/ButtonStyled";
import Table from "../../components/Table";
import { Colors } from "../../theme/colors";

const ListagemTurmas = (props) => {
  const handleClick = () => {
    props.history.push('/turma')
    console.log('teste');
  };
  
  return (
    <>
      <Header />
      <Container>
        <>
          <Title>Nome da turma</Title>
          <Table 
            title={"Administração 1"}
            secondTitle={"Data fim: 24/11/2020"} 

            onClick={handleClick} 
            buttonText={"Visualizar"}
            buttonColor={Colors.primary}  
          />
          <Table
            title={"Ciencia da Computação 1"}
            secondTitle={"Data fim: 02/12/2020"}

            onClick={handleClick} 
            buttonText={"Visualizar"}
            buttonColor={Colors.primary} 
          />
        </>
        <ButtonContainer>
          <ButtonStyled
            onClick={() => console.log('click')}
            size={{ width: "340px", height: "55px" }}
          >
            <ButtonName>Adicionar turma</ButtonName>
          </ButtonStyled>
        </ButtonContainer>
      </Container>
    </>
  );
};

export default ListagemTurmas;