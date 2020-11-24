import styled from "styled-components";
import { Colors } from "../../theme/colors";

export const ContainerModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;

  z-index: 16777270;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;

  width: 100%;
  height: 100%;

  z-index: 16777270;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ContainerChildren = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};;
  
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${Colors.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  z-index: 16777271;
`;

export const HeaderModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  width: ${props => props.width};
  height: 61px;
  
  background: ${Colors.primary};
  border-radius: 3px 3px 0 0;
  padding: 5px 24px;
  color: ${Colors.white};
`;

export const HeaderText = styled.div`
  user-select: none;
`;

export const CloseIcon = styled.img`
  width: auto;
  height: 24px;

  border: none;
  object-fit: contain;
  cursor: pointer;
`;

export const BodyModal = styled.div`
  padding: 25px 24px;
`; 
