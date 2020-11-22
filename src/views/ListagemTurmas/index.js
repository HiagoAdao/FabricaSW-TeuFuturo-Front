import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import { Container, ButtonName, ContainerTable, ButtonContainer } from "./index.styled";
import ButtonStyled from "../../components/ButtonStyled";
import CustomTable from "../../components/CustomTable";
import axios from "axios";
import config from "../../config/constants";

const ListagemTurmas = (props) => {
  const [ turmas, setTurmas ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  const headers = {
    nome: {
      title: "Nome da turma",
      orderableColumn: true,
      order: null
    },
    data_fim: {
      title: "Data fim",
      orderableColumn: true,
      order: "desc"
    }
  };

  const actionColumn = {
    title: "Visualizar",
    color: "",
    action: (lineContent) => {
      console.log(lineContent);
      props.history.push('/turma');
    }
  };
  
  const obterTurmas = async () => {
    const url = config.DOMAIN_URL + "/turmas";
    const { data } = await axios.get(url);
    setTurmas(data.data);
    setLoading(false);
  };

  useEffect(() => {
    obterTurmas();
  }, []);
  
  return (
    <>
      <NavBar title={"Lista de turmas"} />
      <Container>
        <ContainerTable>
          {
            !loading &&
            <CustomTable
              headers={headers}
              data={turmas}
              msgEmptyBody={"Ainda não existem turmas cadastradas."}
              actionColumn={actionColumn}
            />
          }
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