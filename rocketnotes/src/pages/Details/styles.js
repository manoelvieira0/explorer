import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh; // Altura da tela

  display: grid; // Para posicionar de acordo com posições
  grid-template-rows: 105px auto; // Linhas Horizontais
  grid-template-areas: 
  "header"
  "content"
  ; // Para nomear as regiões
`;