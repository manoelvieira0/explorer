require('express-async-errors')

const migrationsRun = require("./database/sqlite/migrations")
const AppError = require("../src/utils/AppError")
const express = require("express") // Importando o express
const uploadConfig = require('./configs/upload')

const cors = require('cors')

const routes = require("./routes") // Importe das rotas

migrationsRun()

const app = express() // Inicializando o express
app.use(cors())
app.use(express.json()) // Informar que utilizaremos o formato JSON

app.use(routes) // Usar as rotas



app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))

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

const PORT = 3333 // Constante com o endereço da porta
app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`)) 

