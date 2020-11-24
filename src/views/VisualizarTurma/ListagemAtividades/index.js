import React, { useContext, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import CustomTable from "../../../components/CustomTable";
import ButtonLinkStyled from "../../../components/Link";
import config from "../../../config/constants";
import axios from "axios";
import AuthContext from "../../../config/context/auth";

const ListagemAtividades = (props) => {
  const usuario = useContext(AuthContext);
  const [ atividades, setAtividades ] = useState([]); 
  const [ loading, setLoading ] = useState(true);
  const headers = {
    nome: {
      title: "Nome"
    },
    descricao: {
      title: "Descrição"
    },
    peso: {
      title: "Peso"
    }
  };

  const obtemAtividades = async () => {
    const url = config.DOMAIN_URL + "/turma/" + props.turmaId + "/atividades";
    const header = {
      headers: {
        'Authorization': usuario.token
      }
    };
    const { data } = await axios.get(url, header);
    setAtividades(data.data);
    setLoading(false);
  };

  useEffect(() => {
    obtemAtividades();
  }, [])

  return (
    <>
      {
        !loading && 
        <CustomTable
          headers={headers}
          data={atividades}
        />
      }
      <ButtonLinkStyled
        title={"+ Clique para adicionar uma nova atividade."}
      />
    </>
  );
};

export default withRouter(ListagemAtividades);

