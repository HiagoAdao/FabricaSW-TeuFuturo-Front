import React, { useState } from "react";
import { 
  Container, CustomTable, 
  CustomText, CustomTextButton,
  Title
} from "./index.styled";
import { Colors } from "../../theme/colors";
import PropTypes from "prop-types";

const Table = (props) => {
  return (
    <Container>
        <CustomTable>
          <th>
            <CustomText fontSize={18} color={Colors.black}>
              { props.title }
            </CustomText>
          </th>
          <th>
            <CustomText fontSize={18} color={Colors.black}>
              { props.secondTitle }
            </CustomText>
          </th>
          <th>
            <CustomTextButton fontSize={16} color={props.buttonColor} onClick={props.onClick}>
              { props.buttonText }
            </CustomTextButton>
          </th>
        </CustomTable>
    </Container>
  );
};

Table.protoTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool
};

Table.defaultProps = {
  isOpen: false
};

export default Table;