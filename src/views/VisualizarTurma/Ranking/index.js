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
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
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

  const dataAtualFormatada = () => {
    let data = new Date(),
        dia  = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(),
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = data.getFullYear();
    return `${diaF}/${mesF}/${anoF}`;
}

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
            Última atualização: {props.dataUltimaAtualizacao || dataAtualFormatada()}
          </UltimaAtualizacao>
        }
        {
          !!(usuario.perfil.nome === "administrador") &&
          <ContainerButton>
            <ButtonLinkStyled
              title={`+ Clique para ${!!(ranking && ranking.length) ? 'recalcular' :  'calcular'} ranking.`}
              onClick={recalcularRanking}
            />
          </ContainerButton>
        }
      </Container>
    </AccordionSection>
  )
}

export default withRouter(Ranking);
