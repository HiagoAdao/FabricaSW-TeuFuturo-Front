import styled from "styled-components";
import { Colors } from "../../theme/colors";
import { H2Styled  } from "../../theme/typography";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`;

export const ContainerTable = styled.div`
  width: 95%;
  padding: 65px 20px 20px 20px;
`;

export const ButtonName = styled(H2Styled)`
  color: ${Colors.white};
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 90%;

  position: absolute;
  bottom: 15px;
`;
