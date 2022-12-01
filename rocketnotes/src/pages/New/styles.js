import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content"
  ;

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap; // Para quando não caber mais, ir para outra linha
  }
`;

export const Form = styled.form`
  max-width: 550px;
  margin: 38px auto;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 36px;

    a {
      font-size: 18px;
      color: ${({theme}) => theme.COLORS.GRAY_100};
    }
  }
`;