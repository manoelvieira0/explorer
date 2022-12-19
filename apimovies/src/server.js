const express = require('express') // Importando o Express
const routes = require('./routes') // Importando as rotas em geral

const app = express() // Inicializando o Express
app.use(express.json()) // Para informar que será utilizado o formato JSON

app.use(routes)

const PORT = 3333 // Endereço do Servidor
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)) // Para escutar