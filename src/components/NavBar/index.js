import React from "react";
import { Nav, ContainerTitle, Image, Title } from "./index.styled";
import LogoTf from "../../assets/logo-teu-futuro.svg";
import PropTypes from "prop-types";

const NavBar = (props) => {
  return (
    <Nav>
      <ContainerTitle>
        <Image alt={"Logo #TeuFuturo"} src={LogoTf} />
        <Title>{ props.title }</Title>
      </ContainerTitle>
    </Nav>
  );
};

NavBar.protoTypes = {
  title: PropTypes.string.isRequired,
};

export default NavBar;
