import styled from "styled-components";
import { Colors } from "../../theme/colors";
import { H1Styled } from "../../theme/typography";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row nowrap;

  width: 100%;
  height: 100vh;
  
  background-color: ${Colors.primary};
`;

export const ContainerMsg = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
`;

export const Image = styled.img`
  display: flex;
  align-items: center;

  width: auto;
  height: ${props => props.height};
  
  margin: ${props => props.margin || 0};
  object-fit: contain;
`;

export const Text = styled(H1Styled)`
  color: ${Colors.white}
`;
