import React from "react";
import LogoTf from "../../assets/logo-teu-futuro.svg";
import {  Container, ContainerMsg, Image, Text } from "./index.styled";

const NaoAutorizado = () => {
  return (
    <Container>
      <ContainerMsg>
        <Image alt="TFLogo" src={LogoTf} />
        <Text>Usuário não autorizado a acessar este item.</Text>
      </ContainerMsg>
    </Container>
  )
}

export default NaoAutorizado
