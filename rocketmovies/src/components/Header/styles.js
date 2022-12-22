import styled from "styled-components";

export const Container = styled.header`
  grid-area: header; // Para o cabeçalho permanecer fixo

  width: 100%;
  height: 105px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.COLORS.GRAY_300};

  display: flex;
  justify-content: space-between;

  padding: 0 80px;

  background: red;
`;