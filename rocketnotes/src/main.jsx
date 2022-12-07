import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

import { MyContext } from './myContext';

import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MyContext.Provider value={{name: 'Manoel', email: 'manoel@email.com'}}>
        <Routes />
      </MyContext.Provider>
    </ThemeProvider>
  </React.StrictMode>
)
