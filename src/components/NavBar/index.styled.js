import styled from "styled-components";
import { Colors } from "../../theme/colors";
import { H2Styled } from "../../theme/typography";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row nowrap;

  position: fixed;
  width: 100%;
  height: 80px;

  background-color: ${Colors.primary};
  z-index: 10;  
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
`;

export const Image = styled.img`
  width: auto;
  height: 50px;
  margin-left: 45px;
  object-fit: contain;
  user-select: none;
`;

export const Title = styled(H2Styled)`
  color: ${Colors.white};
  font-size: 20px;
  margin-left: 25px;
  user-select: none;
`;
