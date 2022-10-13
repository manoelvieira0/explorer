const express = require('express')

const app = express()

app.post("/users", (request, response) => {
  response.send(`Você chamou o POST`)
})

const PORT = 3000
app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`))