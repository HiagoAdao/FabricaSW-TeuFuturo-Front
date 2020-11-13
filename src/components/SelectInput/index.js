import React from "react";
import { 
  InputSelect, Title, ContainerInputSelect,
  ErrorMessage, DropDownStyled, InputSelectAsync} from "./index.styled";
import { Colors } from "../../theme/colors";
import iconDropDown from "../../assets/icons/icon-drop-down.svg";
import PropTypes from "prop-types";

const InputSelectStyled = ({item, onSelectOption, disabled, size}) => {

  const customStyles = {
    indicatorSeparator: () => ({
      color: Colors.white
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: state.isDisabled ? Colors.greyFiftyPercent : Colors.greyHundredPercent
    }),
    control: (provided, state) => ({
      ...provided,
      fontSize: "14px",
      paddingLeft: "4px",
      border: `1px solid ${
        item.invalidacao
        ? Colors.red 
        : item.valor 
        ? Colors.secondary
        : state.isFocused 
        ? Colors.darkPrimary
        : Colors.greyFiftyPercent}`,
      boxShadow: Colors.greyFiftyPercent,
      "&:hover": { 
        borderColor: 
          item.invalidacao
          ? Colors.red 
          : item.valor 
          ? Colors.secondary 
          : state.isFocused 
          ? Colors.darkPrimary
          : Colors.greyFiftyPercent},
      backgroundColor: 
        state.isDisabled 
        ? Colors.greyTwentyPercent
        : Colors.white
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: Colors.greyFiftyPercent,
      "&:hover": {
        color: Colors.greyFiftyPercent
      }
    }),
    option: (provided, state) => ({
      ...provided,
      "&:hover": { backgroundColor: Colors.greyTwentyPercent },
      backgroundColor: state.isSelected ? Colors.greyTwentyPercent : Colors.white,
      color: Colors.black
    })
  };

  const CustomDropDown = ({ innerRef, innerProps }) => (
    <div ref={innerRef} {...innerProps}>
      <DropDownStyled src={iconDropDown}/>
    </div>
  );

  const onSelect = (option) => {
    if(!option.value) return;
    onSelectOption && onSelectOption(option);
  };

  const getAsyncOptions = async(event) => {
    return await item.loadOptions(event);
  };

  return (
    <ContainerInputSelect disabled={disabled}>
      {
        item.titulo && 
        <Title disabled={disabled}>{item.titulo}</Title>
      }
      {
        item.type && item.type === "async-select"
        ? <InputSelectAsync
            value={item.valor}
            onChange={onSelect}
            isDisabled={disabled}
            styles={customStyles}
            placeholder={item.placeholder ? item.placeholder : "Selecione..."}
            noOptionsMessage={() => "Sem opções"}
            size={size}
            loadOptions={getAsyncOptions}
            components={{ DropdownIndicator: CustomDropDown }}
          />
        : <InputSelect
            onChange={onSelect}
            value={item.valor}
            options={item.options
              ? item.options.map(option => (
                {
                  value: option.value,
                  label: option.label
                }
              ))
              : []
            }
            isDisabled={disabled}
            styles={customStyles}
            placeholder={item.placeholder ? item.placeholder : "Selecione..."}
            noOptionsMessage={() => "Sem opções"}
            size={size}
            components={{ DropdownIndicator: CustomDropDown }}
          />
      }
      {
        item.invalidacao &&
          <ErrorMessage>
            {
              item.mensagemErro 
              ? item.mensagemErro
              : "Campo obrigatório!"
            }
          </ErrorMessage>
      }
    </ContainerInputSelect>
  );
};

InputSelectStyled.propTypes = {
  item: PropTypes.object.isRequired,
  onSelectOption: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.string
};

InputSelectStyled.defaultProps = {
  onSelectOption: () => {},
  disabled: false,
  size: ""
};

export default InputSelectStyled;
