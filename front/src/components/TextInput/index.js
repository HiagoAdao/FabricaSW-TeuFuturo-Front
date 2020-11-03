import React, { useState } from "react";
import {
  ContainerTextInput, 
  Title,
  ContainerInput, 
  ErrorMessage,
} from "./index.styled";
import { Colors } from "../../theme/Colors";
import PropTypes from "prop-types";

const InputStyled = ({item, onInputChange, disabled, size}) => {
  const [isFocused, setIsFocused] = useState(false);
  const {titulo, invalidacao, mensagemErro, password} = item;

  const masks = {
    // "value": createNumberMask({
    //   prefix: "R$ ",
    //   allowNegative: true,
    //   allowDecimal: true,
    //   decimalSymbol: ",",
    //   thousandsSeparatorSymbol: "."
    // }),
    "number": [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/],
    "date": [/[0-9]/, /[0-9]/, "/", /[0-9]/, /[0-9]/, "/", /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]
  };

  const placeholders = {
    "value" : "Ex: R$ 1.800,67",
    "number": "Digite a quantidade",
    "date": "DD/MM/AAAA",
    "text": "Digite o texto"
  };

  const onChange = ({target}) => {
    if(!target) return;
    onInputChange && onInputChange(target.value);
  };

  const setFocusTrue = () => {
    setIsFocused(true);
  };

  const setFocusFalse = () => {
    setIsFocused(false);
  };

  return(
    <ContainerTextInput>
      {
        titulo &&
          <Title disabled={disabled}>{titulo}</Title>
      }
      <ContainerInput
        borderColor={
          invalidacao 
          ? 'red'
          : isFocused
          ? '#232323'
          : 'grey'}
        disabled={disabled}
        size={size}
        type={password ? 'password' : 'text'}>
      </ContainerInput>
      {
        invalidacao &&
        <ErrorMessage>
          { 
            mensagemErro 
            ? mensagemErro
            : "Campo obrigatório!"
          }
        </ErrorMessage>
      }
    </ContainerTextInput>
  );
};

export default InputStyled;