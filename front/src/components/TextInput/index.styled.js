import styled, {css} from "styled-components";
import { Colors } from "../../theme/Colors";

export const ContainerTextInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  max-width: 544px;
`;

export const Title = styled.span`
  font-size: 14px;
  color: ${props => props.disabled ? 'grey' : Colors.primaryPurple};
  margin-bottom: 8px;
`;

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  flex-flow: nowrap row;
  width: ${props => props.size || "542px"};
  height: 34px;
  border: 1px solid ${({borderColor}) => borderColor};
  background-color: ${props => props.disabled ? 'grey' : '#FFF'};
  cursor: ${props => props.disabled ? "not-allowed" : "default"};
  border-radius: 4px;
  margin-bottom: 2px;
`;

export const ErrorMessage = styled.span`
  font-size: 10px;
  color: 'red';
`;
