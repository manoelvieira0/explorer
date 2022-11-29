import styled from "styled-components";

export const Container = styled.header`
  grid-area: header; // Para o cabeçalho ficar fixo

  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between; // Na horizontal os elementos fiquem cada um em uma extremidade.

  padding: 0 80px;

  background-color: red;
`;