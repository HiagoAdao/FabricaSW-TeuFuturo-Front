import React, { useState, useEffect } from "react";
import {Container, ContainerButton} from "./index.styled"; 
import CustomModal from "../../../components/CustomModal";
import InputStyled from "../../../components/TextInput";
import SelectInput from "../../../components/SelectInput";
import axios from "axios";
import config from "../../../config/constants";
import ButtonStyled from "../../../components/ButtonStyled";

const ModalAdicionarTurma = (props) => {
  
  const [inputsTexto, setInputsTexto] = useState({
    nome: {
      titulo: "Nome*",
      valor: null,
      type: "text"
    },
    dataInicio: {
      titulo: "Data início*",
      valor: null,
      type: "date"
    },
    dataFim: {
      titulo: "Data fim*",
      valor: null,
      type: "date"
    }
  });
  const [inputSelect, setInputSelect] = useState({
    titulo: "Professores*",
    options: [{label: "Fahad", value: {email: "fahad@imed.edu.br", id: 1, nome: "Fahad", sobrenome: "Kalil"}}],
    value: null
  });
  const [buttonStatus, setButtonStatus] = useState(true);

  const obterProfessores = async () => {
    const url = config.DOMAIN_URL + "/professores";
    const { data } = await axios.get(url);
    const professores = data.data.map(professor => ({
      label: professor.nome,
      value: professor,
    }))

    setInputSelect((prev) => ({...prev, options: professores}));
  };

  const onHandleChangeInput = (value, state) => {
    setInputsTexto(prevInputsSelect=> (
      {
        ...prevInputsSelect,
        [state]: {
          ...prevInputsSelect[state],
          valor: value
        }
      }
    ));
  };

  const onChangeInputSelect = (options) => {
    const selectedOption = options ? options.map(option => ({
      value: option.value,
      label: option.label
    })) : null;
    setInputSelect((prev) => ({...prev, value: selectedOption}));
  };

  const salvaTurma = async () => {
    debugger;
    const objectToSend = {
      nome: inputsTexto.nome.valor,
      professores: inputSelect.value.map(professor => (professor.value)),
      data_inicio: inputsTexto.dataInicio.valor,
      data_fim: inputsTexto.dataFim.valor
    };
    const url = config.DOMAIN_URL + "/turma";

    const res = axios.post(url, objectToSend);

    console.log(res);
  };

  // useEffect(() => {
  //   obterProfessores();
  // }, []);

  useEffect(() => {
    (inputsTexto.nome.valor &&
     inputsTexto.dataInicio.valor &&
     inputsTexto.dataFim.valor &&
     inputSelect.value
    )
    ? setButtonStatus(false)
    : setButtonStatus(true);
  }, [inputsTexto, inputSelect]);

  return (
    <CustomModal
      onClose={props.onClose}
      name={"Cadastrar turma"}
      height={"600px"}
      width={"500px"}
    > 
      <Container>
        {
          Object.keys(inputsTexto).map((item, i) => (
            <InputStyled
              key={i}
              item={inputsTexto[item]}
              type={inputsTexto[item].type}
              size={"450px"}
              onInputChange={(valor) => onHandleChangeInput(valor, item)}
            />
          ))
        }
        <SelectInput
          item={inputSelect}
          size={"450px"}
          isMultiple={true}
          onSelectOption={
            (option) => onChangeInputSelect(option)
          }
        />
        <ContainerButton>
          <ButtonStyled disabled={buttonStatus} size={{ width: "340px", height: "40px" }} onClick={salvaTurma}>
            Cadastrar Turma
          </ButtonStyled>
        </ContainerButton>
      </Container>
    </CustomModal>
  );
};

export default ModalAdicionarTurma;
