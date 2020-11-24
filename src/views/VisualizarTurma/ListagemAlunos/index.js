import React, {useState, useEffect} from "react";
import CustomTable from "../../../components/CustomTable";
import config from "../../../config/constants";
import axios from "axios";

const ListagemAlunos = (props) => {
  const [alunos, setAlunos] = useState([]);
  const [ loading, setLoading ] = useState(true);
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
      order: null
    },
    sponsor: {
      title: "Sponsor",
      order: null
    },
    ano_ensino_medio: {
      title: "Ano escolar",
      order: null
    }
  };

  const obterAlunos = async () => {
    const url = config.DOMAIN_URL + "/turma/" + props.turmaId + "/alunos";
    const { data } = await axios.get(url);
    debugger;
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
    </>
  );
};
export default ListagemAlunos;