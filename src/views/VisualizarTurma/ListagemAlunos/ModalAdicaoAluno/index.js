import React, { useState, useEffect } from "react";
import CustomModal from "../../../../components/CustomModal";
import { Container, ContainerButton, ContainerForms } from "./index.styled";
import InputStyled from "../../../../components/TextInput";
import SelectInput from "../../../../components/SelectInput";
import config from "../../../../config/constants";
import axios from "axios";
import ButtonStyled from "../../../../components/ButtonStyled";


const ModalInclusaoAluno = (props) => {
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
    const { data } = await axios.get(url);
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
    const { data } = await axios.get(url);
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
    const { data } = await axios.get(url);
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
    debugger;
    const url = config.DOMAIN_URL + `/turma/${props.turmaId}/aluno`;

    axios.post(url, objectToSend);

    props.onClose();

    window.location.reload();
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
     inputsTexto.celular.valor &&
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
        width={"500px"}
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