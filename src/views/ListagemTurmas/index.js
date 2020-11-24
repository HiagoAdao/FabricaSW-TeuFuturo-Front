import React, { useState, useEffect, useContext } from "react";
import NavBar from "../../components/NavBar";
import { Container, ButtonName, ContainerTable, ButtonContainer } from "./index.styled";
import ButtonStyled from "../../components/ButtonStyled";
import CustomTable from "../../components/CustomTable";
import ModalAdicionarTurma from "./ModalAdicionarTurma";
import axios from "axios";
import config from "../../config/constants";
import AuthContext from "../../config/context/auth";
import { withRouter } from "react-router-dom";

const ListagemTurmas = (props) => {
  const { usuario } = useContext(AuthContext);
  const [ turmas, setTurmas ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ renderAdicionarTurma, setRenderAdicionarTurma ] = useState(false);

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
    action: (lineContent) => {
      console.log(lineContent);
      props.history.push(`/turma/${lineContent.id}`);
    }
  };
  
  const obterTurmas = async () => {
    const url = config.DOMAIN_URL + "/turmas";
    const axiosParams = () => {
      const params = new URLSearchParams();
      params.append('professor_email', usuario.usuario);
      return params;
    }
    const params = {
      headers: {
        'Authorization': usuario.token
      },
      params: !!(usuario.perfil.nome === "professor") ? axiosParams() : null
    };
    const { data } = await axios.get(url, params);
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
      </Container>
      {
        !!(usuario.perfil.nome === "administrador") &&
        <ButtonContainer>
          <ButtonStyled
            onClick={() => setRenderAdicionarTurma(true)}
            size={{ width: "340px", height: "55px" }}
            >
            <ButtonName>Adicionar turma</ButtonName>
          </ButtonStyled>
        </ButtonContainer>
      }
      {
        renderAdicionarTurma &&
        <ModalAdicionarTurma
          history={props.history}
          onClose={() => setRenderAdicionarTurma(false)}
          onSave={() => {
            setLoading(true);
            setRenderAdicionarTurma(false);
            obterTurmas();
          }}
        />
      }
    </>
  );
};

export default withRouter(ListagemTurmas);