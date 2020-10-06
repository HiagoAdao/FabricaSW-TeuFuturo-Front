import styled from "styled-components";
import {Sizes} from "../../theme/sizes";
import {Colors} from "../../theme/colors";

export const StyledButtonLink = styled.button`
  color: ${Colors.lightPrimary};
  font-size: ${Sizes.medium};
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  border: none;
  outline: none;
  background-color: white;
  cursor: pointer;

  &:hover{
    text-decoration: underline ${Colors.lightPrimary};;
  }
`;