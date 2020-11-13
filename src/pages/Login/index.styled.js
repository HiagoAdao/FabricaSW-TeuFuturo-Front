import styled from "styled-components";
import { Colors } from "../../theme/colors";
import { H2Styled, H1Styled, Body2 } from "../../theme/typography";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  
  height: 100vh;
  width: 100%;
`;

export const ContainerLogo = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  
  height: 100%;
  width: 60%;

  background-color: ${Colors.primary};
  user-select: none;
`;

export const Image = styled.img`
  display: flex;
  align-items: center;

  width: auto;
  height: ${props => props.height};
  
  margin: ${props => props.margin || 0};
  object-fit: contain;
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  
  height: 100%;
  width: 40%;

  background-color: ${Colors.white};
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  margin: 74px 0 77px 0;
`;

export const Title = styled(H1Styled)`
  font-size: 28px;
  font-weight: 500;
`;

export const SubTitle = styled(Body2)`
  margin-top: 10px;
  font-size: 22px;
  opacity: 80%;
  color: ${Colors.greyHundredPercent};
`;

export const ContainerComponents = styled.div`
  margin-top: ${props => props.top};
`;

export const ButtonName = styled(H2Styled)`
  color: ${Colors.white};
`;
