import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import CustomTable from "../../../components/CustomTable";
import AccordionSection from "../../../components/AccordionSection";
import ButtonLinkStyled from "../../../components/Link";
import AuthContext from "../../../config/context/auth";
import { Container, ContainerButton } from "./index.styled";

const ListagemAtividades = (props) => {
  const { usuario } = useContext(AuthContext);
  const headers = {
    nome: {
      title: "Nome",
      orderableColumn: false
    },
    descricao: {
      title: "Descrição",
      orderableColumn: false
    },
    peso: {
      title: "Peso",
      orderableColumn: false
    }
  };

  return (
    <AccordionSection title={"Atividades"}>
      <Container>
        <CustomTable
          headers={headers}
          data={[]}
          msgEmptyBody={"Ainda não existem atividades cadastradas."}
        />
        {
          !!(usuario.perfil.nome === "administrador") &&
          <ContainerButton>
            <ButtonLinkStyled
              title={"+ Clique para adicionar uma nova atividade."}
            />
          </ContainerButton>
        }
      </Container>
    </AccordionSection>
  );
};

export default withRouter(ListagemAtividades);

