import React, {useState, useEffect, useContext} from "react";
import CustomTable from "../../../components/CustomTable";
import config from "../../../config/constants";
import axios from "axios";
import AuthContext from "../../../config/context/auth";
import ButtonLinkStyled from "../../../components/Link";
import ModalInclusaoAluno from "./ModalAdicaoAluno";

const ListagemAlunos = (props) => {
  const { usuario } = useContext(AuthContext);
  const [ alunos, setAlunos] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ renderModalInclusaoAluno, setRenderModalInclusaoAluno ] = useState(false);
  const headers = {
    nome: {
      title: "Nome",
      orderableColumn: true,
      order: null
    },
    email: {
      title: "Email",
      order: null
    },
    escola: {
      title: "Escola",
      nestedProperty: "nome",
      order: null
    },
    sponsor: {
      title: "Sponsor",
      nestedProperty: "nome",
      order: null
    },
    ano_ensino_medio: {
      title: "Ano escolar",
      nestedProperty: "ano",
      order: null
    }
  };

  const obterAlunos = async () => {
    const url = config.DOMAIN_URL + "/turma/" + props.turmaId + "/alunos";
    const header = {
      headers: {
        'Authorization': usuario.token
      }
    };
    const { data } = await axios.get(url, header);
    setAlunos(data.data);
    setLoading(false);
  };

  useEffect(() => {
    obterAlunos();
  }, []);

  return (
    <>
    {
      !loading &&
      <CustomTable
        headers={headers}
        data={alunos}
        msgEmptyBody={"Ainda não existem alunos cadastrados."}
      />
    }
    <ButtonLinkStyled
      title={"+ Clique para adicionar um novo aluno."}
      onClick={() => setRenderModalInclusaoAluno(true)}
    />
    {
      renderModalInclusaoAluno &&
      <ModalInclusaoAluno
        turmaId={props.turmaId}
        onClose={() => setRenderModalInclusaoAluno(false)}
        onSave={() => {
          setLoading(true);
          setRenderModalInclusaoAluno(false);
          obterAlunos();
        }}
      />
    }
    </>
  );
};
export default ListagemAlunos;