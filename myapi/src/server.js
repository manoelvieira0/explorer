const express = require('express')

const app = express()

app.get("/message/:id/:user", (request, response) => {
  const {id, user} = request.params
  response.send(`Id da mensagem: ${id}. Para o usuário: ${user}`)
})

const PORT = 3000
app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`))