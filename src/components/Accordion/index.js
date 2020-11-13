import React, { useState } from "react";
import { 
  Container, ContainerSummary, 
  ContainerChildren, CustomText, Details
} from "./index.styled";
import { Colors } from "../../theme/colors";
import PropTypes from "prop-types";

const AccordionSection = (props) => {
  const [openAccordion, setOpenAccordion] = useState(props.isOpen);

  return (
    <Container>
      <Details open={props.isOpen} onClick={() => setOpenAccordion(prevState => !prevState)}>
        <summary>
          <ContainerSummary>
            <CustomText fontSize={18} color={Colors.black}>
              { props.title }
            </CustomText>
            <CustomText fontSize={16} color={Colors.primary}>
              { !!openAccordion ? "Fechar" : "Visualizar" }
            </CustomText>
          </ContainerSummary>
        </summary>
        <ContainerChildren>
          { props.children }
        </ContainerChildren>
      </Details>
    </Container>
  );
};

AccordionSection.protoTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool
};

AccordionSection.defaultProps = {
  isOpen: false
};

export default AccordionSection;
