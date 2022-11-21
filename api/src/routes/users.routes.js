const { Router } = require('express')

const usersRoutes = Router()

usersRoutes.post("/", (request, response) => { // Body Params
  const { name, email, password } = request.body
  response.json({ name, email, password }) // Utilizando a resposta como JSON
})

module.exports = usersRoutes