import React, { useState } from "react";
import {
  ContainerTextInput, Title,
  ContainerInput, InputMask,
  ErrorMessage, ContainerIcon,
  NoMaskInput
} from "./index.styled";
import createNumberMask from "text-mask-addons/dist/createNumberMask";
import calendar from "../../assets/icons/icon-calendar.svg";
import calendarDisabled from "../../assets/icons/icon-calendar-disabled.svg";
import { Colors } from "../../theme/colors";
import PropTypes from "prop-types";

const InputStyled = ({item, onInputChange, type, disabled, size}) => {
  const [isFocused, setIsFocused] = useState(false);
  const {titulo, valor, invalidacao, mensagemErro} = item;

  const masks = {
    "value": createNumberMask({
      prefix: "R$ ",
      allowNegative: true,
      allowDecimal: true,
      decimalSymbol: ",",
      thousandsSeparatorSymbol: "."
    }),
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
          ? Colors.red
          : valor
          ? Colors.secondary
          : isFocused
          ? Colors.darkPrimary
          : Colors.greyFiftyPercent}
        disabled={disabled}
        size={size}>
        <ContainerIcon>
          {
            type === "date" &&
              <img alt={"CalendarIcon"} src={disabled ? calendarDisabled : calendar}/>
          }
          {
            type === "date" || type === "value" || type === "number"
            ? <InputMask
                type="text"
                value={valor}
                onChange={onChange}
                disabled={disabled}
                margin="dense"
                placeholder={placeholders[type]}
                guide={false}
                onFocusCapture={setFocusTrue}
                onBlur={setFocusFalse}
                mask={masks[type]}
              />
            : <NoMaskInput 
                value={valor || ""}
                disabled={disabled}
                onChange={onChange}
                onFocusCapture={setFocusTrue}
                onBlur={setFocusFalse}
                placeholder={placeholders["text"]}
              />
          }
          
        </ContainerIcon>
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

InputStyled.formataValorReais = (valor) => {
  if(valor && typeof valor === "string"){
    let valorDia = valor.replace("R$ ", "");
    valorDia = valorDia.split(".").join("");
    valorDia = valorDia.replace(",", ".");

    return parseFloat(valorDia);
  }
  return valor || 0;
};


InputStyled.propTypes = {
  item: PropTypes.object.isRequired,
  onInputChange: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string,
};

InputStyled.defaultProps = {
  onInputChange: () => {},
  disabled: false,
  size: "",
  type: ""
};

export default InputStyled;