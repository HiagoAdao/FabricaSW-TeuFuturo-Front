import React, { useState, useEffect } from "react";
import {Container, ContainerButton} from "./index.styled"; 
import CustomModal from "../../../components/CustomModal";
import InputStyled from "../../../components/TextInput";
import SelectInput from "../../../components/SelectInput";
import axios from "axios";
import config from "../../../config/constants";
import ButtonStyled from "../../../components/ButtonStyled";

const ModalAdicionarTurma = (props) => {
  
  const inputsTexto = [
    {
      titulo: "Nome*"
    },
    {
      titulo: "Data início*"
    },
    {
      titulo: "Data fim*"
    }
  ];

  const inputSelect = {
    titulo: "Professores*",
    options: [{label: "olá", value: "olá"}, {label: "teste", value: "teste"}]

  }

  const obterProfessores = async () => {
    const url = config.DOMAIN_URL + "/professores";
    const { data } = await axios.get(url);
    console.log(data);
  };

  useEffect(() => {
    obterProfessores();
  }, []);

  return (
    <CustomModal
      onClose={props.onClose}
      name={"Cadastrar turma"}
      height={"600px"}
      width={"500px"}
    > 
      <Container>
        {
          inputsTexto.map((item, i) => (
            <InputStyled
              key={i}
              item={item}
              size={"450px"}
            />
          ))
        }
        <SelectInput
          item={inputSelect}
          size={"450px"}
          isMultiple={true}
        />
        <ContainerButton>
          <ButtonStyled size={{ width: "340px", height: "40px" }}>
            Cadastrar Turma
          </ButtonStyled>
        </ContainerButton>
      </Container>
    </CustomModal>
  );
};

export default ModalAdicionarTurma;
