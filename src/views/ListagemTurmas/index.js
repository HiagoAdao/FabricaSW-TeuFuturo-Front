import React from "react";
import NavBar from "../../components/NavBar";
import { Container, ButtonName, ContainerTable, ButtonContainer } from "./index.styled";
import ButtonStyled from "../../components/ButtonStyled";
import CustomTable from "../../components/CustomTable";

const ListagemTurmas = (props) => {
  const headers = {
    nome: {
      title: "Nome",
      orderableColumn: true,
      order: null
    },
    data_fim: {
      title: "Data Fim",
      orderableColumn: true,
      order: "desc"
    }
  };

  const dados = [
    {
      nome: "TeuFuturo Ciência da Computação - Verão 2021",
      data_fim: "25/08/2021"
    },
    {
      nome: "Desafios de Tecnologia e Inovação",
      data_fim: "10/12/2020"
    }
  ];

  const actionColumn = {
    title: "Visualizar",
    color: "",
    action: (lineContent) => {
      console.log(lineContent);
      props.history.push('/turma');
    }
  };
  
  return (
    <>
      <NavBar />
      <Container>
        <ContainerTable>
          <CustomTable
            headers={headers}
            data={dados}
            msgEmptyBody={"Ainda não existem turmas cadastradas."}
            actionColumn={actionColumn}
          />
        </ContainerTable>
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