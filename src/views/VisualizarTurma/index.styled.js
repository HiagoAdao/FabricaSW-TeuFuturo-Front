import styled from "styled-components";
import { Colors } from "../../theme/colors";
import { H2Styled } from "../../theme/typography";

export const ContainerTurma = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
`;

export const Container = styled.div`
  width: 98%;
  padding: 35px 0;
`;

export const ContainerAccordions = styled.div`
  padding-bottom: 30px;
`;

export const ButtonName = styled(H2Styled)`
  color: ${Colors.white};
`;

export const Title = styled(H2Styled)`
  align-self: flex-start;
  color: ${Colors.primary};
  padding-left: 72px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
