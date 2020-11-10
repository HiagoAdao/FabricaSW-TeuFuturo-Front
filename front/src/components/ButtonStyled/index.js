import React from "react";
import { Button } from "./index.styled";
import PropTypes from "prop-types";

const ButtonStyled = ({children, onClick, outlined, disabled, size}) => {
  const onClickButton = () => {
    if (disabled) return;
    
    onClick && onClick();
  };
  return(
    <Button onClick={onClickButton} outlined={outlined} disabled={disabled} size={size}>
      {children}
    </Button>
  );
};

ButtonStyled.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  onClick: PropTypes.func,
  outlined: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.object
};

ButtonStyled.defaultProps = {
  onClick: () => {},
  outlined: false,
  disabled: false,
  size: {}
};

export default ButtonStyled;