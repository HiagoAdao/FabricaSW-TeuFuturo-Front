import styled, { css } from "styled-components";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import { Colors } from "../../theme/colors";


export const ContainerInputSelect = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  max-width: 544px;
  cursor: ${props => props.disabled ? "not-allowed" : "default"};
`;

export const Title = styled.span`
  font-size: 14px;
  color: ${props => props.disabled ? Colors.greyFiftyPercent : Colors.primary};
  margin-bottom: 8px;
`;

const InputStyle = css`
  width: ${props => props.size || "544px"};
  height: 40px;
  border-radius: 4px;
`;

export const InputSelect = styled(Select)`
  ${InputStyle};
`;

export const InputSelectAsync = styled(AsyncSelect)`
  ${InputStyle};
`;

export const ErrorMessage = styled.span`
  font-size: 10px;
  color: ${Colors.red};
`;

export const DropDownStyled = styled.img`
  margin-right: 16px;
`;