import styled from "styled-components";
import { Colors } from "../../theme/colors";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TBody = styled.tbody`
  &:before {
    content: "@";
    display: block;
    line-height: 24px;
    visibility: hidden;
  }
`;

export const BodyVazio = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 100%;
  padding: 15px;

  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  
  background: ${Colors.white};
  border: 1px solid ${Colors.greyFiftyPercent};
  box-sizing: border-box;

  user-select: none;
  color: ${Colors.greyHundredPercent};
  cursor: default;
`;
