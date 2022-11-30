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
   > main {
    grid-area: content; // Conteúdo
    overflow-y: scroll;
    padding: 64px 0;
   }
`;

export const Links = styled.ul`
  list-style: none;

  > li {
    margin-top: 12px;
  }

  a {
    color: ${({theme}) => theme.COLORS.WHITE};
  }
`;

export const Content = styled.div`
  max-width: 600px;
  margin: 0 auto; // Para levar todo conteúdo para o centro da tela

  display: flex;
  flex-direction: column;

  > button:first-child {
    align-self: end;
  }

  > h1 {
    font-size: 36px;
    font-weight: 500;

    padding-top: 54px;
  }

  > p {
    font-size: 16px;
    margin-top: 16px;

    text-align: justify;
  }
`;