import React from "react";
import { StyledButtonLink } from "./index.styled";
import PropTypes from "prop-types";

const ButtonLinkStyled = ({ title, onClick }) => {
  const onClickLink = (event) => {
    onClick && onClick(event);
  };

  return (
    <StyledButtonLink onClick={onClickLink}>
      {title}
    </StyledButtonLink>
  );
};

ButtonLinkStyled.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

ButtonLinkStyled.defaultProps = {
  onClick: () => {}
};

export default ButtonLinkStyled;