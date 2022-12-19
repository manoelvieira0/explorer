const express = require('express') // Importando o Express

const app = express() // Inicializando o Express

app.get("/users/:id/:user", (request, response) => { // Route Params
  const { id, user } = request.params
  response.send(`Id da mensagem: ${id}, Para usuário ${user}`)
})

app.get("/users", (request, response) => { // Query Params
  const { page, limit } = request.query
  response.send(`Página: ${page}, Limit: ${limit}`)
})

const PORT = 3333 // Endereço do Servidor
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)) // Para escutar