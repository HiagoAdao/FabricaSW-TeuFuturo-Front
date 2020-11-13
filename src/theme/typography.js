import styled, { css } from "styled-components";
import { Sizes } from "./sizes";
import { Colors } from "./colors";

export const HeadingStyle = css`
  line-height: ${Sizes.xxLarge};
  letter-spacing: auto;
`;

export const H1Styled = styled.h1`
  ${HeadingStyle};
  font-weight: 500;
  font-size: ${Sizes.xxLarge};
  color: ${props => props.color || Colors.black};
`;

export const H2Styled = styled.h2`
  ${HeadingStyle};
  font-weight: 500;
  font-size: ${Sizes.xLarge};
  color: ${props => props.color || Colors.black};
`;

export const Subtitle1 = styled.div`
  ${HeadingStyle};
  font-weight: 500;
  font-size: ${Sizes.large};
  color: ${props => props.color || Colors.black};
`;

export const Subtitle2 = styled.div`
  ${HeadingStyle};
  font-weight: bold;
  font-size: ${Sizes.medium};
  color: ${props => props.color || Colors.black};
`;

export const Body1 = styled.div`
  ${HeadingStyle};
  font-weight: 500;
  font-size: ${Sizes.medium};
  color: ${props => props.color || Colors.black};
`;

export const Body2 = styled.div`
  ${HeadingStyle};
  font-weight: normal;
  font-size: ${Sizes.medium};
  color: ${props => props.color || Colors.black};
`;

export const Caption = styled.div`
  ${HeadingStyle};
  font-weight: normal;
  font-size: ${Sizes.small};
  color: ${props => props.color || Colors.black};
`;