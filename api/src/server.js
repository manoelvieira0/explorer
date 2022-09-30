const express = require("express")

const app = express()

app.get("/message/:id/:user", (request, response) => {
  const {id, user} = request.params
  response.send(`Id: ${id}. Para o usuário ${user}`)
})

app.get("/users", (request, response) => {
  const {page, limit} = request.query
  response.send(`Page: ${page}. Mostrar: ${limit}`)
})

const PORT = 3000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))