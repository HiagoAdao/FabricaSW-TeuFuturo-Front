import styled from "styled-components";
import { Colors } from "../../theme/colors";

export const Container = styled.div`
  width: 100%;
  margin: 10px;
  border: 1px solid ${Colors.greyFiftyPercent};
  box-sizing: border-box;
`;

export const ContainerSummary = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

export const CustomText = styled.h1`
  font-size: ${props => props.fontSize}px;
  color: ${props => props.color};
`;

export const Details = styled.details`
  &[open] summary ~ * {
    transition: opacity 1s ease-in-out;
  }

  & summary::-webkit-details-marker {
    display: none;
  }

  & summary {
    position: relative;
    padding: 15px 30px;
    border: none;
    list-style: none;
    
    cursor: pointer;
    outline: none;
    user-select: none;
  }

  &[open] summary {
    border-bottom: 1px solid ${Colors.greyFiftyPercent};
    box-sizing: border-box;
  }
`;

export const ContainerChildren = styled.div`
  padding: 10px;
`;
