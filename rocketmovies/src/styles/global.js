import { createGlobalStyle } from "styled-components";

export default createGlobalStyle` // Para utilizar o style global
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; // Evitar que quando o padding interno influencia no tamanho do elemento
  }

  body {
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialiased; // Para deixar a fonte melhor
  }

  body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none; // Remover quaisquer linha
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

`;