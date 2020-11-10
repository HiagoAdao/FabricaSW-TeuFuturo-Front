import styled, {css} from "styled-components";
import MaskedInput from "react-text-mask";
import { Colors } from "../../theme/colors";

const CustomPlaceholder = css`
  &::-webkit-input-placeholder {
    color: ${Colors.greyHundredPercent}
  };

  &::-moz-placeholder {
    color: ${Colors.greyHundredPercent}
  };

  &::-ms-input-placeholder {
    color: ${Colors.greyHundredPercent}
  };

  &:disabled {
    background-color: ${Colors.greyTwentyPercent};
    cursor: not-allowed
  };

  &:disabled::-webkit-input-placeholder { /* WebKit browsers */
    color: ${Colors.greyFiftyPercent};
  };

  &:disabled:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: ${Colors.greyFiftyPercent};
  };

  &:disabled:-ms-input-placeholder { /* Internet Explorer 10+ */
    color: ${Colors.greyFiftyPercent};
  };
`;

export const ContainerTextInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  max-width: 544px;
`;

export const Title = styled.span`
  font-size: 14px;
  color: ${props => props.disabled ? Colors.greyFiftyPercent : Colors.primary};
  margin-bottom: 8px;
`;

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  flex-flow: nowrap row;
  width: ${props => props.size || "542px"};
  height: 34px;
  border: 1px solid ${({borderColor}) => borderColor};
  background-color: ${props => props.disabled ? Colors.greyTwentyPercent : Colors.white};
  cursor: ${props => props.disabled ? "not-allowed" : "default"};
  border-radius: 4px;
  margin-bottom: 2px;
`;

export const ContainerIcon = styled.div`
  display: flex;
  flex-flow: nowrap;
  width: 98%;
  align-content: center;
  align-items: center;
  padding: 8px 12px;
`;

export const InputMask = styled(MaskedInput)`
  width: 100%;
  height: 90%;
  border: none;
  margin: 2px 4px;
  font-size: 14px;

  &:focus {
    outline: none;
  };

  ${CustomPlaceholder};
`;

export const NoMaskInput = styled.input`
  width: 98%;
  height: 90%;
  border: none;
  margin: 2px 4px;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;

  &:focus {
    outline: none;
  };

  ${CustomPlaceholder};
`;

export const ErrorMessage = styled.span`
  font-size: 10px;
  color: ${Colors.red};
`;
