import React, { useState, useLayoutEffect, useContext } from "react";
import NavBar from "../../components/NavBar";
import { ContainerTurma, Container, ContainerAccordions } from "./index.styled";
import ListagemAlunos from "./ListagemAlunos";
import ListagemAtividades from "./ListagemAtividades";
import Ranking from "./Ranking";
import config from "../../config/constants";
import axios from "axios";
import AuthContext from "../../config/context/auth";

const VisualizarTurma = (props) => {
  const { usuario } = useContext(AuthContext);
  const [ dadosTurma, setDadosTurma ] = useState("");
  const [ loading, setLoading ] = useState(true);
  const __TURMA_ID = window.location.pathname.split("/").pop();

  const obterDataUltimaAtualizacao = async () => {
    try {
      const url = `${config.DOMAIN_URL}/turma/${__TURMA_ID}`;
      const params = {
        headers: {
          'Authorization': usuario.token
        }
      };
      const { data } = await axios.get(url, params);
      setDadosTurma(data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useLayoutEffect(() => {
    obterDataUltimaAtualizacao();
  }, []);

  if (loading) return <></>;
  return (
    <>
      <NavBar title={dadosTurma.nome} />
      <ContainerTurma>
        <Container>
          <ContainerAccordions>
            <ListagemAlunos turmaId={__TURMA_ID}/>
          </ContainerAccordions>
          <ContainerAccordions>
            <ListagemAtividades turmaId={__TURMA_ID}/>
          </ContainerAccordions>
          <ContainerAccordions>
            <Ranking
              dataUltimaAtualizacao={dadosTurma.data_atualizacao_ranking}
              turmaId={__TURMA_ID}
            />
          </ContainerAccordions>
        </Container>
      </ContainerTurma>
    </>
  );
};

export default VisualizarTurma;