import React from "react";
import { ContainerTooltip, TooltipBody } from "./index.styled";
import PropTypes from "prop-types";

const TooltipStyled = ({ children, component, position }) => {
  return (
    <ContainerTooltip>
      {children}
      <TooltipBody arrowPosition={position}>
        {component}
      </TooltipBody>
    </ContainerTooltip>  
  );
};

TooltipStyled.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
	component: PropTypes.element,
	position: PropTypes.string
};

TooltipStyled.defaultProps = {
	component: <></>,
	position: "-16px"
};

export default TooltipStyled;