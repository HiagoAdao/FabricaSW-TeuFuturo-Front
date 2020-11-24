import React, { useState, useEffect, useContext } from "react";
import CustomModal from "../../../../components/CustomModal";
import { Container, ContainerButton, ContainerForms } from "./index.styled";
import InputStyled from "../../../../components/TextInput";
import SelectInput from "../../../../components/SelectInput";
import config from "../../../../config/constants";
import axios from "axios";
import ButtonStyled from "../../../../components/ButtonStyled";
import AuthContext from "../../../../config/context/auth";


const ModalInclusaoAluno = (props) => {
  const { usuario } = useContext(AuthContext);
  const [inputsTexto, setInputsTexto] = useState({
    nome: {
      titulo: "Nome*",
      valor: null
    },
    sobrenome: {
      titulo: "Sobrenome*",
      valor: null
    },
    email: {
      titulo: "Email*",
      valor: null
    }
  });
  const [inputsSelect, setInputSelect] = useState({
    escola: {
      titulo: "Escola*",
      options: null,
      value: null
    },
    sponsor: {
      titulo: "Sponsor*",
      options: null,
      value: null
    },
    anoEnsino: {
      titulo: "Ano escolar*",
      options: null,
      value: null
    }
  });
  const [statusBotao, setStatusBotao] = useState(true);

  const obtemEscolas = async () => {
    const url = config.DOMAIN_URL + "/escolas";
    const header = {
      headers: {
        'Authorization': usuario.token
      }
    };
    const { data } = await axios.get(url, header);
    const escolas = data.data.map(escola => ({
      label: escola.nome,
      value: escola,
    }))

    setInputSelect(prev => ({
      ...prev,
      escola: {
        ...prev.escola,
        options: escolas
      }
    }));
  };

  const obtemSponsors = async () => {
    const url = config.DOMAIN_URL + "/sponsors";
    const header = {
      headers: {
        'Authorization': usuario.token
      }
    };
    const { data } = await axios.get(url, header);
    const sponsors = data.data.map(sponsor => ({
      label: sponsor.nome,
      value: sponsor,
    }))

    setInputSelect(prev => ({
      ...prev,
      sponsor: {
        ...prev.sponsor,
        options: sponsors
      }
    }));
  };

  const obtemAnoEscolar = async () => {
    const url = config.DOMAIN_URL + "/anos-ensino-medio";
    const header = {
      headers: {
        'Authorization': usuario.token
      }
    };
    const { data } = await axios.get(url, header);
    const anosEnsino = data.data.map(ano => ({
      label: ano.ano,
      value: ano,
    }))

    setInputSelect(prev => ({
      ...prev,
      anoEnsino: {
        ...prev.anoEnsino,
        options: anosEnsino
      }
    }));
  };

  const onHandleChangeInput = (value, state) => {
    setInputsTexto(prevInputsTexto => (
      {
        ...prevInputsTexto,
        [state]: {
          ...prevInputsTexto[state],
          valor: value
        }
      }
    ));
  };

  const onSelect = (state, value) => {
    setInputSelect(prevInputsSelect => (
      {
        ...prevInputsSelect,
        [state]: {
          ...prevInputsSelect[state],
          value: value
        }
      }
    ))
  };

  const salvarAluno = async () => {
    const objectToSend = {
      nome: inputsTexto.nome.valor,
      sobrenome: inputsTexto.sobrenome.valor,
      email: inputsTexto.email.valor,
      sponsor: inputsSelect.sponsor.value.value,
      ano_ensino_medio: inputsSelect.anoEnsino.value.value,
      escola: inputsSelect.escola.value.value
    };
    const url = config.DOMAIN_URL + `/turma/${props.turmaId}/aluno`;
    const header = {
      headers: {
        'Authorization': usuario.token
      }
    };

    axios.post(url, objectToSend, header);

    props.onSave && props.onSave();
  };

  useEffect(() => {
    obtemEscolas();
    obtemSponsors();
    obtemAnoEscolar();
  }, []);

  useEffect(() => {
    (inputsTexto.nome.valor &&
      inputsTexto.sobrenome.valor &&
     inputsTexto.email.valor &&
     inputsSelect.escola.value &&
     inputsSelect.sponsor.value &&
     inputsSelect.anoEnsino.value)
     ? setStatusBotao(false)
     : setStatusBotao(true);
  }, [inputsSelect, inputsTexto]);

  return (
    <>
      <CustomModal
        onClose={props.onClose}
        name={"Cadastrar aluno"}
        height={"700px"}
        width={"550px"}
      >
        <Container>
          <ContainerForms>
            {
              Object.keys(inputsTexto).map((item, i) => (
                <InputStyled
                  key={i}
                  item={inputsTexto[item]}
                  size={"450px"}
                  onInputChange={(valor) => onHandleChangeInput(valor, item)}
                />
              ))
            }
            {
              Object.keys(inputsSelect).map((item, i) => (
                <SelectInput
                  key={i}
                  item={inputsSelect[item]}
                  size={"450px"}
                  onSelectOption={(event) =>
                    onSelect(item, {label: event.label, value: event.value})
                  }
              />
              ))
            }
          </ContainerForms>
          <ContainerButton>
            <ButtonStyled size={{ width: "340px", height: "40px" }} disabled={statusBotao} onClick={salvarAluno}>
              Cadastrar aluno
            </ButtonStyled>
          </ContainerButton>
        </Container>
      </CustomModal>
    </>
  );
};

export default ModalInclusaoAluno;