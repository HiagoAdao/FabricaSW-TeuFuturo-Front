import styled from "styled-components";

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