import React from 'react';
import Button from '../../components/Button/Button';
import { makeStyles } from "@material-ui/core/styles";
import { Main, Roxo, Branco, Inputs } from './styles';
import InputStyled from '../../components/TextInput/index';

const styles = {
    cardCategoryWhite: {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    cardTitleWhite: {
      color: "#FFFFFF",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textDecoration: "none"
    }
};  

const useStyles = makeStyles(styles);
    
const Login = () => {
    const classes = useStyles();
    return (
          <Main > {/* Roxa 60% */}
            <Roxo>
              <h1 style={{color: '#FFF', fontSize: 96}}>#TeuFuturo</h1>
            </Roxo>
            <Branco> {/* Branca */}
              <div>
                <h1 style={{color: '#232323', marginBottom: 16}}>Bem-vindo(a)!</h1>
                <h3 style={{color: '#79919D'}}>Faça login para iniciar</h3>
              </div>

              <Inputs>
                <InputStyled item={{titulo: 'Usuario'}}></InputStyled>
                <InputStyled item={{titulo: 'Senha'}}></InputStyled>
                <Button title="Entrar">Entrar</Button>
              </Inputs>
            </Branco>
          </Main>
    )
}

export default Login;
