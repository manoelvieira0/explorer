const express = require("express") // Importando o express

const app = express() // Inicializando o express

app.get("/users/:id/:user", (request, response) => { // Route Params
  const { id, user } = request.params
  response.send(`Id da mensagem: ${id}, para o usuário: ${user}`)
})

app.get("/users", (request, response) => { // Query Params
  const { page, limit } = request.query
  response.send(`Página: ${page}. Mostrar: ${limit}`)
})

const PORT = 3000 // Constante com o endereço da porta
app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`)) 