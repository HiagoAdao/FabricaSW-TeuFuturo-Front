import styled from "styled-components";
import { Colors } from "../../theme/colors";

export const ContainerTooltip = styled.div`
  position: relative;
`;

export const TooltipBody = styled.div`
  min-width: 50px;
  min-height: 50px;

  visibility: hidden;
  position: absolute;

  margin-left: ${props => props.arrowPosition};
  margin-top: 10px;

  z-index: 1;
  border-radius: 4px;
  background-color: ${Colors.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);

  ${ContainerTooltip}:hover & {
    visibility: visible;
  }

  ${ContainerTooltip} &::after {
    content: " ";
    position: absolute;
    bottom: 100%; 
    left: ${props => props.right ? "90%" : "10%"};
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent ${Colors.white} transparent;
  }
`;