import React, { useState } from "react";
import { Switch, Slider, InputCheck } from "./index.styled.js";
import PropTypes from "prop-types";

const SwitchStyled = ({onClick, statusFlag}) => {
  const [ligado, setLigado] = useState(statusFlag); 

  const handleChange = ({target}) => {
    setLigado(target.checked);
    onClick && onClick(target.checked);
  };

  return (
    <div>
      <Switch>
        <InputCheck onClick={handleChange} defaultChecked={ligado} type="checkbox"/>
        <Slider />
      </Switch>
    </div>
    );
};

SwitchStyled.propTypes = {
  statusFlag: PropTypes.bool,
  onClick: PropTypes.func
};

SwitchStyled.defaultProps = {
  onClick: () => {},
  statusFlag: false
};

export default SwitchStyled;