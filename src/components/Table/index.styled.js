import styled from "styled-components";
import { Colors } from "../../theme/colors";
import { H2Styled } from "../../theme/typography";

export const Container = styled.div`
  width: 100%;
  border: 1px solid ${Colors.greyFiftyPercent};
  box-sizing: border-box;
`;

export const CustomTable = styled.table`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: 16px
`;

export const CustomText = styled.h1`
  font-size: ${props => props.fontSize}px;
  color: ${props => props.color};
`;

export const CustomTextButton = styled.div`
  font-size: ${props => props.fontSize}px;
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
  color: ${props => props.color};
`;

export const Title = styled(H2Styled)`
  align-self: flex-start;
  color: ${Colors.primary};
  padding-left: 72px;
`;
