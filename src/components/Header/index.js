import { Container, HeaderTitle } from "./index.styled";
import logo from "../../assets/logo.svg";

const Header = (props) => {
  return (
    <>
      <Container>
        <img src={logo} alt="logo_teu_futuro" ></img>
        <HeaderTitle> {props.title || `Lista de Turmas`}</HeaderTitle>
      </Container>
    </>
  );
};

export default Header;