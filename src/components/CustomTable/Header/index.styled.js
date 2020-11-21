import styled from "styled-components";
import { Colors } from "../../../theme/colors";

export const THead = styled.th`
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 24px;

  color: ${Colors.primary};
  padding: 5px;
  text-align: left;

  border-bottom: none; 
  user-select: none;
  cursor: default;
`;

export const ContainerHead = styled.div`
  display: flex;
  align-items: center;
`;

export const SortIcon = styled.img`
  width: 24px;
  height: 24px;

  cursor: pointer;
`;

export const TextHead = styled.span`
  text-align: center;
  cursor: ${({ cursor }) => cursor};
`;
