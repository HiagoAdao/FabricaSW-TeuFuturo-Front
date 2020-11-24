import styled, { css } from "styled-components";
import { Colors } from "../../../theme/colors";
import { Sizes } from "../../../theme/sizes";

const TextStyle = css`
  font-style: normal;
  font-weight: 400;
  font-size: ${Sizes.large};

  line-height: ${Sizes.xxLarge};
`;

export const TRBody = styled.tr`
  background: ${Colors.white};
  border: 1px solid ${Colors.greyFiftyPercent};
  box-sizing: border-box;
`;

export const TDBody = styled.td`
  ${TextStyle};

  color: ${Colors.black};
  padding: 15px 20px;

  user-select: none;
  cursor: default;
`;

export const ContainerActionColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ActionColumn = styled.span`
  ${TextStyle};

  color: ${props => props.color || Colors.primary };
  padding: 15px 20px;

  user-select: none;
  cursor: pointer;
`;
