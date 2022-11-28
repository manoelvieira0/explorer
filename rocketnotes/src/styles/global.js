import { createGlobalStyle } from 'styled-components' // Estilização Global

export default createGlobalStyle`
  * { // Reset
    margin: 0;
    padding: 0;
    box-sizing: border-box; // Evitar que quando se aplique por exemplo um padding, isso não influencie no tamanho total do elemento.
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
    -webkit-font-smoothing: antialiased; // Para deixar fontes mais suavizadas
  }

  body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9); //Escurecida
  }
`