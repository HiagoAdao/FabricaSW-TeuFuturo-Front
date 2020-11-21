import styled from "styled-components";
import { Colors } from "../../theme/colors";
import { H2Styled  } from "../../theme/typography";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
`;

export const ContainerTable = styled.div`
  width: 95%;
  margin-top: 10px;
`;

export const ButtonName = styled(H2Styled)`
  color: ${Colors.white};
`;

export const ButtonContainer = styled.div`
  position: absolute;
  padding: 10px;
  bottom: 10px;
`;
