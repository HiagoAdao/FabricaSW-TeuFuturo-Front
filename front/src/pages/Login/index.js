import React, { useState } from "react";
import ButtonStyled from "../../components/ButtonStyled";
import TextInput from "../../components/TextInput";
import { 
  Container, ContainerLogo,
  Image, ContainerTitle, Title,
  SubTitle, ContainerForm,
  ContainerComponents, ButtonName
} from "./index.styled";
import LogoTf from "../../assets/logo-teu-futuro.svg";
import ImageTf from "../../assets/logo-teu-futuro2.svg";

const Login = (props) => {
  const [userInput, setUserInput] = useState({
    titulo: "Usuário",
    valor: null,
    invalidacao: false,
    required: true
  });
  const [passwordInput, setPasswordInput] = useState({
    titulo: "Senha",
    valor: null,
    invalidacao: false,
    required: true
  });

  return (
    <Container>
      <ContainerLogo>
        <Image 
          height={"120px"}
          src={LogoTf}
          alt={"Logo #TeuFuturo"}
          title={"Logo #TeuFuturo"}
        />
        <Image
          height={"55px"}
          src={ImageTf}
          alt={"#TeuFuturo"}
          margin={"20px 0 0 49px"}
        />
      </ContainerLogo>
      <ContainerForm>
        <ContainerTitle>
          <Title>Bem-vindo(a)!</Title>
          <SubTitle>Faça login para iniciar</SubTitle>
        </ContainerTitle>
        <ContainerComponents top={"20px"}>
          <TextInput
            onInputChange={(valor) => setUserInput((prev) => ({...prev, valor}))}
            item={userInput}
            size={"470px"}
          />
        </ContainerComponents>
        <ContainerComponents top={"35px"} bottom={""}>
          <TextInput
            onInputChange={(valor) => setPasswordInput((prev) => ({...prev, valor}))}
            item={passwordInput}
            size={"470px"}
          />
        </ContainerComponents>
        <ContainerComponents top={"90px"}>
          <ButtonStyled
            onClick={() => console.log("Clicando no botão")}
            size={{width: "340px", height: "55px"}}
          >
            <ButtonName>Entrar</ButtonName>
          </ButtonStyled>
        </ContainerComponents>
      </ContainerForm>
    </Container>
  );
};

export default Login;