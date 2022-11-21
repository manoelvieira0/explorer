require('express-async-errors')

const AppError = require("../src/utils/AppError")

const express = require("express") // Importando o express

const routes = require("./routes") // Importe das rotas

const app = express() // Inicializando o express
app.use(express.json()) // Informar que utilizaremos o formato JSON

app.use(routes) // Usar as rotas

app.use((error, request, response, next) => {
  if(error instanceof AppError){
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    })
  }

  console.error(error)

  return response.status(500).json({
    status: "error",
    message: "Internal server error"
  })
})

const PORT = 3000 // Constante com o endereço da porta
app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`)) 

