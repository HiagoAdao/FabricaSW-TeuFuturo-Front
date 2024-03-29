import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import ButtonStyled from "../../components/ButtonStyled";
import TextInput from "../../components/TextInput";
import { 
  Container, ContainerLogo,
  Image, ContainerTitle, Title, SubTitle, 
  ContainerForm, ContainerComponents,
  ButtonName, InvalidLogin
} from "./index.styled";
import LogoTf from "../../assets/logo-teu-futuro.svg";
import ImageTf from "../../assets/logo-teu-futuro2.svg";
import axios from "axios";
import config from "../../config/constants";
import AuthContext from "../../config/context/auth";
import jwt from "jwt-decode";

const Login = (props) => {
  const { setUsuario } = useContext(AuthContext);

  const [ userInput, setUserInput ] = useState({
    titulo: "Usuário",
    valor: null,
    invalidacao: false,
    required: true
  });
  const [ passwordInput, setPasswordInput ] = useState({
    titulo: "Senha",
    valor: null,
    invalidacao: false,
    required: true
  });
  const [ erroLogin, setErroLogin ] = useState(false);

  const onChangeInput = (inputValue, inputName) => {
    const inputSetters = {
      user: () => setUserInput(
        (prevState) => ({ ...prevState, invalidacao: false, valor: inputValue })
      ),
      password: () => setPasswordInput(
        (prevState) => ({ ...prevState, invalidacao: false, valor: inputValue })
      )
    };
    
    inputSetters[inputName] && inputSetters[inputName]();
    setErroLogin(false);
  };

  const checkInvalidations = () => {
    if (!userInput.valor) {
      setUserInput(prev => ({ ...prev, invalidacao: true }));
      return true;
    };

    if (!passwordInput.valor) {
      setPasswordInput(prev => ({ ...prev, invalidacao: true }));
      return true;
    };

    return false;
  };

  const efetuarLogin = async (credenciais) => {
    try {
      const res = await axios.post(
        `${config.DOMAIN_URL}/login`,
        {},
        { auth: credenciais }
      );
      if(res.data.status !== "success") return false;
      return res.data.data;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  const handleLogin = async () => {
    const usuario = userInput.valor;
    const senha = passwordInput.valor;

    const hasInvalidations = checkInvalidations();
    if (hasInvalidations) return;

    const tokenUsuario = await efetuarLogin({ username: usuario, password: senha });
    if (tokenUsuario) {
      const dadosUsuario = jwt(tokenUsuario);
      const redirectPerfis = {
        administrador: "/turmas",
        aluno: `/turma/${dadosUsuario.turma_id}`,
        professor: "/turmas",
      };

      await setUsuario({
        ...dadosUsuario,
        token: tokenUsuario
      });
      props.history.push(redirectPerfis[dadosUsuario.perfil.nome]);
      return;
    }
    setErroLogin(true);
  };

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
            onInputChange={(valor) => onChangeInput(valor, "user")}
            item={userInput}
            size={"470px"}
          />
        </ContainerComponents>
        <ContainerComponents top={"35px"}>
          <TextInput
            type={"password"} 
            onInputChange={(valor) => onChangeInput(valor, "password")}
            item={passwordInput}
            size={"470px"}
          />
        </ContainerComponents>

        {
          erroLogin &&
          <ContainerComponents top={"0"}>
            <InvalidLogin>Usuário ou senha inválidos, tente novamente...</InvalidLogin>
          </ContainerComponents>
        }
        
        <ContainerComponents top={"90px"}>
          <ButtonStyled
            onClick={handleLogin}
            size={{width: "340px", height: "55px"}}
          >
            <ButtonName>Entrar</ButtonName>
          </ButtonStyled>
        </ContainerComponents>
      </ContainerForm>
    </Container>
  );
};

export default withRouter(Login);