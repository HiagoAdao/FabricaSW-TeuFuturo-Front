import styled from "styled-components";
import { Body2 } from "../../../theme/typography";
import { Sizes } from "../../../theme/sizes";

export const Container = styled.div`
  padding: 24px;
`;

export const ContainerButton = styled.div`
  margin-top: 20px;
`;

export const UltimaAtualizacao = styled(Body2)`
  margin-top: 20px;
  font-size: ${Sizes.large};
  user-select: none;
`;
