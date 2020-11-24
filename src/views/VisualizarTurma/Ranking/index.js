import React, { useState, useLayoutEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import AccordionSection from "../../../components/AccordionSection";
import ButtonLinkStyled from "../../../components/Link";
import CustomTable from "../../../components/CustomTable";
import axios from "axios";
import config from "../../../config/constants";
import AuthContext from "../../../config/context/auth";
import  { Container, ContainerButton, UltimaAtualizacao } from "./index.styled";

const Ranking = (props) => {
  const { usuario } = useContext(AuthContext);
  const [ loading, setLoading ] = useState(true);
  const [ ranking, setRanking ] = useState([]);

  const headers = {
    posicao: {
      title: "Posição",
      orderableColumn: false,
      formatterValue: (item) => `${item}º`
    },
    aluno: {
      title: "Email",
      nestedProperty: "email",
      orderableColumn: false
    },
    pontuacao: {
      title: "Pontuação",
      orderableColumn: false
    }
  };

  const obterRanking = async () => {
    try {
      const url = `${config.DOMAIN_URL}/turma/${props.turmaId}/ranking-gamificacao`;
      const axiosParams = () => {
        const params = new URLSearchParams();
        params.append('aluno_email', usuario.usuario);
        return params;
      }
      const params = {
        headers: {
          'Authorization': usuario.token
        },
        params: !!(usuario.perfil.nome === "aluno") ? axiosParams() : null 
      };
      const { data } = await axios.get(url, params);
      setRanking(data.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const recalcularRanking = async () => {
    try {
      setLoading(true);
      const url = `${config.DOMAIN_URL}/turma/${props.turmaId}/ranking-gamificacao`;
      const params = {
        headers: {
          'Authorization': usuario.token
        }
      };
      await axios.post(url, null, params);
    } catch (error) {
      console.error(error);
    } finally {
      obterRanking();
    }
  };

  useLayoutEffect(() => {
    obterRanking();
  }, []);

  return (
    <AccordionSection title={"Ranking de gamificação"}>
      <Container>
        {
          !loading &&
          <CustomTable
            headers={headers}
            data={ranking}
            msgEmptyBody={"Ainda não existe ranking para esta turma."}
          />
        }
        {
          !!(ranking && ranking.length) &&
          <UltimaAtualizacao>
            Última atualização: {props.dataUltimaAtualizacao}
          </UltimaAtualizacao>
        }
        {
          !!(usuario.perfil.nome === "administrador") &&
          <ContainerButton>
            <ButtonLinkStyled
              title={"+ Clique para recalcular ranking."}
              onClick={recalcularRanking}
            />
          </ContainerButton>
        }
      </Container>
    </AccordionSection>
  )
}

export default withRouter(Ranking);
