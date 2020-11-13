import styled, { css } from "styled-components";
import { Colors } from "../../theme/colors";
import { Body2 } from "../../theme/typography";

export const Container = styled.label`
  display: flex;
  flex-flow: nowrap;
  align-items: center;
  align-content: center;
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
`;

export const HideCheckbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const CheckboxInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 20px;
  height: 20px;
  
  
  border: 1px solid ${props => {
    if (props.checked && !props.disabled) return Colors.primary;
    return Colors.greyFiftyPercent;
  }};
  box-sizing: border-box;
  border-radius: 2px;

  user-select: none;
  background: ${props => {
    if (props.checked && !props.disabled) return Colors.primary;
    if (props.disabled) return Colors.greyTwentyPercent;
    return Colors.white;
  }};
`;

export const RadioInput = styled(CheckboxInput)`
  border-radius: 100%;
`;

export const RadioInputActive = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: ${Colors.white};
`;

export const Title = styled(Body2)`
  max-width: 237px;

  ${props => {
    if (props.titleNoWrap) return css`
      display: inline-block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;    
    `;
  }};

  margin-left: 16px;
  color: ${Colors.black};
`;