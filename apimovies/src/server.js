require('express-async-errors') // Importando para separar erros do cliente e do servidor
const AppError = require("./utils/AppError")
const express = require('express') // Importando o Express
const routes = require('./routes') // Importando as rotas em geral

const app = express() // Inicializando o Express
app.use(express.json()) // Para informar que será utilizado o formato JSON

app.use(routes)

app.use((error, request, response, next) => {
  if(error instanceof AppError){ // error instanciado por AppError
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    })
  } // Erro do cliente

  console.log(error)

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })
})

const PORT = 3333 // Endereço do Servidor
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)) // Para escutar