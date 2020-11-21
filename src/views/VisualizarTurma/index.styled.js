import styled from "styled-components";
import { Colors } from "../../theme/colors";
import { H2Styled, H1Styled, Body2 } from "../../theme/typography";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
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
