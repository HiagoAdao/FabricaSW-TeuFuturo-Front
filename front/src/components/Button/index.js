import React from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";

const CustomButton = styled(Button)`
    background-color: #09C774;
    width: 340px;
    height: 60px;
    border-radius: 54px;
    font-weight: bold;
`;

const StyledButton = ({children, onClick}) => {
  return (
    <CustomButton onClick={onClick}>
      {children}
    </CustomButton>
  );
};

export default StyledButton;
